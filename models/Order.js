var mongoose = require('mongoose');
ObjectId = require('mongodb').ObjectID;
var OrderSchema = new mongoose.Schema({
    id: String,
    name: String,
    linkimage: String,
    note: String,
    dateorder: Date,
    price: String,
    note: String,
    status: String,
    product: ObjectId,
    user:ObjectId 
  });
  
  module.exports = mongoose.model('orders', OrderSchema);