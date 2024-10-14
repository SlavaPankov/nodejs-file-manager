import { rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const handleRmCommand = async (filePath) => {
    if (!filePath) {
        throw new Error('Opeartion failed');
    }

    const absoluteFilePath = resolve(filePath);

    try {
        await rm(absoluteFilePath);
    } catch (error) {
        throw error;
    }
};

export default handleRmCommand;