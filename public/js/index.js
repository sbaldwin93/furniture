(function() {
angular.module('furniture', ['ngRoute'])
angular.module('furniture')
	.controller('mainController', ['$scope', '$http', function($scope, $http) {
		console.log("hello from index.js");
		var refresh = function() {
			var data = {}
			$http.get('/api/items/get', data).success(function(response) {
				$scope.itemsArray = response;
				$scope.item = "";
			})
		};
		refresh();
	}]);
angular.module('furniture')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: '/html/main.html', 
			controller: 'mainController'
		})
		.when('/main', {
			templateUrl: '/html/main.html', 
			controller: 'mainController'
		})
		.when('/brand', {
			templateUrl: '/html/main.html', 
			controller: 'mainController'
		})
		.when('/contact', {
			templateUrl: '/html/contact.html', 
			controller: 'mainController'
		})
		.when('/carousel-example-generic', {
			templateUrl : '/html/main.html',
			controller : 'mainController'
		})
		.when('/dining', {
			templateUrl: '/html/dining.html', 
			controller: 'mainController'
		})
		.when('/living', {
			templateUrl: '/html/living.html', 
			controller: 'mainController'
		})
		.when('/office', {
			templateUrl: '/html/office.html', 
			controller: 'mainController'
		})
		.when('/bedroom', {
			templateUrl: '/html/bedroom.html', 
			controller: 'mainController'
		})
	}])
}());