var myApp=angular.module("myApp",[]);

myApp.controller("myController",function($scope,$location,$anchorScroll)
{
	$scope.scrollTo=function(scrollLocation){
		$location.hash(scrollLocation);
		$anchorScroll();
	}
});


