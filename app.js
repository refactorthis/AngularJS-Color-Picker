var app = angular.module('myApp', []);


app.directive('colorPicker', function() {
  return {
	require: 'ngModel',
	link: function(scope, element, attrs, ngModel) {
	  element.colorPicker({
		// update the scope whenever we pick a new color
		onColorChange: function(id, newValue) {
		  scope.$apply(function() {
			ngModel.$setViewValue(newValue);
		  });
		}
	  });
	  
	  ngModel.$render = function () {
		element.val(ngModel.$viewValue);
		element.change();  
	  };
	}
  }
});

app.controller('MainController', function($scope) {
  $scope.project = {
    color: "#ff0000"
  };

  $scope.randomColor = function() {
    var red   = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue  = Math.floor(Math.random() * 255);
    return "rgb(" + red + "," + green + "," + blue + ")";
  };
});
​