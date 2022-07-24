const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

// Object with basic info of OS
const currentOS = {
   name: os.type(),
   release: os.release(),
   totalMem: os.totalmem(),
   freeMem: os.freemem(),
};

console.log(currentOS);
