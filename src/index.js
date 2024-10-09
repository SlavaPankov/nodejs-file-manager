import printWorkingDirectory from './utils/printWorkingDirectory.js';
import handleUpCommand from "./utils/handleUpCommand.js";
import printGreeting from "./utils/printGreeting.js";
import process from 'node:process';
import os from 'node:os';

process.stdin.resume();
printGreeting();

const initailDir = os.homedir();
process.chdir(initailDir);

printWorkingDirectory();
process.stdin.on('data', (input) => {
    const command = input.toString().trim();

    if (command === 'up') {
        handleUpCommand();
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
