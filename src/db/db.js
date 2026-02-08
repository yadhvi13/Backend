// logic for how server is connected to DB
const mongoose = require("mongoose");


async function connectDB() {
    // it excpets URI as parameters

    // await isliye use kr rhe hai kyuki jbtk database connect nhi ho jata tb tk await krega ye function
    await mongoose.connect("mongodb+srv://ankush:NGrbb2o4RDTSkJUp@cluster0.jajiv95.mongodb.net/halley")
    
    console.log("connected to DB");
    
}

module.exports = connectDB