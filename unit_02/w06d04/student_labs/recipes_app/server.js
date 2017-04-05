var express = require('express');
var app = express();
var hbs = require('hbs');
app.set('view engine', 'hbs');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
	extended: true
}));
// app.set('views', './views');
// app.use(express.static(__dirname + '/public'));

// include the method-override package
var methodOverride = require('method-override');
//...
// after the app has been defined
// use methodOverride.  We will be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));


app.get('/', function(req, res) {
});

var recipes = require('./recipes.js')
app.get('/recipes', function(req, res) {
   res.render('recipes/index', {
    	data: recipes.seededRecipes
    });
});
var newRecipe = require('./views/recipes/new.hbs')
app.get('/new', function(req, res) {
	res.render('recipes/new', {
		data: newRecipe

	});
});









var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    console.log('Express server is listening on port ' + port);
});