const http = require("http");
const fs = require("fs");

const logRequest = (req) => {
    const log = `${Date.now()}: New Request Received\n${req.url}\n`;
    fs.appendFile("html.txt", log, (err) => {
        if (err) console.error("Error writing to log file:", err);
    });
};

const server = http.createServer((req, res) => {
    logRequest(req);

    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <html>
                <body style="text-align:center;">
                    <h1 style="color:blue;">Nodejs Home Page</h1>
                    <p>Nodejs Tutorials</p>
                </body>
            </html>
        `);
        res.end();
    }
    else if (req.url === "/about-us") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <html>
                <body style="text-align:center;">
                    <h1 style="color:blue;">Nodejs About-Us Page</h1>
                    <p>About Nodejs</p>
                </body>
            </html>
        `);
        res.end();
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("404 Page Not Found");
    }
});

server.listen(8000, () => {
    console.log("Server Started");
});