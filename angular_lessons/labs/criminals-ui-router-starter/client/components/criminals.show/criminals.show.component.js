const controller = require('./criminals.show.controller.js');
const template = require('./criminals.show.html');

<<<<<<< HEAD
const CriminalsShowComponent = {
=======
const component = {
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
	controller: controller,
	template: template
};

angular
	.module('criminals')
<<<<<<< HEAD
	.component('criminalsShow', CriminalsShowComponent);
=======
	// call this with <criminals-show></criminals-show>
	.component('criminalsShow', component);
>>>>>>> 64bdf58ad785d374ccb2a68cf6448fd5d3ccd61a
