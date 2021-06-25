const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

let { port } = require('./lib/port');
let Utils = require('./src/services/utils');

// ?CORS Policy
app.use(cors());
app.options('*', cors());

// ?Helmet, To protect against different kind of vulnerabilities
app.use(helmet());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to AquariumNext API." });
});

// !routes for the api
require('./config/routes/routes')(app);

// !if no routes found, catch 404 and return error response
app.use(function(req, res, next) {
  let response = {
    statusCode: 404,
    error: {
      "code": Utils.config().errorCodes.api_unavailable,
      "message": "No such endpoint exists"
    }
  };

  return res.json(response);
});

// !error handler in case of parsing/other errors not handled by controllers
app.use(function( res, err ) {
  let response = {
    statusCode: err.status || 500,
    error: {
      "code": Utils.isEmpty(err.code) ? Utils.config().errorCodes.api_unexpected_error : err.code,
      "message": err.message
    }
  };

  return res.json(response);
});



// *port communication
port = process.env.PORT ? process.env.PORT : port;
app.listen(port, () => {
  console.log(`START ON PORT ${port}`);
});