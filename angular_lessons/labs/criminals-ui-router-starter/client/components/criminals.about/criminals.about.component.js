const controller = require('./criminals.about.controller.js');
const template = require('./criminals.about.html');

const CriminalsAboutComponent = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
	.component('about', CriminalsAboutComponent);