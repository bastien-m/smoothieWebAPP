(function() {
	'use strict';
	angular.module('smoothieApp', ['ngRoute'])
	.config(['$routeProvider', function($routeProdiver) {

		$routeProdiver.when('/Login', {
			templateUrl: 'partials/login.html',
			controller: 'LoginCtrl'
		})
		.when('/signup', {
			templateUrl: 'partials/signup.html',
			controller: 'SignupCtrl'
		})
		.otherwise({
			templateUrl: 'partials/home.html',
			controller: 'HomeCtrl'
		});

	}]);




})();
