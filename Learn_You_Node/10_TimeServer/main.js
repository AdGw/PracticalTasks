let net = require("net");
let port = process.argv[2];

let server = net.createServer(socket => {
  socket.end(getFormattedData() + "\n");
});

server.listen(port);

function getFormattedData() {
  let today = new Date();
  return (
    [
      today.getFullYear(),
      formatNumber(today.getMonth() + 1),
      formatNumber(today.getDate())
    ].join("-") +
    " " +
    [formatNumber(today.getHours()), formatNumber(today.getMinutes())].join(":")
  );
}

function formatNumber(number) {
  return number < 10 ? "0" + number : number;
}
