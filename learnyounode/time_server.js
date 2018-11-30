var net = require('net');

var server = net.createServer(function (socket) {

  socket.end(getTime() + "\n"); 

});

server.listen(process.argv[2]);

function getTime() {
  var date = new Date();

  return [date.getFullYear(), formatNumber(date.getMonth() + 1), formatNumber(date.getDate())].join("-")
       + " " + [formatNumber(date.getHours()), formatNumber(date.getMinutes())].join(":");
}

function formatNumber(number) {
  return number < 10 ? "0" + number : number;
}