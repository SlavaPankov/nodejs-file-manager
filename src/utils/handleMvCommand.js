import { rename } from 'node:fs/promises';
import { resolve, join, basename } from 'node:path';
import printWorkingDirectory from './printWorkingDirectory.js';

const handleMvCommand = async (sourceFilePath, targetFilePath) => {
    if (!sourceFilePath || !targetFilePath) {
        throw new Error('Invalid input\n');
    }

    const absoluteSourceFilePath = resolve(sourceFilePath);
    const absoluteTargetFilePath = resolve(targetFilePath);

    const fileName = basename(absoluteSourceFilePath);

    const newFilePath = join(absoluteTargetFilePath, fileName);

    try {
        await rename(absoluteSourceFilePath, newFilePath);
        printWorkingDirectory();
    } catch (error) {
        throw error;
    }
};

export default handleMvCommand;