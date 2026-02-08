// to create server
const express = require('express');

const noteModel = require("./models/note.model")

const app = express();

// middleware
app.use(express.json());

// notes = title and description


/*
POST notes, GET notes, DELETE notes, PATCH notes
*/

app.post("/notes", async(req,res)=>{
    const data = req.body  //data is in object

    await noteModel.create({
        title: data.title,
        description: data.description,
    })
    
    res.status(201).json({
        message: "note created"
    })
})


app.get("/notes", async(req,res)=>{
    // databse me jitne bhi notes created hue hai yha laake get krdo
    // find always return ARRAY
    const notes = await noteModel.findOne({
        title:"my first interview"
    })

    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    })

})


module.exports = app