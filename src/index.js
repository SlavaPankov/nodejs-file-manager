import handleUpCommand from "./utils/handleUpCommand.js";
import printGreeting from "./utils/printGreeting.js";
import process from 'node:process';
import os from 'node:os';

process.stdin.resume();
printGreeting();

const initailDir = os.homedir();
process.chdir(initailDir);

process.stdin.on('data', (input) => {
    const command = input.toString().trim();

    if (command === 'up') {
        handleUpCommand();
    }

    if (command === 'where') {
        console.log(`${process.cwd()}\n`);
    }
 
    if (command === '.exit') {
        printGreeting(true);
    }
});

process.on('SIGINT', () => {
    printGreeting(true);
})
