(function() {
angular.module('furniture', ['ngRoute', 'ngFileUpload'])
angular.module('furniture')
	.controller('mainController', ['$scope', '$http', 'Upload', '$timeout', function($scope, $http, Upload, $timeout) {
		$scope.loggedIn = undefined;
		var itemsArray = [];
		var authCheck = function() {
			$http.get('/api/me').then(function(returnData) {
				$scope.user = returnData.data;
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
			});
		};
		authCheck();
		var refresh = function(id) {
			var data = {}
			$http.get('/api/items/get', data).success(function(response) {
				$scope.itemsArray = response;
				$scope.item = "";
			});
		};
		refresh();
		$scope.addDining = function(file) {
			if(file) {
				$scope.itemsArray = [];
				file.upload = Upload.upload({
		      		url: '/api/items/post',
		      		data: {
		      			file: file, 
		      			name: $scope.item.name, 
		      			type: 'dining',
		      			lengt: $scope.item.lengt,
		      			width: $scope.item.width,
		      			height: $scope.item.height,
		      			price: $scope.item.price,
		      			location: $scope.item.location,
		      			description: $scope.item.location,  
		      			image: $scope.item.image
		      		},
		      		method: 'POST'
		    	});
		    	file.upload.then(function (response) {
		      		$timeout(function () {
			        	file.result = response.data;
			        	$scope.itemsArray.push(response.data)
			        	refresh()
		      		});
		      	})
	    	}
		};
		$scope.addLiving = function(file) {
			if(file) {
				$scope.itemsArray = [];
				file.upload = Upload.upload({
		      		url: '/api/items/post',
		      		data: {
		      			file: file, 
		      			name: $scope.item.name, 
		      			type: 'living',
		      			lengt: $scope.item.lengt,
		      			width: $scope.item.width,
		      			height: $scope.item.height,
		      			price: $scope.item.price,
		      			location: $scope.item.location,
		      			description: $scope.item.location,  
		      			image: $scope.item.image
		      		},
		      		method: 'POST'
		    	});
		    	file.upload.then(function (response) {
		      		$timeout(function () {
			        	file.result = response.data;
			        	$scope.itemsArray.push(response.data)
			        	refresh()
		      		});
		      	})
	    	}
		};
		$scope.addOffice = function(file) {
			if(file) {
				$scope.itemsArray = [];
				file.upload = Upload.upload({
		      		url: '/api/items/post',
		      		data: {
		      			file: file, 
		      			name: $scope.item.name, 
		      			type: 'office',
		      			lengt: $scope.item.lengt,
		      			width: $scope.item.width,
		      			height: $scope.item.height,
		      			price: $scope.item.price,
		      			location: $scope.item.location,
		      			description: $scope.item.location,  
		      			image: $scope.item.image
		      		},
		      		method: 'POST'
		    	});
		    	file.upload.then(function (response) {
		      		$timeout(function () {
			        	file.result = response.data;
			        	$scope.itemsArray.push(response.data)
			        	refresh()
		      		});
		      	})
	    	}
		};
		$scope.addBedroom = function(file) {
			if(file) {
				$scope.itemsArray = [];
				file.upload = Upload.upload({
		      		url: '/api/items/post',
		      		data: {
		      			file: file, 
		      			name: $scope.item.name, 
		      			type: 'bedroom',
		      			lengt: $scope.item.lengt,
		      			width: $scope.item.width,
		      			height: $scope.item.height,
		      			price: $scope.item.price,
		      			location: $scope.item.location,
		      			description: $scope.item.location,  
		      			image: $scope.item.image
		      		},
		      		method: 'POST'
		    	});
		    	file.upload.then(function (response) {
		      		$timeout(function () {
			        	file.result = response.data;
			        	$scope.itemsArray.push(response.data)
			        	refresh()
		      		});
		      	})
	    	}
		};
		$scope.delete = function(id) {
			$http.delete('/api/items/delete/' + id).success(function(response) {
				refresh();
			});	
		};

		$scope.name = undefined;
		$scope.picture = undefined;
		$scope.display = function(item) {
		    $scope.item = item;
		    $scope.item = "";
		    console.log(item.name);
		    $scope.name = item.name;
		    $scope.picture = item.image;
		    $scope.description = item.description;

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
		.when('/home', {
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
	}]);
}());