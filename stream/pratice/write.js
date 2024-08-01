// Write a Node.js script to create a writable stream and write the string "Hello, Stream!" to a file called output.txt.
const fs = require('fs');

const writeStream = fs.createWriteStream('./stream/pratice/file.txt');

writeStream.write('Hello, Stream!', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('Data written to file');
});

writeStream.end();
