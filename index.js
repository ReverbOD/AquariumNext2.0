const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// Log Error
const { writeError } = require ("./src/lib/writeLog.js");

//port
let { port } = require ("./config/port.js");

// Routes
const routes = require("./src/routes/main.js");
// Pesci
const { getPesciPage, getPesciById} = require ("./src/routes/fish.js");
const { getPiantePage, getPianteById } = require ("./src/routes/plant.js");

// Middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/src/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder

// Routes app
app.use('/', routes);
app.use('/fish', getPesciPage);
app.use('/fish.card', getPesciById);
app.use('/plant', getPiantePage);
app.use('/plant.card', getPianteById);

// port ENV
port = process.env.PORT ? process.env.PORT : port;
app.listen(port, () => { console.log("avvio porta 5000")});

// Do write error
process.on("uncaughtException", err => { writeError(err);});