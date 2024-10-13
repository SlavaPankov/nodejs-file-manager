import os from 'node:os';

const getCPUInfo = () => {
    const cpus = os.cpus();
  const cpuCount = cpus.length;

  console.log(`Total number of CPUs: ${cpuCount}`);

  cpus.forEach((cpu, index) => {
    const clockRateGHz = (cpu.speed / 1000).toFixed(2);
    console.log(`CPU ${index + 1}: Model: ${cpu.model}, Speed: ${clockRateGHz} GHz`);
  });
};

const handleOsCommand = (flag) => {
    if (!flag) {
        throw new Error('Invalid input\n');
    }

    try {
        switch (flag) {
            case '--EOL':
                console.log(JSON.stringify(os.EOL));
                break;
            case '--cpus':
                getCPUInfo();
                break;
            case '--homedir':
                console.log(os.homedir());
                break;
            case '--username':
                console.log(os.userInfo().username);
                break;
            case '--architecture':
                console.log(process.arch);
                break;
            default:
                throw new Error('Invalid input\n');
                break;
        }
    } catch (error) {
        throw error;
    }
};

export default handleOsCommand;