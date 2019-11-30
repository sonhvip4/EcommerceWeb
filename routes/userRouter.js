var express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
var User = require('../models/User');
var router = express.Router();

const checkAuth =require("../config/check-auth");

router.post("/signup", (req, res, next) => {
    
    User.find({ email: req.body.email })
      .exec()
      .then(user => {
        if (user.length >= 1) {
          return res.status(409).json({
            message: "Mail exists"
          });
        } else {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {             
              return res.status(500).json({
                error: err
              });
            } else {
               
              const user = new User({
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                name: req.body.name,
                linkimage: "https://st.quantrimang.com/photos/image/072015/22/avatar.jpg", 
                address: "Chưa có",
                phone: "Chưa có",
                password: hash,
                role:"user"
              });
              user
                .save()
                .then(result => {
                  console.log(result);
                  res.status(201).json({
                    message: "User created"
                  });
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                  });
                });
            }
          });
        }
      });
  });
  router.post("/login", (req, res, next) => {
    console.log(res.body);
    User.find({ email: req.body.email })
      .exec()
      .then(user => {
        if (user.length < 1) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err) {
            return res.status(401).json({
              message: "Auth failed"
            });
          }
          if (result) {
            const token = jwt.sign(
              {
                email: user[0].email,
                userId: user[0]._id,
                name: user[0].name,
                linkimage:user[0].linkimage,
                address:user[0].address,
                phone:user[0].phone,
                role:user[0].role
              },
              'todo-app-super-shared-secret',
              {
                expiresIn: "1h"
                }
              
            );
            console.log(token);
              
            return res.status(200).json({
              message: "Auth successful",
              token: token,
              username:user[0].name,
              id: user[0]._id,
              role:user[0].role

            });
          }
          res.status(401).json({
            message: "Auth failed"
          });
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
  
  router.delete("/:userId", (req, res, next) => {
    User.remove({ _id: req.params.userId })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "User deleted"
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
  router.post("/infor", (req, res, next) => {

    console.log(req.body.id);
    User.findById(req.body.id, function (err, user) {
      if (err) return next(err);
      res.json(user);
    });
  
  });

  module.exports = router;