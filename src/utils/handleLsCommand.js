import { readdir } from 'node:fs/promises';
import printWorkingDirectory from './printWorkingDirectory.js';

export const handleLsCommand = async () => {
    try {
        const files = await readdir(process.cwd(), { withFileTypes: true });

        const directories = files.filter((file) => file.isDirectory()).sort();
        const filesInDirectory = files.filter((file) => !file.isDirectory()).sort()
        const sortedDirectoryContent = [...directories, ...filesInDirectory].map((item, index) => ({ Name: item.name, Type: item.isDirectory() ? 'directory' : 'file'  }));

        console.table(sortedDirectoryContent);
        printWorkingDirectory();
    } catch (error) {
        throw error;
    }
};

export default handleLsCommand;