import { rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import printWorkingDirectory from './printWorkingDirectory.js';

const handleRmCommand = async (filePath) => {
    if (!filePath) {
        throw new Error('Invalid input\n');
    }

    const absoluteFilePath = resolve(filePath);

    try {
        await rm(absoluteFilePath);
        printWorkingDirectory();
    } catch (error) {
        throw error;
    }
};

export default handleRmCommand;