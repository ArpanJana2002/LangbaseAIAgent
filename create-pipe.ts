import 'dotenv/config';
import { Langbase } from 'langbase';

const langbase = new Langbase({ 
    apiKey: process.env.LANGBASE_API_KEY!, 
});

async function main() {
    try {
        const supportAgent = await langbase.pipes.create({
            name: 'ai-support-agent',
            description: 'An AI agent to support users with their queries',
            messages: [  
                {
                    role: 'system',
                    content: 'You are a helpful AI assistant.'
                },
            ],
        });
        console.log("Support agent created:", supportAgent);
    } catch (error) {
        console.error('Error:', error);
    }
}

console.log('Creating support agent...');
main().catch(console.error);
