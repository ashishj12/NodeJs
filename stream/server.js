const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Simple Stream Server!');
    } else if (req.url === '/stream') {

        const filePath = './input.txt';

        const fileStream = fs.createReadStream(filePath);

        res.writeHead(200, { 'Content-Type': 'text/plain' });

        fileStream.pipe(res);

        fileStream.on('error', (error) => {
            console.error('Error:', error);
            res.end('An error occurred');
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});