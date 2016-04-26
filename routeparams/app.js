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
	.when("/students/:id",{
		templateUrl:"Templates/studentsdetails.html",
		controller:"studentsdetailsController"
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
      	console.log(response.data);
	  $scope.students = response.data;
  })
})
  .controller("studentsdetailsController",function($scope,$http,$routeParams)
{
$http({
	url:"customerdetails.php",
	params:{id:$routeParams.id},
	method:"get"
  })
.then(function (response) {
	console.log(response.data);
      $scope.students = response.data;
})

});