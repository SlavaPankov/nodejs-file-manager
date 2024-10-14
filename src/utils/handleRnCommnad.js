import { rename } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import printWorkingDirectory from './printWorkingDirectory.js';

const handleRnCommand = async (targetFilePath, newFileName) => {
    if (!targetFilePath || !newFileName) {
        throw new Error('Invalid input\n');
    }

    const newFilePath = join(dirname(targetFilePath), newFileName);

    await rename(targetFilePath, newFilePath, (error) => {
        if (error) {
            printWorkingDirectory();
            throw error;
        }
    });
    printWorkingDirectory();
};

export default handleRnCommand;