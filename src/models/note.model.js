// creating schmea for database

const mongoose = require("mongoose");

// note kaisa dikhta hai uska schmea bnana pdega aise
const noteSchema = new mongoose.Schema({
    title : String,
    description : String,
    // age: Number,
    // dob : Date
})


// creating model  ---- for CRUD operation
// if database me kuch bhi operation krna pde toh model create krna pdega
const noteModel = mongoose.model("note",noteSchema)

module.exports = noteModel