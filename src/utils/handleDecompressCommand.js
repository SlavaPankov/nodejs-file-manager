import { createReadStream, createWriteStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { basename, resolve, join } from 'node:path';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import { createBrotliDecompress } from 'node:zlib';
import printWorkingDirectory from './printWorkingDirectory.js';

const handleDecompressCommand = async (sourceFilePath, targetPath) => {
    if (!sourceFilePath || !targetPath) {
        throw new Error('Invalid input\n');
    }

    const absoluteSourcePath = resolve(sourceFilePath);
    const ansoluteTargetPath = resolve(targetPath);

    const fileName = basename(absoluteSourcePath, '.br');
    const destinationPath = join(ansoluteTargetPath, fileName);

    try {
        const sourceStat = await stat(absoluteSourcePath);

        if (!sourceStat.isFile()) {
            throw new Error('Operation failed');
        }

        const readStream = createReadStream(absoluteSourcePath);
        const writeStram = createWriteStream(destinationPath);
        const brotliDecompress = createBrotliDecompress();

        const pipe = promisify(pipeline);

        await pipe(readStream, brotliDecompress, writeStram);
        printWorkingDirectory();
    } catch (error) {
        throw error;
    }
};

export default handleDecompressCommand;