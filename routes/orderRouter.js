var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Order = require('../models/Order');
var User = require('../models/User');
var OrderSuccess = require('../models/OrderSuccess');
const checkAuth =require("../config/check-auth");
ObjectId = require('mongodb').ObjectID;
var nodemailer =  require('nodemailer');
var Product = require('../models/Product');
var transporter = nodemailer.createTransport({
  service: 'gmail',//smtp.gmail.com  //in place of service use host...
  secure: false,//true
  port: 25,//465
  auth: {
      user: 'myenglish20191998@gmail.com', // Your email id
      pass: '' // Your password
  },
  tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
  }
});

router.post('/send',checkAuth(1),async function(req, res, next) {


   var result=await Order.find({ "user": new ObjectId(req.body.id)});
   var user= await User.findById(req.body.id );
 
   const orderSuccess = new OrderSuccess({
    _id: new mongoose.Types.ObjectId(),
    name: "test1",
    product: result, 
    user:req.body.id
  });
  let nameProduct="";
  orderSuccess.product.map(item=>
    nameProduct =nameProduct+"<li>"+"Tên sản phẩm:"+item.name+"Giá:"+item.price+"<li>"
    );
    //them don hang thaanh cong
    OrderSuccess.create(orderSuccess, function (err, post) {});
    //xoa gio hang user đã đặt
    Order.deleteMany({ "user": new ObjectId(req.body.id)})
    .exec()
    .then(order => {
      
    
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

  //send email xác nhận đơn hàng
    
  var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
    from: 'Test',
    to: user.email,
    subject: 'Mail xác nhận đơn hàng',
    text: 'You recieved message from ' + req.body.email,
    html: '<p>Chúc mừng bạn đã đặt hàng thành công!!!</b><ul><li>Username:' + user.name + '</li><li>Địa chỉ nhận hàng:' + user.address + '</li><li>Số điện thoại:' + user.phone + '</li>'+nameProduct+'</ul>'
    }
    transporter.sendMail(mainOptions, function(err, info){
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            console.log('Message sent: ' +  info.response);
            res.redirect('/');
        }
    });

});


  module.exports = router;