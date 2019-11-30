var mongoose = require('mongoose');
ObjectId = require('mongodb').ObjectID;
var OrderSuccessSchema = new mongoose.Schema({
    id: String,
    name: String,
    product: Object,
    user:ObjectId
  });
  
  module.exports = mongoose.model('ordersuccesses', OrderSuccessSchema);