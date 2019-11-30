var mongoose = require('mongoose');
var CategorySchema = new mongoose.Schema({
    id: String,
    name: String,
    note: String,
    dateadd: String,
    dateupdate: String,
    linkimage: String,
    
  });
  
  module.exports = mongoose.model('category', CategorySchema);