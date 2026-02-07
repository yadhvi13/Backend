// for using express we need to require it first
const express = require('express');

// creating server using calling express function
const app =express();

app.listen(3000,()=>{
    console.log('server is running on port 3000');   
})