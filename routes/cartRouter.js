var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Order = require('../models/Order');
const checkAuth =require("../config/check-auth");
ObjectId = require('mongodb').ObjectID;

router.post('/',checkAuth(1), function(req, res, next) {
   
     Order.find({ "user": new ObjectId(req.body.id)})
    .exec()
    .then(order => {
      res.json(order);
     
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
  });
  /* GET SINGLE BOOK BY ID */
router.get('/:id', checkAuth(1),function(req, res, next) {
    Order.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  
  });
});
router.post("/addcart",checkAuth(1), (req, res, next) => {
  console.log("vao add cart");
  console.log(req.body);
  const order = new Order({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.data.name,
    linkimage: req.body.data.linkimage, 
    dateorder: "2019-10-09T17:00:00.000Z",
    price: req.body.data.price,
    product:new ObjectId(req.body.data._id),
    user: new ObjectId(req.body.id)
  });
  order.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: "Them thanh cong !!!"
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
 
});


  module.exports = router;