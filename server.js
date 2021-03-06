const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const mongoDB = 'mongodb://127.0.0.1/personDB';

const appRouter = require('./src/index');

const app = express();
const portNumber = 8081;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
//mounting the app routes
appRouter(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

mongoose.connect(mongoDB, () => {
    app.listen(portNumber, () => {
        console.log(`server is running on ${portNumber}`);
    });
});