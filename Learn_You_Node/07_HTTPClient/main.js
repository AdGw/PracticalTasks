let http = require("http");
let path = process.argv[2];
http
  .get(path, response => {
    response.setEncoding("utf8");
    response.on("data", console.log);
    response.on("error", console.error);
  })
  .on("error", console.error);
