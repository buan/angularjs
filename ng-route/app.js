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
})
.controller("homeController",function($scope){
	$scope.message="Home Page"

})
.controller("coursesController",function($scope){
	$scope.course=["C#","Java","Php","SQL"];

})
.controller("studentsController",function($scope){
	$scope.students=["Soumya","Suman","Amit","Subhransu"];

})