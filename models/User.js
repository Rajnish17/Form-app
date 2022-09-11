const mongoose = require('mongoose');
const User = mongoose.Schema;

const UserSchema = new User({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  }, {
    timestamps: true,
  });
  
  const Designation = mongoose.model('User', UserSchema);
  module.exports = Designation;

