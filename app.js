const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
// Const log error
const {
    writeError
} = require('./src/lib/writeLog');
// fish page
const {
    getPesciPage
} = require('./src/routes/fish.js');
// fish tab
const {
    getPesciById
} = require('./src/routes/fish_card.js');
// plant page
const {
    getPiantePage
} = require('./src/routes/plant.js');
// plant tab
const {
    getPianteById
} = require('./src/routes/plant_card.js');

// Routes index
const indexRoutes = require('./src/routes/index');
// routes calc
const calcRoutes = require('./src/routes/calculate');

//port
const {
    port
} = require('./config/app');

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

//set the app to listen on the port
app.listen(process.env.PORT);

// Log error write>
process.on('uncaughtException', err => {
    writeError(err);
});