const http = require("http");
const PORT = 8000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Hello from the home page");
    }
    else if (req.url === "/about") {
        res.end("Hello from the about page");
    }
    else {
        res.statusCode = 404;
        res.end("404 Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});