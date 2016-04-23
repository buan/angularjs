var myApp=angular.module("app",["ngRoute"])
.config(function($routeProvider)
{
	$routeProvider
	.when("/home",{
		templateUrl:"Templates/home.html",
		controller:"homeController"
	})
	.when("/courses",{
		templateUrl:"Templates/courses.html",
		controller:"coursesController"
	})
	.when("/students",{
		templateUrl:"Templates/students.html",
		controller:"studentsController"
	})
	.otherwise({
		redirectTo:"/courses"
	})
})
.controller("homeController",function($scope){
	$scope.message="Home Page"

})
.controller("coursesController",function($scope){
	$scope.course=["C#","Java","Php","SQL"];

})
.controller("studentsController",function($scope,$http)
{
  $http.get("customers.php").then(function (response) {
      $scope.students = response.data;
  });

});