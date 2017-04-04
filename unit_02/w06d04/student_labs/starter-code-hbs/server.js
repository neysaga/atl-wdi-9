/* packages */
var express = require('express');

var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
/* app settings*/
var app         = express();
var router = express.Router();
var port        = process.env.PORT || 3000;

/* set up the application params*/
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

//controllers
var todosController = require('./controllers/todos.js');
app.use('/todos', todosController);


app.get('/todos', function(req,res) {
  var seededTodos = [
    {
      description: "get beer",
      urgent: true
    }, {
      description: "dry cleaning",
      urgent: false
    }, {
      description: "go to the bank",
      urgent: true
  }];

  res.render('todos/index', {
    todos: seededTodos
  });
});
// log
app.use( logger('dev'));

/*Views*/
app.set('view engine', 'hbs');

/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});

/* INDEX TODOS */
app.get('/todos', function(req,res) {
  var seededTodos = [
    {
      description: "get beer",
      urgent: true
    }, {
      description: "dry cleaning",
      urgent: false
    }
  ];

  res.render('todos/index', {
    todos: seededTodos
  });
});

// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
