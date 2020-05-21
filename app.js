const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Const log error
const {
    writeError
} = require('./src/lib/writeLog.js');

// Routes index
const indexRoutes = require('./src/routes/index.js');

// #FISH PAGE#
// fish table
const {
    getPesciPage
} = require('./src/routes/fish.js');
// fish card
const {
    getPesciById
} = require('./src/routes/fish.id.js');

// #PLANT PAGE#
// plant table
const {
    getPiantePage
} = require('./src/routes/plant.js');
// plant card
const {
    getPianteById
} = require('./src/routes/plant.id.js');

//port
let {
    port
} = require('./config/app.js');

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/src/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// routes for the app
app.use('/', indexRoutes);
app.use('/fish', getPesciPage);
app.use('/fish.card', getPesciById);
app.use('/plant', getPiantePage);
app.use('/plant.card', getPianteById);

//set the app to listen on the port
port = process.env.PORT ? process.env.PORT : port;
app.listen(port, () => {
    console.log("avvio porta 5000")
});

// Log error write>
process.on('uncaughtException', err => {
    writeError(err);
});