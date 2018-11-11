let fs = require('fs');
let pathToFile = process.argv[2];

fs.readFile(pathToFile, (err, data) => {
    if(err) throw err
    lines = data.toString().split('\n').length-1;
    console.log(lines)
});
