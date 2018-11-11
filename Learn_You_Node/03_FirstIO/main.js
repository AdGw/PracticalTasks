let fs = require('fs')
let pathToFile = process.argv[2];
let buffer = fs.readFileSync(pathToFile).toString();
let lines = buffer.split("\n").length-1
console.log(lines)