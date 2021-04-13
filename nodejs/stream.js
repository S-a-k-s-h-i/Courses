// const fs = require('fs')
// const readStream = fs.createReadStream('./example.txt','utf-8');
// const writeStream = fs.createWriteStream('example3.txt');
// //pipe is going to take the readStream and it will pipe it to writeStream
// readStream.pipe(writeStream)

// readStream.on('data',(chunk) => {
//     //instead of waiting for the whole data we can start writing chunks to the new file
//     writeStream.write(chunk)
    
// })

const fs = require('fs')
//zlib is a module that is used for compressing the files
const zlib = require('zlib')
//transform stream takes the input and when it receives the data it manipultes that data into something else.
//our readStream will uncompress the data 
//creating a transform stream 
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./example4.txt');
const writeStream = fs.createWriteStream('uncompressed.txt');
//readStream pipe the data to gzip , now gzip takes the chunks of data and uncompress it
//so we are getting uncompressed version of readStream
//then we pipe it out to our destination which is writeStream
readStream.pipe(gunzip).pipe(writeStream)
