import { createReadStream } from 'node:fs';
import { resolve } from 'node:path';
import printWorkingDirectory from './printWorkingDirectory.js';

const handleCatCommand = async (path) => {
    try {
        const resolvedPath = resolve(path);
    
        const stream = createReadStream(resolvedPath, { encoding: 'utf-8' });
    
        stream.on('data', (chunk) => {
            console.log(chunk);
        });

        stream.on('end', () => {
            printWorkingDirectory();
        });

        stream.on('error', (error) => {
            console.error('Operation failed\n');
            printWorkingDirectory();
        });
    } catch (error) {
        throw error;
    }
};

export default handleCatCommand;