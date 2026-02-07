//it means file system wale module ko require kra hai

// [[[[[[[[[[[[[[[[---- fs module---]]]]]]]]]]]]]]]]]]]]]]]]]]

// const { log } = require('console');
// const fs = require('fs');

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

// fs.unlink("hey.txt", function(err){
//     if(err) console.log(err);
//     else console.log("removed");
// })  
// --------------To REMOVE FILE----------------

//--------------To REMOVE DIRECTORY (only blank folder hata skte hai uske alawa nhi)-----------
// fs.rmdir("./copy", {recursive: true}, function(err){
//      if (err) {
//         console.log(err.message);
//      }
//      else{
//         console.log("removed");
        
//      }
// })

// -------- Instead of this use fs.rm(), it removes empty folder also------
// fs.rm("./copy", {recursive: true}, function(err){
//     if (err) {
//                 console.log(err.message);
//              }
//              else{
//                 console.log("removed");
// }
// })

//-------- How to create Folder --------
// fs.mkdir('javscript', function(err){
//     if (err) {
//         console.log("error is happening", err);
//     }
//     console.log('Folder created sucessfully');
// })

//----- How to Read Folder ------
// fs.readdir('javascript', function(err,files){
//     if (err) {
//         console.log(err); 
//     }
//     else{
//         console.log("files in a Folder: ", files);
        
//     }
// })



// ------------ https and https module ------
const  http = require('http');
const server = http.createServer(function(req,res){
  res.end("hello world");
})
server.listen(3000);