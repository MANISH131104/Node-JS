const fs = require('fs');
const os = require('os');

// console.log(os.cpus().length);      // 12 it means 12 thread sizes can possible



// SYNC.. BLOCKING.....
// fs.writeFileSync('./test.txt', "Hey There")

// ASYNC..NON-BLOCKING REQ.....
// fs.writeFile('./test.txt', "Hey World Async", (err) => {})


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

// fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);

// fs.cpSync('./test.txt', './copy.text')   // Used for copy file

// fs.unlinkSync("./copy.text");           // used for deleting file
// console.log(fs.statSync('./test.txt'))
// fs.mkdirSync('my-docss/a/b', {recursive: true}) 


 console.log("1");

// Non-Blocking.....
fs.readFile("./contacts.txt","utf-8", (err,result) => {
    console.log(result);
});

 console.log("2");


// Default Thread Pool Size = 4
// Max ? - 8core cpu - 8




