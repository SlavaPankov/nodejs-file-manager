import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import printWorkingDirectory from './printWorkingDirectory.js';

const handleAddCommand = async (fileName) => {
    const filePath = resolve(process.cwd(), fileName);

    try {
        await writeFile(filePath, '', 'utf-8');
        printWorkingDirectory();
    } catch (error) {   
        throw error;
    }
};

export default handleAddCommand;