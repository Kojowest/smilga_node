const os = require("os");

//info about the current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(currentOs);
