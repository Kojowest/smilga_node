//Globals - No Window

const { log } = require("console");

//_-dirname - path to current directory
//__filename - filename
// require - function to use modules(CommonJS)
//module - info about current module(file)
//process - info about the env where the program is being executed

// console.log(__dirname, __filename, process);
let count = 0;
setInterval(() => {
  count++;
  console.log(`Hello World -- ${count}`);
}, 1000);
