import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';


const handleAddCommand = async (fileName) => {
    const filePath = resolve(process.cwd(), fileName);

    try {
        await writeFile(filePath, '', 'utf-8');
    } catch (error) {   
        throw error;
    }
};

export default handleAddCommand;