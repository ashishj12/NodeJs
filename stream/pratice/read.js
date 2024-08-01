// Write a Node.js script to read the contents of a file called example.txt using a readable stream and print each chunk of data to the console.

const fs = require('fs');

const readStream = fs.createReadStream('./stream/pratice/file.txt', 'utf8');

readStream.on('data', (chunk) => {
    console.log(chunk);
});

readStream.on('end', () => {
    console.log('Finished reading file');
});

readStream.on('error', (err) => {
    console.error('Error reading file:', err);
});
