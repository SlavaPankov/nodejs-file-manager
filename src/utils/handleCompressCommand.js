import { createReadStream, createWriteStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { basename, resolve, join } from 'node:path';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import { createBrotliCompress } from 'node:zlib';

const handleCompressCommand = async (sourseFilePath, targetPath) => {
    if (!sourseFilePath || !targetPath) {
        throw new Error('Operation failed');
    }

    const absoluteSourcePath = resolve(sourseFilePath);
    const absoluteTargetPath = resolve(targetPath);

    const fileName = basename(absoluteSourcePath);
    const targetFilePath = join(absoluteTargetPath, `${fileName}.br`);

    try {
        const sourceStat = await stat(absoluteSourcePath);

        if (!sourceStat.isFile()) {
            throw new Error('Operation failed');
        }

        const readStream = createReadStream(absoluteSourcePath);
        const writeStram = createWriteStream(targetFilePath);
        const brotliCompress = createBrotliCompress();
        const pipe = promisify(pipeline);

        await pipe(readStream, brotliCompress, writeStram);
    } catch (error) {
        throw error;
    }
};

export default handleCompressCommand;