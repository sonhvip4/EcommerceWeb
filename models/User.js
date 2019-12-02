var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  googleId: String,
  facebookId: String,
  name: String,
  linkimage: String,
  address:  String,
  phone:  String,
  role:String,
  _id: mongoose.Schema.Types.ObjectId,
  email: { 
      type: String, 

      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: { type: String }
 
  });
  
  module.exports = mongoose.model('users', UserSchema);