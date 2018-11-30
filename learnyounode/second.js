const readDirectory = require('./module');

const directory = process.argv[2];
const extension = process.argv[3];

readDirectory(directory, extension, (error, fileNameList) => {
	if(error) console.log(error);
	fileNameList.forEach((file) => console.log(file));
});