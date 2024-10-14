import { resolve } from 'node:path';
import process from 'node:process';
import { stat } from 'node:fs/promises';
import printWorkingDirectory from './printWorkingDirectory.js';

const handleCdCommand = async (targetDir) => {
    if (!targetDir) {
        throw new Error('Invalid input\n');
    }

    const resolvedPath = resolve(process.cwd(), targetDir);
    
    try {
        const stats = await stat(resolvedPath);

        if (!stats.isDirectory()) {
            throw new Error('Operation failed\n');
        }

        process.chdir(resolvedPath);
        printWorkingDirectory();
    } catch(error) {
        if (error.code === 'ENOENT') {
            throw new Error('Operation failed\n');
        }
        
        throw error;
    }
}

export default handleCdCommand;