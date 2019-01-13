// Write a program that performs an HTTP GET request to a URL provided to you
// as the first command-line argument. Collect all data from the server (not
// just the first "data" event) and then write two lines to the console
// (stdout).

// The first line you write should just be an integer representing the number
// of characters received from the server. The second line should contain the
// complete String of characters sent by the server.

const http = require("http");
const path = process.argv[2];
let body = "";

http.get(path, response => {
  const {
    statusCode
  } = response;
  if (statusCode !== 200) {
    error = new Error("Request Failed.\n" + `Status Code: ${statusCode}`);
  }
  response.on("data", chunk => {
    body += chunk;
  });
  response.on("end", () => {
    try {
      console.log(body.length);
      console.log(body);
    } catch (err) {
      console.log(err.message);
    }
  });
});