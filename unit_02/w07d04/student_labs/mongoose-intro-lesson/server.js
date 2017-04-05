var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

// Use native promises
mongoose.Promise = global.Promise;
var db = mongoose.conntection;

db.on('error', function(err){
  console.log(err);
});

db.once('open', function() {
  console.log('database has been connected');
});
db.close();

var Schema = mongoose.Schema;
var ProjectSchema = new Schema ({
  title: String,
  unit: String

});

var Schema = mongoose.Schema;

var StudentSchema = new Schema({
  name: String,
  age: Number,
  projects: [ProjectSchema]

});

var ItemSchema = new Schema({
  name: String
});
var ProjectModel = mongoose.model("Project", ProjectSchema);
var StudentModel = mongoose.model("Student", StudentSchema);

// var frankie = new StudentModel({name: "Frankie P.", age: 30});
// frankie.save(function(err, student){
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(student);
//   }
// });