import process from 'node:process';
import { dirname } from 'node:path';
import printWorkingDirectory from './printWorkingDirectory.js';

const handleUpCommand = () => {
    const currentDir = process.cwd();
    const parentDir = dirname(currentDir);

    if (currentDir === parentDir) {
        return;
    }

    try {
        process.chdir(parentDir);
        printWorkingDirectory();
    } catch (error) {
        throw error;
    }
};

export default handleUpCommand;