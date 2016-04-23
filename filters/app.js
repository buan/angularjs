var myApp=angular.module("myapp",[]);
myApp.controller("myController",function($scope){
	var emp=[
	{name:"A",gender:"male",dob: new Date("June 21 1989"), salary:"5000"},
	{name:"B",gender:"female",dob: new Date("June 21 1989"),salary:"4000"},
	{name:"C",gender:"female",dob: new Date("June 21 1989"),salary:"15000"},
	]
	$scope.emp=emp;
	$scope.rowsize=3;
});