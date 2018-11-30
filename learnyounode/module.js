const fs = require('fs');

module.exports = (directory, extension, callback) => {

	fs.readdir(directory, (error, fileNameList) => {
		if(error) return callback(error);
		let list = fileNameList.filter((file) => {
			return file.includes("." + extension);
		});
		callback(null, list);
	});
}