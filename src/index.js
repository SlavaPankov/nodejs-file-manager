import printWorkingDirectory from './utils/printWorkingDirectory.js';
import handleUpCommand from "./utils/handleUpCommand.js";
import printGreeting from "./utils/printGreeting.js";
import process from 'node:process';
import os from 'node:os';
import handleCdCommand from './utils/handleCdCommand.js';
import handleLsCommand from './utils/handleLsCommand.js';
import handleCatCommand from './handleCatCommand.js';

process.stdin.resume();
printGreeting();

const initailDir = os.homedir();
process.chdir(initailDir);

printWorkingDirectory();
process.stdin.on('data', async (input) => {
    const trimmedInput = input.toString().trim();
    const [command, arg] = trimmedInput.split(' ');

    if (command === 'up') {
        handleUpCommand();
        printWorkingDirectory();
    } else if (command === 'cd') {
        try {
            await handleCdCommand(arg);
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
            handleCatCommand(arg);
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
