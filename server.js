// import dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// instances
var app = express();
var router = express.Router();

// set port
var port = process.env.API_PORT || 3001;

// db config
mongoose.connect('mongodb://pointatnick:elephant1@ds145312.mlab.com:45312/justgrownup');

// configure API to use bodyParser and look for JSON in request bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set headers to allow CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  // remove caching to get most recent Posts
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// set route path and initialize API
app.use('/api', router);

// start server and listen for requests
app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
