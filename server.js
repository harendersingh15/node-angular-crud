const mongoose = require('mongoose');
const express = require('express');

const mongoDB = 'mongodb://127.0.0.1/personDB';
mongoose.connect(mongoDB, () => {


});




const app = express();
const portNumber = 8081;





app.get('/test', (req, res)=>{
    res.send('hi');
})

app.listen(portNumber, ()=>{
    console.log(`server is running on ${portNumber}`);
});