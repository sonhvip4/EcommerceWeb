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
  /* GET PRODUCT BY ID */
router.get('/:id',function(req, res, next) {
  Product.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  
  });
});

/* ADD PRODUCT */
router.post('/admin/addproduct', checkAuth(2),function(req, res, next) {
  console.log(req.body);
  Product.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE PRODUCT */
router.put('/admin/updateproduct/:id',checkAuth(2), function(req, res, next) {
  Product.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE PRODUCT */
router.delete('/admin/deleteproduct/:id',checkAuth(2), function(req, res, next) {
  Product.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

  module.exports = router;