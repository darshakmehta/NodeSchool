const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const path = process.argv[3];

const server = http.createServer((request, response) => {
	response.writeHead(200, {'content-type': 'text/plain'})
	let file = fs.createReadStream(path);
	file.pipe(response);
});

server.listen(port);