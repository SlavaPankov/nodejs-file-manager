import process from 'node:process';
import { dirname } from 'node:path';

const handleUpCommand = () => {
    const currentDir = process.cwd();
    const parentDir = dirname(currentDir);

    if (currentDir === parentDir) {
        console.log('You are already in the root directory.');
        return;
    }

    try {
        process.chdir(parentDir);
    } catch (error) {
        console.error(error.message);
        process.exit();
    }
};

export default handleUpCommand;