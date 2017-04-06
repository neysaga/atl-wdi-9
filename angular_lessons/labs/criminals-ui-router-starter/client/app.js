const angular = require('angular');
require('angular-ui-router');

angular
	.module('criminals', ['ui.router'])
	.config(uiRouterSetup)

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			template: '<h1>Home</h1>'
		})
		.state('about', {
			url: '/about',
			template: '<h1>About</h1>'
		})
		.state('criminals', {
			url: '/',
			template: '<h1>Criminals</h1>'
		})
	$urlRouterProvider.otherwise('/');
}
