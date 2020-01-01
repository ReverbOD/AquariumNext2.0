const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

// Const Page
const {
    getPesciPage
} = require('./routes/fish.js');
const {
    getPesciById
} = require('./routes/fish_card.js');
const {
    getPiantePage
} = require('./routes/plant.js');
const {
    getPianteById
} = require('./routes/plant_card.js');

// Routes
const indexRoutes = require('./routes/index');
const calcRoutes = require('./routes/calculate');

// Port
const port = 5000;

// create connection to database
// mysql://bb0b703125fd55:39d18c92@eu-cdbr-west-02.cleardb.net/heroku_74ff73a09cff7b6?reconnect=true
const db = mysql.createConnection({
    host: 'localhost',
    user: 'Aquarium_admin',
    password: 'ZLJuXp9jdU2VZidB',
    database: 'aquarium_admin'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// routes for the app
app.get('/', indexRoutes);
app.get('/calculate', calcRoutes);
app.get('/fish', getPesciPage);
app.get('/fish_card', getPesciById);
app.get('/plant', getPiantePage);
app.get('/plant_card', getPianteById);

app.listen(process.env.PORT, process.env.IP);

// set the app to listen on the port
//app.listen(8080, function() {
//    console.log('The App Has Started on localhost:8080');
//});