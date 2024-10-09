import { createReadStream } from 'node:fs';
import { resolve } from 'node:path';

const handleCatCommand = (path) => {
    try {
        const resolvedPath = resolve(path);
    
        const stream = createReadStream(resolvedPath, { encoding: 'utf-8' });
    
        stream.on('data', (chunk) => {
            console.log(chunk);
        });

        stream.on('error', (error) => {
            console.log(error);
        });
    } catch (error) {
        throw error;
    }
};

export default handleCatCommand;