let map = require("through2-map");
let http = require("http");

var server = http.createServer(function(req, res) {
  req
    .pipe(
      map(chunk => {
        return chunk.toString().toUpperCase();
      })
    )
    .pipe(res);
});
server.listen(Number(process.argv[2]));
