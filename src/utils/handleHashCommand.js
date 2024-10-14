import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import printWorkingDirectory from './printWorkingDirectory.js';

const handleHashCommand = async (filePath) => {
    if (!filePath) {
        throw new Error('Invalid input\n');
    }

    const absoluteFilePath = resolve(filePath);

    try {
        const hash = createHash('sha256');
        const stream = createReadStream(absoluteFilePath);
    
        stream.on('data', (chunk) => {
            hash.update(chunk);
        });
    
        stream.on('end', () => {
            console.log(hash.digest('hex'));
            printWorkingDirectory();
        });

        stream.on('error', () => {
            console.log('Operation failed');
            printWorkingDirectory();
        })
    } catch (error) {
        throw error;
    }
};

export default handleHashCommand;
