var express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
var User = require('../models/User');
var router = express.Router();

const checkAuth = require("../config/check-auth");

router.post("/signup", (req, res, next) => {
console.log(req.body);
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
              role: "user"
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
router.post("/adduser",checkAuth(2), (req, res, next) => {
  console.log(req.body);
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
                name: req.body.firstName+ req.body.lastName,
                linkimage: "https://st.quantrimang.com/photos/image/072015/22/avatar.jpg",
                address: req.body.address,
                phone: req.body.phone,
                password: hash,
                role: req.body.role
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
              linkimage: user[0].linkimage,
              address: user[0].address,
              phone: user[0].phone,
              role: user[0].role
            },
            'todo-app-super-shared-secret',
            {
              expiresIn: '2h'
            }

          );
          console.log(token);

          return res.status(200).json({
            message: "Auth successful",
            token: token,
            username: user[0].name,
            id: user[0]._id,
            role: user[0].role

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

router.delete("/:userId", checkAuth(2), (req, res, next) => {
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
router.post("/infor", checkAuth(1),(req, res, next) => {

  console.log(req.body.id);
  User.findById(req.body.id, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });

});

/* GET ALL USER */
router.get("/admin/alluser", checkAuth(2), function (req, res, next) {
  User.find(function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

/* UPDATE USER */
router.put('/admin/updateuser/:id', checkAuth(2), function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE USER */
router.delete('/admin/deleteuser/:id', checkAuth(2), function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;