const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

let { port } = require ("./src/config/port.js");

app.set('port', process.env.port || port);
app.set('views', __dirname + '/src/views/');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

require('./src/routes/main')(app);

port = process.env.PORT ? process.env.PORT : port;
app.listen(port, () => { console.log(`start on port ${port}`)});