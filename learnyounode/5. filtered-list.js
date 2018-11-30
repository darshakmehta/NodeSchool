/* Solution 1 */

const fs = require('fs');

const directory = process.argv[2];
const extension = "." + process.argv[3]; //Add missing dot to the extension name


fs.readdir(directory, (error, fileNameList) => {
	if(error) throw error;
	fileNameList.forEach((file) => {
		if(file.includes(extension)) {
			console.log(file);
		}
	});  
});

/* Solution 2 */

const fs = require('fs');
const path = require('path');

const directory = process.argv[2];
const extension = "." + process.argv[3];

fs.readdir(directory, (error, fileNameList) => {
	if(error) throw error;
	fileNameList.forEach((file) => {
		if(path.extname(file) === extension) {
			console.log(file);
		}
	});
});