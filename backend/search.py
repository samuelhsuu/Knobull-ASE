import os
from dotenv import load_dotenv
from sentence_transformers import SentenceTransformer
from supabase import create_client, Client

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
	raise ValueError("Missing Supabase environment variables")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
model = SentenceTransformer('all-MiniLM-L6-v2')

def run_hybrid_search(user_query: str):
	print(f"Searching for: '{user_query}'...")

	# Encode dynamically changes return types, 
	query_vector = model.encode(user_query, convert_to_numpy=True).tolist() # type: ignore

	response = supabase.rpc(
		"hybrid_search",
		{
			"query_text": user_query,
			"query_embedding": query_vector,
			"match_count": 5,
			"full_text_weight": 0.3,
			"semantic_weight": 0.7
		}
	).execute()

	print("\n--- Top Search Results ---")
	results = response.data
	# Check that returned data is a list
	if isinstance(results, list):
		for index, row in enumerate (results, start=1):
			print(f"\n[{index}] Combined RRF Score: {row['combined_score']:.5f}") # type: ignore
			print(f"Doc ID: {row['document_id']} | Chunk Index: {row['chunk_index']}") # type: ignore
			print(f"Text Snippet: {row['content_chunk']}") # type: ignore

if __name__ == "__main__":
	run_hybrid_search("Quantum algorithms")

