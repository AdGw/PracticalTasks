let http = require("http");
let url = require("url");

let port = process.argv[2];

http
  .createServer((req, res) => {
    let urlObj = url.parse(req.url, true);
    let pathname = urlObj.pathname;
    let startTime = urlObj.query.iso;
    let result;

    if (pathname === "/api/unixtime") {
      result = getUnixTimeStamp(startTime);
    } else if (pathname === "/api/parsetime") {
      result = getTimeObj(startTime);
    }

    if (result) {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(result));
    } else {
      res.writeHead(404);
      res.end();
    }
  })
  .listen(port);

function getUnixTimeStamp(startTime) {
  return {
    unixtime: getTimeStamp(startTime)
  };
}

function getTimeStamp(startTime) {
  return Date.parse(startTime);
}

function getTimeObj(startTime) {
  var date = new Date(getTimeStamp(startTime));
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}
