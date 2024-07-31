//The http.createserver() method includes request and response parameter which is supplies by NodeJs.

//the request object can be used to get intformation about the current HTTP request.
//e.g.,url,request header,and data.

//The response object can be used to send a response for a current HTTP Request.

//If the response from http server is supposed to be displayed as HTML,you should include an
//HTTP Header with the correct content type : 


const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello There!")
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Listening")
})