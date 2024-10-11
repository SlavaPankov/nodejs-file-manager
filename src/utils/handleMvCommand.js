import { rename } from 'node:fs/promises';
import { resolve, join, basename } from 'node:path';

const handleMvCommand = async (sourceFilePath, targetFilePath) => {
    if (!sourceFilePath || !targetFilePath) {
        throw new Error('Operation failed');
    }

    const absoluteSourceFilePath = resolve(sourceFilePath);
    const absoluteTargetFilePath = resolve(targetFilePath);

    const fileName = basename(absoluteSourceFilePath);

    const newFilePath = join(absoluteTargetFilePath, fileName);

    try {
        rename(absoluteSourceFilePath, newFilePath);
    } catch (error) {
        throw error;
    }
};

export default handleMvCommand;