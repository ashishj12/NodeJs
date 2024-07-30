const fs = require('fs');

//write an file sync
// fs.writeFileSync("dummy.txt","Hey!There");
//write file async
// fs.writeFile("dummy.txt","Hello!",(err)=>{})
//read file sync
// const result = fs.readFileSync("dummy.txt","utf-8")
// console.log(result)

//read file async
// const result = fs.readFile("dummy.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error : ",err)
//     }
//     else{
//         console.log(result)
//     }
// })

//rename file

// fs.rename("dummy.txt","read.txt",(err)=>{
//     if(err)
//         throw err;
//     console.log("File Renamed!")
// })

