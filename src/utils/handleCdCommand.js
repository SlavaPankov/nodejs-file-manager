import { resolve } from 'node:path';
import process from 'node:process';
import { stat } from 'node:fs/promises';

const handleCdCommand = async (targetDir) => {
    const resolvedPath = resolve(process.cwd(), targetDir);

    
    try {
        const stats = await stat(resolvedPath);

        if (!stats.isDirectory()) {
            throw new Error('Target destination is not a directory');
        }

        process.chdir(resolvedPath);
    } catch(error) {
        if (error.code === 'ENOENT') {
            throw new Error('No such directory');
        }
        
        throw error;
    }
}

export default handleCdCommand;