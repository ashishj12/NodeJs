const http = require("http");
const fs = require("fs")

const myserver = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.method} ${req.url}New Req Recevied\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case "/":
                if (req.method === 'GET')
                    res.end("Homepage");
            case "/about":
                res.end("About-Us Page")

            case "/signup":
                if (req.method === 'GET')
                    res.end("This is a signup Form")
                else if (req.method === 'POST') {
                    res.end("success")
                }
            default:
                res.end("404 Page not Found")
        }
    });
});

myserver.listen(8000, () => {
    console.log("Server Started!")
});