//create a server which create a log file of client side request
const http = require("http");
const fs = require("fs")

const myserver = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url}New Req Recevied\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case "/":
                res.end("Homepage");
            case "/about":
                res.end("About-Us Page")
            default:
                res.end("404 Page not Found")
        }
    });
});

myserver.listen(8000, () => {
    console.log("Server Started!")
});