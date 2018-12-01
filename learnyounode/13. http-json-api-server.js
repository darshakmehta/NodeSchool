const http = require('http');
const url = require('url');

const port = process.argv[2];

let parsetime = (time) => {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
};

let unixtime = (time) => {
    return { unixtime: time.getTime() }
};

const server = http.createServer((request, response) => {
    const parsedURL = url.parse(request.url, true);
    const time = new Date(parsedURL.query.iso);
    let result;
    const query1 = new RegExp(/^\/api\/parsetime/);
    const query2 = new RegExp(/^\/api\/unixtime/);
    
    if (query1.test(request.url))
        result = parsetime(time);
    else if (query2.test(request.url))
        result = unixtime(time);
    
    if (result) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(result));
    } else {
        response.writeHead(404);
        response.end();
    }
});

server.listen(port);