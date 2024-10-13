import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';

const handleHashCommand = async (filePath) => {
    if (!filePath) {
        throw new Error('Operation failed');
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
        });

        stream.on('error', (error) => {
            console.log(error);
        })
    } catch (error) {
        throw error;
    }
};

export default handleHashCommand;
