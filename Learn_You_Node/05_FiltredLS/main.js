let fs = require('fs');
let path = require('path');

let dir = process.argv[2];
let fileType = '.' + process.argv[3];

fs.readdir(dir, (err, list)=> {
    if (err) throw err;
    for(let i in list){
        if (list[i].match(fileType)) {
            console.log(list[i]);
        }
    }
});