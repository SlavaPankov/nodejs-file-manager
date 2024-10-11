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

process.stdin.resume();
printGreeting();

const initailDir = os.homedir();
process.chdir(initailDir);

printWorkingDirectory();
process.stdin.on('data', async (input) => {
    const trimmedInput = input.toString().trim();
    const [command, firstArg, secondArg] = trimmedInput.split(' ');

    if (command === 'up') {
        handleUpCommand();
        printWorkingDirectory();
    } else if (command === 'cd') {
        try {
            await handleCdCommand(firstArg);
        } catch (error) {
            console.error(error);
        }
        
        printWorkingDirectory();
    } else if (command === 'ls') {
        try {
            await handleLsCommand();
        } catch (error) {
            console.error(error);
        }
        
        printWorkingDirectory();
    } else if (command === 'cat') {
        try {
            handleCatCommand(firstArg);
        } catch (error) {
            console.error(error);
        }
        
        printWorkingDirectory();
    }  else if (command === 'add') {
        try {
            handleAddCommand(firstArg);
        } catch (error) {
            console.error(error);
        }

        printWorkingDirectory();
    } else if (command === 'rn') {
        try {
            await handleRnCommand(firstArg, secondArg);
        } catch (error) {
            console.error(error);
        }

        printWorkingDirectory();
    } else if (command === 'cp') {
        try {
            await handleCpCommand(firstArg, secondArg);
        } catch (error) {
            console.error(error);
        }

        printWorkingDirectory();
    } else if (command === 'mv') {
        try {
            await handleMvCommand(firstArg, secondArg);
        } catch (error) {
            console.error(error);
        }

        printWorkingDirectory();
    } else if (command === '.exit') {
        printGreeting(true);
    } else {
        console.log('Invalid input\n');
    }
});

process.on('SIGINT', () => {
    printGreeting(true);
})
