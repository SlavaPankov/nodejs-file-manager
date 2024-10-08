import printGreeting from "./utils/printGreeting.js";
import process from 'node:process';

process.stdin.resume();
printGreeting();

process.stdin.on('data', (input) => {
    const command = input.toString().trim();

    if (command === '.exit') {
        printGreeting(true);
    }
});

process.on('SIGINT', () => {
    printGreeting(true);
})
