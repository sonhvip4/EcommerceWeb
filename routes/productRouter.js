var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/Product');
const checkAuth =require("../config/check-auth");

router.get('/', function(req, res, next) {
  
  Product.find(function (err, product) {
      if (err) return next(err);
      res.json(product);
     
    });
  });
  /* GET SINGLE BOOK BY ID */
router.get('/:id',function(req, res, next) {
  Product.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  
  });
});

  module.exports = router;