import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { pipeline } from '@huggingface/transformers';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if(!supabaseUrl || !supabaseKey){
	console.error("Error: Missing Supabase credentials");
	process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Singleton
class EmbeddingPipeline{
	static task = 'feature-extraction';
	static model = 'Xenova/all-MiniLM-L6-v2';
	static instance = null;

	static async getInstance(){
		if(this.instance === null){
			console.log(`Loading Hugging Face model (${this.model})...`);
			this.instance = await pipeline(this.task, this.model);
			console.log("Model loaded into memory successfully");
		}
		return this.instance
	}
}

app.post('/api/recommend', async (req, res) => {
	// Validate that frontend sent a string
	try{
		const { goal } = req.body;
		if(!goal || typeof goal !== 'string'){
			return res.status(400).json({ success: false, error: "A text 'goal' string is required."});
		}

		const extractor = await EmbeddingPipeline.getInstance();
		console.log(`Embedding query: "${goal}"`);
		const output = await extractor(goal, { pooling: 'mean', normalize: true});
		const queryEmbedding = Array.from(output.data); // Float32Array -> JS array

		console.log("Querying Supabase pgvector");
		const { data, error } = await supabase.rpc('hybrid_search', {
			query_text: goal,
			query_embedding: queryEmbedding,
			match_count: 5,
			full_text_weight: 0.3,
			semantic_weight: 0.7,
			rrf_k: 50
		});
		if(error){
			console.error("Supabase RPC Error: ", error);
			throw error;
		}
			console.log(`Found ${data.length} relevant matches`);
			return res.json({
				success: true,
				count: data.length,
				recommendations: data
			});
	}
	catch (error){
		console.error("Server Error in /api/recommend: ", error);
		return res.status(500).json({
			success: false,
			error: "An internal server error occurred while processing recommendations."
		});
	}
});

app.get('/api/health', (req, res) => {
	res.json({status: "online"});
});

app.listen(PORT, ()=>{
	console.log(`Express Gateway running on http://localhost:${PORT}`);
});

