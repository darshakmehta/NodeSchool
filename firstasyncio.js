var fs = require('fs');

fs.readFile(process.argv[2],'utf8',function (error,filecontents){
 
	var lines = filecontents.split('\n');
   console.log(lines.length - 1 );
});
