import { rename } from 'node:fs/promises';
import { join, dirname } from 'node:path';

const handleRnCommand = async (targetFilePath, newFileName) => {
    if (!targetFilePath || !newFileName) {
        throw new Error('Invalid input');
    }

    const newFilePath = join(dirname(targetFilePath), newFileName);

    console.log(targetFilePath);
    console.log(newFilePath);

    await rename(targetFilePath, newFilePath, (error) => {
        if (error) {
            throw error;
        }
    });
};

export default handleRnCommand;