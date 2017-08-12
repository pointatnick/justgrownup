// import dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Post = require('./model/posts');

// instances
var app = express();
var router = express.Router();

// set port
var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];

// db config
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://'+process.env.MONGO_USERNAME+':'+process.env.MONGO_PASSWORD+'@'+config.database.db, { useMongoClient: true });

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

// router setup
router.get('/', (req, res) => {
  res.json({ message: 'API initialized' });
});

// add the /posts route
router.route('/posts')
  .get((req, res) => {
    // look at Post Schema
    Post.find((err, posts) => {
      if (err) {
        res.send(err);
      }
      // respond with JSON object of posts
      res.json(posts);
    });
  })
  .post((req, res) => {
    var post = new Post();
    post.author = req.body.author;
    post.title = req.body.title;
    post.body = req.body.body;

    post.save((err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Post successfully added!' });
    });
  });

// start server and listen for requests
app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
