
var app = angular.module("newApp",[]); 
app.controller('myController', function($scope, $http, $log){
	
	var successCall = function(response){
		$scope.persons = response.data;
		$log.info(response);
	};

	var errorCall = function(reason){
		$scope.error = reason.data;
		$log.info(reason);
	};


	$http({
		method: 'GET',
		url: 'https://api.github.com/users/octocat/followers'
	}).then(successCall, errorCall);
})	


