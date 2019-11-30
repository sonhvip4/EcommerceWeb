var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    name: String,
    code: String,
    description: String,
    price: String,
    color: String,
    dateAdd: Date,
    dateUpdate:Date,
    linkimage: String
    
  });
  
  module.exports = mongoose.model('products', ProductSchema);