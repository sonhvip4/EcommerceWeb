var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var OrderSuccess = require('../models/OrderSuccess');
const checkAuth =require("../config/check-auth");
ObjectId = require('mongodb').ObjectID;



router.post('/',checkAuth(1),async function(req, res, next) {


   var result=await Order.find({ "user": new ObjectId(req.body.id)});
    
    console.log(result);

 
});


  /* GET ALL ORDER */
  router.get('/admin/allorder', checkAuth(2), function(req, res, next) {
    OrderSuccess.find(function (err, ordersuccess) {
        if (err) return next(err);
        res.json(ordersuccess);
      });
    });

  /* DELETE ORDER */
router.delete('/admin/deleteorder/:id', checkAuth(2), function(req, res, next) {
  OrderSuccess.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


  module.exports = router;