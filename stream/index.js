// //readable streams
// const fs = require("fs");

// //create an readable file stream
// const readstream = fs.createReadStream("./stream/input.txt","utf-8")

// //readable stream data event handler

// readstream.on("data",(chunk)=>{
//     console.log(`Chunk Recieved ${chunk}`);
// });

// //end data event handler

// readstream.on("end",()=>{
//     console.log("Data read is complete")
// })
// //readstream error handler
// readstream.on("error",(err)=>{
//     console.log(`Error: ${err}`)
// })

//write stream

const fs = require("fs")

const writestream = fs.createWriteStream("./stream/input.txt",'utf-8')

writestream.on('finish',()=>{
    console.log("data writing is complete");
})

writestream.on("error",(err)=>{
    console.log(`Error :  ${err}`)
})

writestream.write("Writing");
writestream.write("Streams");

writestream.end();

