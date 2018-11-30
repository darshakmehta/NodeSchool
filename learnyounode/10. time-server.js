/* Solution 1 */

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

/* Solution 2 */

const net = require('net');

const port = process.argv[2];

const server = net.createServer((socket) => {
	let date = new Date();
	let data = date.getFullYear() + "-" + 
		(date.getMonth() + 1) + "-" + date.getDate() + " " + 
		((date.getHours() < 9) ? "0" + date.getHours() : date.getHours()) + ":" + 
		((date.getMinutes() < 9) ? "0" + date.getMinutes() : date.getMinutes());
	socket.end(data + "\n");
});

server.listen(port);



