# [NodeSchool](https://nodeschool.io/) : Solutions learnyounode

## Takeaways:

## Exercise 1. HELLO WORLD

1. To make a Node.js program, create a new file with a .js extension and start writing JavaScript!
2. Execute your program by running it with the node command e.g.: `$ node program.js`
3. `stdout` using console.log


## Exercise 2. BABY STEPS

1. Access command-line arguments via the global `process` object.
2. `process` object has an argv property which is an array containing the command-line i.e `process.argv`
3. Remember, first two parameters of process.argv are
a. `node` 
b. `/path/to/your/program.js` file

"So remember to start at the 3rd element (index 2)"

4. Convert String to Number by `Number()` or `+`

## Exercise 3. MY FIRST I/O

### To find number of new lines in unix
cat file | wc -l

### To find number of new lines in windows
find /v /c "" file

1. To perform a filesystem operation you are going to need the `fs` module from the Node core library.
2.  All synchronous (or blocking) filesystem methods in the fs module end with `'Sync'`.
3. To read a file, you'll need to use `fs.readFileSync('/path/to/file')`. This method will return a `Buffer` object containing the complete contents of the file.
4.  Buffer objects are Node's way of efficiently representing arbitrary arrays of data, whether it be ascii, binary or some other format. Buffer objects can be converted to strings by simply calling the toString() method on them. e.g. `var str = buf.toString()`.

## Exercise 4. MY FIRST ASYNC I/O

### Note: Node uses mostly asynchronous code.

1.  Remember that idiomatic Node.js callbacks normally have the signature: `function callback (err, data) { /* ... */ }`

2. Pass `utf-8` in fs.readFile(err, 'utf-8', callback) => to return the contents in string and not in buffer

## Exercise 5. FILTERED LS

The `fs.readdir()` method takes a pathname as its first argument and a callback as its second. The callback signature is: 

`function callback (err, list) { /* ... */ }` 

where list is an array of filename strings.

## Exercise 6. MAKE IT MODULAR

1. Create module.exports and require it in the main function.
2. Call the `contract` function created to achieve the task

## Exercise 7. HTTP CLIENT

1. The http.get() method is a shortcut for simple GET requests, use it to simplify your solution. The first argument to http.get() can be the URL you want to GET; provide a callback as the second argument. Unlike other callback functions, this one has the signature: 

`function callback (response) { /* ... */ }`

Where the response object is a `Node Stream object`. You can treat Node Streams as objects that emit events. 

The three events that are of most interest are: "data", "error" and "end". You listen to an event like so: 

`response.on("data", function (data) { /* ... */ })`

The "data" event is emitted when a chunk of data is available and can be processed. The size of the chunk depends upon the underlying data source.

The response object / Stream that you get from http.get() also has a setEncoding() method. If you call this method with "utf8", the "data" events will emit Strings rather than the standard Node Buffer objects which you have to explicitly convert to Strings.

## Exercise 8. HTTP COLLECT

response.on("end") => To access whole data returned from server

`/* Use third-party package
 a: bl (Buffer List) b: concat-stream */`

1. To install node package
`npm install bl`

2. Both bl and concat-stream can have a stream piped in to them and they will collect the data for you. Once the stream has ended, a callback will be fired with the data:

`response.pipe(bl(function (err, data) { /* ... */ }))
     // or
response.pipe(concatStream(function (data) { /* ... */ }))`

Note that you will probably need to data.toString() to convert from a Buffer.

## Exercise 9. JUGGLING ASYNC

Counting callbacks is one of the fundamental ways of managing async in Node. Rather than doing it yourself, you may find it more convenient to rely on a third-party library such as [async](https://npmjs.com/async) or [after](https://npmjs.com/after).

## Exercise 10. TIME SERVER

For this exercise we'll be creating a raw TCP server. There's no HTTP involved here so we need to use the net module from Node core which has all the basic networking functions.

The net module has a method named net.createServer() that takes a function. The function that you need to pass to net.createServer() is a connection listener that is called more than once. Every connection received by your server triggers another call to the listener. The listener function has the signature:

`function listener(socket) { /* ... */ }`

`net.createServer()` also returns an instance of your server. You must call server.listen(portNumber) to start listening on a particular port.

A typical Node TCP server looks like this:

`var net = require('net')
 var server = net.createServer(function (socket) {
   // socket handling logic
 })
 server.listen(8000)`

The socket object contains a lot of meta-data regarding the connection, but it is also a Node duplex Stream, in that it can be both read from, and written to. For this exercise we only need to write data and then close the socket.

Use socket.write(data) to write data to the socket and socket.end() to close the socket. Alternatively, the .end() method also takes a data object so you can simplify to just: socket.end(data).

To create the date, you'll need to create a custom format from a new Date() object. The methods that will be useful are:

     date.getFullYear()
     date.getMonth()     // starts at 0
     date.getDate()      // returns the day of month
     date.getHours()
     date.getMinutes()

Or, if you want to be adventurous, use the strftime package from npm. The strftime(fmt, date) function takes date formats just like the unix date command. You can read more about strftime at: (https://github.com/samsonjs/strftime)