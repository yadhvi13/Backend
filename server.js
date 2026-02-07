// creating server file in server.js file
// it is to start server in our application

const app = require('./src/app');

app.listen(3000,()=>{
    console.log('server is running on port 3000');
})