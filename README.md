# NodeSchool : Solutions learnyounode

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

### To find number of new lines in unix
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

