var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
 author: String,
 title: String,
 body: String,
});

// export for use in server.js
module.exports = mongoose.model('Post', PostSchema);
