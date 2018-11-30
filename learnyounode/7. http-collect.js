/* Solution 1 : Use "end" event */

const http = require('http');

const url = process.argv[2];

let contents = [];
http.get(url, (response) => {
	response.setEncoding("utf-8");
	response.on("data", (data) => contents.push(data));
	response.on("error", (error) => console.log(error));
	response.on("end", () => {
		let numOfChars = 0;
		let serverData = "";
		contents.forEach((data) => {
			numOfChars += data.length;
			serverData += data;
		});

		console.log(numOfChars);
		console.log(serverData);

	});
}).on('error', (error) => console.log(error));

/* Solution 2: Use a third-party package */

/* a: bl (Buffer List) b: concat-stream */

const http = require('http');
const bl = require('bl');
const url = process.argv[2];

http.get(url, (response) => {
	response.pipe(bl((err, data) => {
		if(err) return console.log(error);

		data = data.toString();
		console.log(data.length);
		console.log(data);
	}));
});