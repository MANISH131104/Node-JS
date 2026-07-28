const fs = require('fs');


// SYNC..
// fs.writeFileSync('./test.txt', "Hey There")

// ASYNC..
//fs.writeFile('./test.txt', "Hey World Async", (err) => {})


// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result);

// fs.readFile("./contacts.txt", "utf-8", (err,result) => {
//     if(err){
//         console.log("Error",err);
//     }
//     else {
//         console.log(result);
//     }
// })

fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);

// fs.cpSync('./test.txt', './copy.text')

// fs.unlinkSync("./copy.text");           // used for deleting file
console.log(fs.statSync('./test.txt'))
fs.mkdirSync('my-docss/a/b', {recursive: true}) 
