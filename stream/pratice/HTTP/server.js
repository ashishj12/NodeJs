// Write a Node.js script to create an HTTP server that reads a file called index.html using streams and sends it 
// as the response to the client.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream('index.html');
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    readStream.pipe(res);

    readStream.on('error', (err) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        console.error('Error reading file:', err);
    });
});

server.listen(3000, () => {
    console.log('Server running !');
});
