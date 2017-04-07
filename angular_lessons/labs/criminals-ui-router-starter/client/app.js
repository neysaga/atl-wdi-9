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
			template: '<about></about>'
		})
		.state('criminals', {
			url: '/criminals',
			template: '<criminals></criminals>'
		})
		.state('criminal', {
			url: '/criminals/:criminalId',
			template: '<criminals-show></criminals-show>'
		})
		.state('new', {
			url: '/new',
			template: '<criminals-new></criminals-new>'
		});
		// .state('criminal', {
		// 	url: '/criminals/:newcriminal',
		// 	template: '<criminals-new></criminals-new>'
		// });


	$urlRouterProvider.otherwise('/');
}
