import 'dotenv/config';
import { Langbase } from 'langbase'; 

const langbase = new Langbase({ apiKey: process.env.LANGBASE_API_KEY! });

async function main() {
    try {
        console.log('Creating memory "knowledge-base"...');
        
        const memory = await langbase.memories.create({
            name: 'knowledge-base',
            description: 'RAG FAQ for Langbase',
            embedding_model: 'cohere:embed-multilingual-v3.0'  
        });
        
        
        console.log('Memory created:', JSON.stringify(memory, null, 2));
        return memory;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

main().catch(console.error);
