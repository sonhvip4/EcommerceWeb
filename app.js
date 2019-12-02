var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecommerce')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
// mongoose.connect('mongodb+srv://root:123@ecommerce-yzccg.mongodb.net/ecommerce?retryWrites=true&w=majority')
//   .then(() =>  console.log('connection succesful'))
//   .catch((err) => console.error(err));

var apiRouter = require('./routes/book');
var categoryRouter = require('./routes/categoryRouter');
var productRouter = require('./routes/productRouter');
var userRouter = require('./routes/userRouter');
var cartRouter= require('./routes/cartRouter');
var orderRouter= require('./routes/orderRouter');
var ordersuccessRouter= require('./routes/orderSuccessRouter');

var app = express();
//test login google
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/key_google');
const cookieSession = require('cookie-session');

require('./services/passport');
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRouter')(app);



//

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/login', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/register', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/user-info', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/books', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/category', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/book-details/:id', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/book-create', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/book-edit/:id', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/product-detail/:id', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/mycart', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/success', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/admin', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/admin/qluser', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/admin/qluser/create', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/admin/qluser/edit', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/admin/qlproduct', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/admin/qlproduct/create', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/admin/qlproduct/edit', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/admin/qlorder', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/api', apiRouter);
app.use('/apicategory',categoryRouter);
app.use('/apiproduct',productRouter);
app.use('/auth',userRouter);
app.use('/apicart',cartRouter);
app.use('/apiorder',orderRouter);
app.use('/apiuser',userRouter);
app.use('/apiordersuccess',ordersuccessRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});
const port =3000;
app.listen(port,()=>{
  console.log('Server started in port: '+port);
});

module.exports = app;
