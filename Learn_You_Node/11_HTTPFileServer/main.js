let http = require("http");
let fs = require("fs");

let port = process.argv[2];
let fileName = process.argv[3];

http
  .createServer((request, response) => {
    fs.createReadStream(fileName).pipe(response);
  })
  .listen(port);
