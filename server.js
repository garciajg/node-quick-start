const express = require('express');
const bodyParser = require('body-parser');

// Create express app
const app = express();

//Configuring Database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Parse request of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// Parse request of content-type - application/json
app.use(bodyParser.json());

// Connecting to database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then( function () {
    console.log('Succesfully connected to database...');
}).catch(err => {
    console.log('Could not connect to database. Exiting now...', err);
    process.exit();
});

// Define a simple route
app.get('/', function (req, res) {
    res.json({
        "message": "Welcome to Vokal Notes"
    });
});

// Require Notes routes
require('./app/routes/notes.routes.js')(app); 

// Listen to requests
app.listen(8000, function () {
    console.log("Server is listening to 8000");
});

