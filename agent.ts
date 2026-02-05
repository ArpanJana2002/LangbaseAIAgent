import 'dotenv/config';
import { Langbase, MemoryRetrieveResponse } from 'langbase';

const langbase = new Langbase({ 
    apiKey: process.env.LANGBASE_API_KEY!, 
});

export async function runAiSupportAgent({ 
    chunks, 
    query 
}: { 
    chunks: MemoryRetrieveResponse[];
    query: string;
}): Promise<string> {
    const systemPrompt = await getSystemPrompt(chunks);  
    
    const { completion } = await langbase.pipes.run({
        stream: false,
        name: 'ai-support-agent',
        model: 'cohere:command-a-03-2025',
        messages: [ 
            {
                role: 'system',
                content: systemPrompt,  
            },
            {
                role: 'user',
                content: query,
            }
        ],
    });
    
    return completion;
}

async function getSystemPrompt(chunks: MemoryRetrieveResponse[]): Promise<string> {
    const context = chunks.map(chunk => chunk.text).join('\n\n');
    
    return `You are a helpful AI support agent for Langbase.

AVAILABLE CONTEXT FROM KNOWLEDGE BASE:
${context}

INSTRUCTIONS:
- Answer questions using ONLY the provided context above
- If context doesn't contain the answer, respond: "I don't have that information in my knowledge base."
- Be concise and accurate
- Reference specific details from context when possible

USER QUERY: Answer based on context only.`;
}

export async function runMemoryAgent(query: string): Promise<MemoryRetrieveResponse[]> {
    try {
        const chunks = await langbase.memories.retrieve({
            query,
            memory: [{name: 'knowledge-base'}],
            topK: 2
        });
        return chunks;
    } catch (error) {
        console.error('Retrieval error:', error);
        return [];
    }
}