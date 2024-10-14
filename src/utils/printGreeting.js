import { argv, env, exit } from 'node:process';

const printGreeting = (isExit = false) => {
    try {
        if (!argv.slice(2).length) {
            throw new Error('You should pass your username');
        }

        const argumentName = argv.slice(2)[0].split('=')[0];

        if (argumentName !== '--username') {
            throw new Error('You should pass your username');
        }
        
        const username = argv.slice(2)[0].split('=')[1];

        if (!username) {
            throw new Error('You should pass your username');
        }
    
        if (isExit) {
            console.log(`Thank you for using File Manager, ${username}, goodbye!`)
            exit();
        } 

        console.log(`Welcome to the File Manager, ${username}\n`);
        env.USERNAME = username;
    } catch (error) {
        console.error(error.message);
        exit(1);
    }
};

export default printGreeting;