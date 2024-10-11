import { readdir } from 'node:fs/promises';

export const handleLsCommand = async () => {
    try {
        const files = await readdir(process.cwd(), { withFileTypes: true });

        const directories = files.filter((file) => file.isDirectory()).sort();
        const filesInDirectory = files.filter((file) => !file.isDirectory()).sort()
        const sortedDirectoryContent = [...directories, ...filesInDirectory].map((item, index) => ({ Name: item.name, Type: item.isDirectory() ? 'directory' : 'file'  }));

        console.table(sortedDirectoryContent);
    } catch (error) {
        throw error;
    }
};

export default handleLsCommand;