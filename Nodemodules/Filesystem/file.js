//require fs module

const { error } = require("console");
const fs = require("fs");

/*crate a file
// sync file
// fs.writeFileSync("test.txt","Hey There!")
// async file
// fs.writeFile("test.txt","Hello There!",(err)=> {})
*/

// read an file sync
// const result = fs.readFileSync("test.txt","utf-8")
// console.log(result)
// utf-8 encoding scheme

//read an file async

fs.readFile("test.txt", "utf-8", (err, result) => {//we have to return an callback function
    if (err) {
        console.log("Error ", err)
    }
    else {
        console.log(result)
    }
})



