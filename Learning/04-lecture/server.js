// creating server file in server.js file in root directory
// it is to start server in our application

const app = require('./Backend/Learning/04-lecture/src/app');

app.listen(3000,()=>{
    console.log('server is running on port 3000');
})