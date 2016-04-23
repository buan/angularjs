var Myapp=angular.module("myModule",[])
Myapp.controller("myController",function($scope){
	
	var emp=[
	{
	fname:"Soumya",
	lname:"Banerjee",
	job:"Software Engineer"
	},
	{
	fname:"Amit",
	lname:"Sinha",
	job:"Senior Software Engineer"
	},
	{
	fname:"Subhransu",
	lname:"Sekhar",
	job:"Software Engineer"
	},
	{
	fname:"Suman",
	lname:"Dutta",
	job:"Software Engineer"
	}
	]
	$scope.emp=emp;
});