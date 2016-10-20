(function() {
angular.module('furniture', ['ngRoute'])
angular.module('furniture')
	.controller('mainController', ['$scope', '$http', function($scope, $http) {
		console.log("hello from admin.js");
		var itemsArray = [];
		$http.get('/api/me').then(function(returnData) {
			$scope.user = returnData.data;
		});
		var refresh = function() {
			var data = {}
			$http.get('/api/items/get', data).success(function(response) {
				$scope.itemsArray = response;
				$scope.item = "";
			})
		};
		refresh();
		$scope.addDining = function() {
			var itemsArray = [];
			var request = {
				name: $scope.item.name,
				type: 'dining',
				length: $scope.item.length,
				width: $scope.item.width,
				height: $scope.item.height,
				price: $scope.item.price
			}
			$http.post('/api/items/post', request).success(function(response) {
				$scope.itemsArray.push(response);
				refresh();
			}).error(function(error) {
				console.log(error);
			});
		};
		$scope.addLiving = function() {
			var itemsArray = [];
			var request = {
				name: $scope.item.name,
				type: 'living',
				length: $scope.item.length,
				width: $scope.item.width,
				height: $scope.item.height,
				price: $scope.item.price
			}
			$http.post('/api/items/post', request).success(function(response) {
				$scope.itemsArray.push(response);
				refresh();
			}).error(function(error) {
				console.log(error);
			});
		};
		$scope.addOffice = function() {
			var itemsArray = [];
			var request = {
				name: $scope.item.name,
				type: 'office',
				length: $scope.item.length,
				width: $scope.item.width,
				height: $scope.item.height,
				price: $scope.item.price
			}
			$http.post('/api/items/post', request).success(function(response) {
				$scope.itemsArray.push(response);
				refresh();
			}).error(function(error) {
				console.log(error);
			});
		};
		$scope.addBedroom = function() {
			var itemsArray = [];
			var request = {
				name: $scope.item.name,
				type: 'bedroom',
				length: $scope.item.length,
				width: $scope.item.width,
				height: $scope.item.height,
				price: $scope.item.price
			}
			$http.post('/api/items/post', request).success(function(response) {
				$scope.itemsArray.push(response);
				refresh();
			}).error(function(error) {
				console.log(error);
			});
		};
	}]);
angular.module('furniture')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: '/html/admin-main.html', 
			controller: 'mainController'
		})
		.when('/admin-main', {
			templateUrl: '/html/admin-main.html', 
			controller: 'mainController'
		})
		.when('/admin-dining', {
			templateUrl: '/html/admin-dining.html', 
			controller: 'mainController'
		})
		.when('/admin-living', {
			templateUrl: '/html/admin-living.html', 
			controller: 'mainController'
		})
		.when('/admin-office', {
			templateUrl: '/html/admin-office.html', 
			controller: 'mainController'
		})
		.when('/admin-bedroom', {
			templateUrl: '/html/admin-bedroom.html', 
			controller: 'mainController'
		})
	}])
}());