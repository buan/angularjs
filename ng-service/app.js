var myApp=angular.module("myapp",[]);
myApp.controller("myController",function($scope,$http){
	
	$http.get("http://localhost/ng-service/index.php")
    .then(function (response) {$scope.names = response.data;});

});