var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Order = require('../models/Order');
var User = require('../models/User');
const checkAuth =require("../config/check-auth");
ObjectId = require('mongodb').ObjectID;



router.post('/',checkAuth(1),async function(req, res, next) {


   var result=await Order.find({ "user": new ObjectId(req.body.id)});
    
    console.log(result);

 
});


  module.exports = router;