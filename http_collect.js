var http=require('http')
var bl =require('bl');
http.get(process.argv[2],function(response){
//var count=0
response.pipe(bl(function(err,data){
/*	for(i=0;i<data.length;i++)
		count++;
	console.log(count)
	*/
	console.log(data.length)
	console.log(data.toString());

}))

})
