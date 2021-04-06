// Import of the OS Node Module
const os = require('os');

// It is also possible to extract just he feature that we want to use


// Info about current user
const user = os.userInfo();

console.log(user);

// Method returns the system uptime in seconds
console.log('The System Uptime is:' + os.uptime() / 3600 + ' hours');

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);