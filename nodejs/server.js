
//http.createServer => this method will take a callback and 
//this callback will give us a request object and a response object  
//req object is what the client request from us

// const server = http.createServer((req,res) => {
//       if(req.url === '/'){
//           res.write('home page')
//           res.end();
//       }else{
//           res.write('some other domain')
//           res.end()
//       }
// });
// //what port the server is listening
// server.listen(3000,"localhost", () => {
//     console.log(`http://localhost:3000`)
// })

const http = require('http');
const fs = require('fs');
http.createServer((req,res) => {
    const readStream = fs.createReadStream('./static/book.png');
    //takes two parameter status code and content type
    res.writeHead(200,{'Content-type':'image/png'})
    readStream.pipe(res);
}).listen(3000)

