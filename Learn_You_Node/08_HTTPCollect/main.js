let http = require("http");
let path = process.argv[2];
let body = "";
http.get(path, response => {
  response.on("data", frag => {
    body += frag;
  });
  response.on("end", () => {
    console.log(body.length);
    console.log(body);
  });
});
