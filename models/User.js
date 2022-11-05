const mongoose = require('mongoose');
const User = mongoose.Schema;

const UserSchema = new User({
    name: { type: String,required:true},
    email: { type: String,required:true},
    city: { type: String},
    phone: { type: String,required:true},
    question: { type: String},
    insta: { type: String},
  }, {
    timestamps: true,
  });
  
  const Designation = mongoose.model('User', UserSchema);
  module.exports = Designation;

