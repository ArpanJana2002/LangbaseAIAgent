import 'dotenv/config';
import { Langbase } from 'langbase';
import { readFile } from 'fs/promises';
import path from 'path';

const langbase = new Langbase({ 
    apiKey: process.env.LANGBASE_API_KEY!, 
});

async function main() {
    try {
        const cwd = process.cwd();
        
        console.log('Reading FAQ file...');
        const langbaseFaq = await readFile(
            path.join(cwd, 'docs', 'langbase-faq.txt'), 
            'utf8'  
        );

        console.log('Uploading document to Langbase memory...');
        
        //  FIXED: memory array format (not memoryName)
        const faqRequest = await langbase.memories.documents.upload({
            memoryName: 'knowledge-base',  
            document: langbaseFaq,
            contentType: 'text/plain',
            documentName: 'langbase-faq.txt',
            meta: { category: 'FAQ', source: 'Langbase Documentation' }
        });
        
        console.log(faqRequest.ok 
            ? `FAQ uploaded! ID: ${faqRequest.id}` 
            : `Upload failed: ${faqRequest.error?.message}`);
            
    } catch(error) {
        console.error('Error:', error instanceof Error ? error.message : 'Unknown error');
    }
}

console.log('Starting upload...');
main().catch(console.error);
