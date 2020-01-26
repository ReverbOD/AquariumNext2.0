const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Const log error
const {
    writeError
} = require('./src/lib/writeLog');

// #FISH PAGE#
// fish table
const {
    getPesciPage
} = require('./src/routes/fish.js');
// fish card
const {
    getPesciById
} = require('./src/routes/fish_card.js');

// #PLANT PAGE#
// plant table
const {
    getPiantePage
} = require('./src/routes/plant.js');
// plant card
const {
    getPianteById
} = require('./src/routes/plant_card.js');

// Routes index
const indexRoutes = require('./src/routes/index');
// routes calc
const litraggioRoutes = require('./src/routes/litraggio');
const pompaRoutes = require('./src/routes/pompa');
const lumenRoutes = require('./src/routes/lumen');
const cambioRoutes = require('./src/routes/cambio');
const filtraggioRoutes = require('./src/routes/filtraggio');
const termostatoRoutes = require('./src/routes/termostato');
const fondoRoutes = require('./src/routes/fondo');
// biotope routes
const africaRoutes = require('./src/routes/africa');
const asiaRoutes = require('./src/routes/asia');
const europeRoutes = require('./src/routes/europe');
const southamericaRoutes = require('./src/routes/southamerica');
// article routes
const azotoRoutes = require('./src/routes/azoto');
const backgroundRoutes = require('./src/routes/background');
const chemestryRoutes = require('./src/routes/chemestry');
const chooseRoutes = require('./src/routes/choose');
const co2Routes = require('./src/routes/co2');
const donotbuyRoutes = require('./src/routes/donotbuy');
const floatRoutes = require('./src/routes/float');
const historyRoutes = require('./src/routes/history');
const naturewoodRoutes = require('./src/routes/naturewood');
const pmddRoutes = require('./src/routes/pmdd');
const rockRoutes = require('./src/routes/rock');
const woodRoutes = require('./src/routes/wood');

//port
let {
    port
} = require('./config/app');

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
app.get('/', indexRoutes);
app.get('/litraggio', litraggioRoutes);
app.get('/pompa', pompaRoutes);
app.get('/filtraggio', filtraggioRoutes);
app.get('/termostato', termostatoRoutes);
app.get('/fondo', fondoRoutes);
app.get('/cambio', cambioRoutes);
app.get('/lumen', lumenRoutes);
app.get('/fish', getPesciPage);
app.get('/fish_card', getPesciById);
app.get('/plant', getPiantePage);
app.get('/plant_card', getPianteById);
app.get('/africa', africaRoutes);
app.get('/asia', asiaRoutes);
app.get('/europe', europeRoutes);
app.get('/southamerica', southamericaRoutes);
app.get('/azoto', azotoRoutes);
app.get('/background', backgroundRoutes);
app.get('/chemestry', chemestryRoutes);
app.get('/choose', chooseRoutes);
app.get('/co2', co2Routes);
app.get('/donotbuy', donotbuyRoutes);
app.get('/float', floatRoutes);
app.get('/history', historyRoutes);
app.get('/naturewood', naturewoodRoutes);
app.get('/pmdd', pmddRoutes);
app.get('/rock', rockRoutes);
app.get('/wood', woodRoutes);

//set the app to listen on the port
port = process.env.PORT ? process.env.PORT : port;
app.listen(port);

// Log error write>
process.on('uncaughtException', err => {
    writeError(err);
});