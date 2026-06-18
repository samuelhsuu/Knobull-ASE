import os, csv
from dotenv import load_dotenv
from sentence_transformers import SentenceTransformer
from supabase import create_client, Client

# Load env variables from env
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
	raise ValueError("Missing Supabase environment variables")

# Initialize clients
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
model = SentenceTransformer('all-MiniLM-L6-v2')

# Manually chunk text
def chunk_text(text: str, words_per_chunk: int = 10, overlap: int = 5):
	words = text.split()
	chunks = []
	for i in range(0, len(words), words_per_chunk-overlap):
		chunk_words = words[i:i + words_per_chunk]
		chunks.append(" ".join(chunk_words))
		if i + words_per_chunk >= len(words):
			break
	return chunks

# Process csv file -> database
def ingest_csv(file: str):
	if not os.path.exists(file):
		print(f"Error: The file '{file}' does not exist.")
		return
	print(f"Opening CSV file: {file}")

	with open(file, mode='r', encoding='utf-8') as csv_file:
		reader = csv.DictReader(csv_file) # Stores each row as a dict using headers

		for row_index, row in enumerate(reader, start=1):
			id = row.get("id")
			title = row.get("title")
			desc = row.get("description")

			if not id or not title or not desc:
				print(f"Skipping row {row_index}: Missing ID or title or description.")
				continue
			print(f"\n[{row_index}] Processing Document: {title} (ID: {id})")

			# Populate documents table
			doc_metadata = {
				"id": id,
				"title": title,
				"description": desc,
				"category": row.get("category"),
				"type": row.get("type"),
				"link": row.get("link")
			}

			try:
				supabase.table("documents").insert(doc_metadata).execute()
				print(f" -> Metadata saved to 'documents' table.")
			except Exception as e:
				print(f" -> Error saving metadata (it may already exist): {e}")
				continue

			# Populate chunks table
			text_chunks = chunk_text(f"{title}. {desc}")
			chunk_embeddings = model.encode(text_chunks, convert_to_numpy=True)
			print(f" -> Split text into {len(text_chunks)} chunks.")

			db_chunks = []
			for chunk_index, (chunk, embedding) in enumerate(zip(text_chunks, chunk_embeddings)):
				db_chunks.append({
					"document_id": id,
					"content_chunk" : chunk,
					"chunk_index": chunk_index,
					"embedding": embedding.tolist()
				})
			try:
				supabase.table("chunks").insert(db_chunks).execute()
				print(f" -> Successfully uploaded {len(db_chunks)} vectors to 'chunks' table.")
			except Exception as e:
				print(f" -> Error uploading vectors for this row {e}")
if __name__ == "__main__":
	file = "/data/sample_courses.csv"
	ingest_csv(file)



		
