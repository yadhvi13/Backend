//it means file system wale module ko require kra hai
const fs = require('fs');

//using callback API
// fs.writeFile("hey.txt", "hello kaise ho", function(err){
//       if(err) console.log(err);
//       else console.log("done");
// })

// fs.appendFile("hey.txt", " mera naam yogeeta hai", function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })

// fs.rename("hey.txt", "hello.txt", function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })

// fs.copyFile("hello.txt", "./copy/copy.txt", function(err){
//     if(err) console.log(err.message);
//     else console.log("done");
// })

fs.unlink("hello.txt", function(err){
    if(err) console.log(err);
    else console.log("removed");
})