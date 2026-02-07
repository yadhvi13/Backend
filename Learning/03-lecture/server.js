// for using express we need to require it first
const express = require('express');

// creating server using calling express function
const app =express();

// program to create a server
app.get('/', (req,res)=>{
    res.send('Hello world this is home page');
})

app.get('/about', (req,res)=>{
    res.send("about page");
})

app.listen(3000,()=>{
    console.log('server is running on port 3000');   
})