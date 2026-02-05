import { runMemoryAgent, runAiSupportAgent } from './agent';

/* async function main() {
    try {
        console.log('Testing memory retrieval...');
        
        const query = 'How do I get started with Langbase?';
        const chunks = await runMemoryAgent(query);
        
        console.log('Retrieved chunks:', chunks);
        console.log(`Found ${chunks.length} relevant chunks`);
        
        if (chunks.length === 0) {
            console.log('No chunks found. Check:');
            console.log('- Memory exists: langbase.com dashboard');
            console.log('- Docs uploaded: run upload-docs.ts first');
            console.log('- Wait 2-5 mins for embedding');
        }
        
    } catch (error) {
        console.error('Error:', error);
    }
}

main().catch(console.error);

*/

async function main() {
    const query = 'What are Langbase Pipes?'
    const chunks = await runMemoryAgent(query);

    console.log(`Found ${chunks.length} chunks`);

    const completion = await runAiSupportAgent({
        chunks,
        query,
    });
    console.log("completion: ", completion);

}

main().catch(console.error);
