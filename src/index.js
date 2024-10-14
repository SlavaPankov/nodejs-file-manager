import printWorkingDirectory from './utils/printWorkingDirectory.js';
import handleUpCommand from "./utils/handleUpCommand.js";
import printGreeting from "./utils/printGreeting.js";
import process from 'node:process';
import os from 'node:os';
import readline from 'node:readline';
import changeQuotes from './utils/changeQuotes.js';
import handleCdCommand from './utils/handleCdCommand.js';
import handleLsCommand from './utils/handleLsCommand.js';
import handleCatCommand from './utils/handleCatCommand.js';
import handleAddCommand from './utils/handleAddCommand.js';
import handleRnCommand from './utils/handleRnCommnad.js';
import handleCpCommand from './utils/handleCpCommand.js';
import handleMvCommand from './utils/handleMvCommand.js';
import handleRmCommand from './utils/handleRmCommand.js';
import handleOsCommand from './utils/handleOsCommand.js';
import handleHashCommand from './utils/handleHashCommand.js';
import handleCompressCommand from './utils/handleCompressCommand.js';
import handleDecompressCommand from './utils/handleDecompressCommand.js';

process.stdin.resume();
printGreeting();

const initailDir = os.homedir();
process.chdir(initailDir);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

printWorkingDirectory();
rl.on('line', async (input) => {
    let [command, ...args] = input.toString().trim().split(/\s+/);

    if (/"|'/g.test(args)) {
        args = changeQuotes(args);
    }

    try {
        switch (command) {
            case 'up':
                handleUpCommand();
                break;
            case 'cd':
                await handleCdCommand(args[0]);
                break;
            case 'ls':
                await handleLsCommand();
                break;
            case 'cat':
                await handleCatCommand(args[0]);
                break;
            case 'add':
                await handleAddCommand(args[0]);
                break;
            case 'rn':
                await handleRnCommand(args[0], args[1]);
                break;
            case 'cp':
                await handleCpCommand(args[0], args[1]);
                break;
            case 'mv':
                await handleMvCommand(args[0], args[1]);
                break;
            case 'rm':
                await handleRmCommand(args[0]);
                break;
            case 'os':
                handleOsCommand(args[0]);
                break;
            case 'hash':
                await handleHashCommand(args[0]);
                break;
            case 'compress':
                await handleCompressCommand(args[0], args[1]);
                break;
            case 'decompress':
                await handleDecompressCommand(args[0], args[1]);
                break;
            case '.exit':
                printGreeting(true);

                break;
            default:
                console.error('Invalid input\n');
                printWorkingDirectory();
                break;
        }
    } catch (error) {
        console.error(error);
        printWorkingDirectory();
    }
});

rl.on('SIGINT', () => {
    printGreeting(true);
});
