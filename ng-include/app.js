var myApp=angular.module("myapp",[]);
myApp.controller("myController",function($scope){
	var emp=[
	{name:"Suman Dutta",gender:"male",dob: new Date("July 30 1987"), salary:"20000"},
	{name:"Amit Sinha",gender:"female",dob: new Date("June 21 1990"),salary:"35000"},
	{name:"Subhransu Sekhar",gender:"male",dob: new Date("June 21 1985"),salary:"25000"},
	{name:"Soumya Banerjee",gender:"male",dob: new Date("June 21 1989"),salary:"19000"}
	]
	$scope.emp=emp;
	$scope.showtable="showtable.html";
});