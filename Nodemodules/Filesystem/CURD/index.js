//task list
//create a folder named it CURD
//create a file named it text.txt and data into it
//and more data into the file at the end of existing data
//read the data without getting buffer data at first
//rename file to bio.txt

const fs = require("fs")
//create a text file and push string in that file
// fs.writeFileSync("text.txt","File System CURD Operation")
//append more text
// fs.appendFileSync("text.txt","Hello There\n")

//read file

// const result = fs.readFile("text.txt","utf-8",(err,result)=>{
//     if(err)
//         console.log("Error",err)
//     else
//         console.log(result)
// })
//rename text file

fs.renameSync("text.txt","bio.txt",(err)=>{
    if(err)
        throw err
    console.log("File Renamed!")
})