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

process.stdin.resume();
printGreeting();

const initailDir = os.homedir();
process.chdir(initailDir);

printWorkingDirectory();
process.stdin.on('data', async (input) => {
    const trimmedInput = input.toString().trim();
    const [command, firstArg, secondArg] = trimmedInput.split(' ');

    switch (command) {
        case 'up':
            handleUpCommand();
            break;
        case 'cd':
            try {
                await handleCdCommand(firstArg);
            } catch (error) {
                console.error(error);
            }

            break;
        case 'ls':
            try {
                await handleLsCommand();
            } catch (error) {
                console.error(error);
            }

            break;
        case 'cat':
            try {
                handleCatCommand(firstArg);
            } catch (error) {
                console.error(error);
            }

            break;
        case 'add':
            try {
                handleAddCommand(firstArg);
            } catch (error) {
                console.error(error);
            }
            
            break;
        case 'rn':
            try {
                await handleRnCommand(firstArg, secondArg);
            } catch (error) {
                console.error(error);
            }

            break;
        case 'cp':
            try {
                await handleCpCommand(firstArg, secondArg);
            } catch (error) {
                console.error(error);
            }

            break;
        case 'mv':
            try {
                await handleMvCommand(firstArg, secondArg);
            } catch (error) {
                console.error(error);
            }

            break;
        case 'rm':
            try {
                await handleRmCommand(firstArg);
            } catch (error) {
                console.error(error);
            }

            break;
        case '.exit':
            printGreeting(true);

            break;
        default:
            console.log('Invalid input\n');
            break;
    }

    printWorkingDirectory();
});

process.on('SIGINT', () => {
    printGreeting(true);
})
