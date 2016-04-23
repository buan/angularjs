var myApp=angular.module("myModule",[]);
myApp.controller("myController",function($scope){
	
var tech=
[
{
name:"Sachin",
likes:"0",
dislikes:"0"
},
{
name:"Sourav",
likes:"0",
dislikes:"0"
},
{
name:"dravid",
likes:"0",
dislikes:"0"
},
{
name:"Virat",
likes:"0",
dislikes:"0"
}
]

$scope.tech=tech;

$scope.likes=function(tech)
{
	tech.likes++;
}

$scope.dislikes=function(tech)
{
	tech.dislikes--;
}
});