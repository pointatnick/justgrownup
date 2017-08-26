// import dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const Post = require('./model/posts');

// instances
const app = express();
const router = express.Router();

// db config
mongoose.Promise = require('bluebird');
const mongoUser = process.env.MONGO_USERNAME || 'pointatnick';
const mongoPw = process.env.MONGO_PASSWORD || '3374797JGN';
const mongoDb = process.env.MONGO_DB || 'ds145312.mlab.com:45312/justgrownup';
mongoose.connect(
  'mongodb://' + mongoUser + ':' + mongoPw + '@' + mongoDb,
  {useMongoClient: true}
);

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

// static react files
app.use(express.static(path.join(__dirname, 'client/build')))

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

router.route('/posts/:id')
  .get((req, res) => {
    Post.findOne({ '_id': req.params.id }, (err, post) => {
      if (err) {
        res.send(err);
      }

      res.json(post);
      console.log("read post", req.params.id);
    })
  })
  .put((req, res) => {
    Post.findOneAndUpdate({ '_id': req.params.id }, {
      $set: {
        title: req.body.title,
        body: req.body.body,
      }
    }, (err, post) => {
      if (err) {
        res.send(err);
      }

      res.json(post);
      console.log("update post", req.params.id);
    })
  })
  .delete((req, res) => {
    Post.findOneAndRemove({ '_id': req.params.id }, (err, post) => {
      if (err) {
        res.send(err);
      }

      res.json(post);
      console.log("delete post", req.params.id);
    })
  });

// catchall
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// start server and listen for requests
var port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App on port ${port}`);
});
