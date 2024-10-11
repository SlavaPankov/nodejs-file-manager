import { cp } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';

const handleCpCommand = async (sourcePath, targetPath) => {
    if (!sourcePath || !targetPath) {
        throw new Error('Operation failed');
    }

    const absoluteFilePath = resolve(sourcePath);
    const absoluteNewDirectory = resolve(targetPath);

    const fileName = basename(absoluteFilePath);
    const newFilePath = join(absoluteNewDirectory, fileName);

    try {
        await cp(absoluteFilePath, newFilePath, { recursive: true });
    } catch (error) {
        throw error;
    }
};

export default handleCpCommand;
