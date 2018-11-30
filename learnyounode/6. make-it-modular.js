//module.js

const fs = require('fs');

/* Program to return list of files in a given directory filtered by extension */
module.exports = (directory, extension, callback) => {

    fs.readdir(directory, (error, fileNameList) => {
        if(error) return callback(error);

        let list = filterList(extension, fileNameList);
        
        callback(null, list);
    });
}

const filterList = (extension, list) => {
    return list.filter((file) => file.includes("." + extension));
}

//program.js

const readDirectory = require('./module');

const directory = process.argv[2];
const extension = process.argv[3];

readDirectory(directory, extension, (error, fileNameList) => {
    if(error) console.log(error);
    fileNameList.forEach((file) => console.log(file));
});