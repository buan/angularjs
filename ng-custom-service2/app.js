var myApp=angular.module("myApp",[]);

myApp.controller("myController",function($scope,stringService)
{
	
	$scope.changeString=function(input)
	{
		$scope.output=stringService.processString(input);
		
	}
});


