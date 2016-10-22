(function() {
angular.module('furniture', ['ngRoute'])
angular.module('furniture')
	.controller('mainController', ['$scope', '$http', function($scope, $http) {
		$scope.loggedIn = undefined;
		var itemsArray = [];
		var authCheck = function() {
			$http.get('/api/me').then(function(returnData) {
				$scope.user = returnData.data;
				console.log(returnData.data);
				if(returnData.data !== "") {
					$scope.loggedIn = true;
				}
				else {
					$scope.loggedIn = false;
				}
				if($scope.loggedIn === true) {
					$scope.auth = "A D M I N";
				}
				if($scope.loggedIn === false) {
					$scope.auth = "R | F";
				}
				console.log($scope.loggedIn);
				console.log($scope.auth);
			});
		};
		authCheck();


		$scope.getId = function(item) {
			console.log(item._id);
		}



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
				console.log(response._id);
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
			templateUrl: '/html/main.html', 
			controller: 'mainController'
		})
		.when('/main', {
			templateUrl: '/html/main.html', 
			controller: 'mainController'
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
		.when('/seeAll', {
			templateUrl: '/html/seeAll.html', 
			controller: 'mainController'
		})
	}])
}());