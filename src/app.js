// creating server file in src folder
// it is to create a server in our application

const express = require('express');

const app = express();
// using middleware to parse the body of the request
app.use(express.json());


// creating api for notes

const notes = []
// titles and description of notes

app.post('/notes',(req,res)=>{
    // console.log(req.body);

    notes.push(req.body);

    res.status(201).json({
        message: "note created successfully"
    }); //for success
    
})

// creating API for user, jitne bhi notes usne create kre honge wo data show ho jayega
app.get('/notes', (req,res)=>{
    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    })
})

// creating API for DELETING USER NOTE from Server
app.delete('/notes/:index', (req,res)=>{
    // dekhne ke liye ki index me kya value aayi h
    const index = req.params.index

    delete notes[index]

    res.status(200).json({
        message: "note deleted successfully"
    })
})

module.exports = app;