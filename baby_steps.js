//console.log(process.argv); // To display the Command Line Arguments
var sum = 0;
for(i = 2 ; i < process.argv.length ; i++){ // i =2 since first is node and second element is path
	sum+= Number(process.argv [i]);
}

console.log(sum);
