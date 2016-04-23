var myApp=angular.module("myApp",[]);

myApp.controller("myController",function($scope)
{
	$scope.input="hello,please enter some text";
	$scope.changeString=function(input)
	{
		if(!input)
		{
			return input;
		}
		var output="";
		for(var i=0;i<input.length;i++)
		{
			if(i>0 && input[i]==input[i].toUpperCase())
			{
				output=output+" ";
			}
			output=output+input[i];
		}
	$scope.output=output;
	}
});


