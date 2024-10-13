import printWorkingDirectory from './utils/printWorkingDirectory.js';
import handleUpCommand from "./utils/handleUpCommand.js";
import printGreeting from "./utils/printGreeting.js";
import process from 'node:process';
import os from 'node:os';
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

process.stdin.resume();
printGreeting();

const initailDir = os.homedir();
process.chdir(initailDir);

printWorkingDirectory();
process.stdin.on('data', async (input) => {
    const trimmedInput = input.toString().trim();
    const [command, firstArg, secondArg] = trimmedInput.split(' ');

    try {
        switch (command) {
            case 'up':
                handleUpCommand();
                break;
            case 'cd':
                await handleCdCommand(firstArg);
                break;
            case 'ls':
                await handleLsCommand();
                break;
            case 'cat':
                handleCatCommand(firstArg);
                break;
            case 'add':
                handleAddCommand(firstArg);
                break;
            case 'rn':
                await handleRnCommand(firstArg, secondArg);
                break;
            case 'cp':
                await handleCpCommand(firstArg, secondArg);
                break;
            case 'mv':
                await handleMvCommand(firstArg, secondArg);
                break;
            case 'rm':
                await handleRmCommand(firstArg);
                break;
            case 'os':
                handleOsCommand(firstArg);
                break;
            case 'hash':
                await handleHashCommand(firstArg);
                break;
            case '.exit':
                printGreeting(true);

                break;
            default:
                console.log('Invalid input\n');
                break;
        }

    } catch (error) {
        console.error(error);
    }

    printWorkingDirectory();
});

process.on('SIGINT', () => {
    printGreeting(true);
})
