var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;


//add ListSchema here
//your code
var listSchema = new Schema({
  name: String,
  completed: false
});

var UserSchema = new Schema({
  username: String,
  email: String,
  password_digest: String,
  created_at: Date,
  updated_at: Date
});


//add a ListSchema.pre function (just like UserSchema below)
//your code

UserSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next();
});

var UserModel = mongoose.model('User', UserSchema);

var listModel = mongoose.model('list', listSchema);
//var ListModel model
//your code

//export List below
module.exports = {
  User: UserModel,
  list: listModel
};
