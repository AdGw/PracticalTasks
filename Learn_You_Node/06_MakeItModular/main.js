let mymodule = require('./module');
let dir = process.argv[2];
let filterExtension = process.argv[3];

let callback=(err, list)=> {
    if (err) throw err;
    list.forEach((file)=> {
        console.log(file);
    })
}

mymodule(dir, filterExtension, callback);