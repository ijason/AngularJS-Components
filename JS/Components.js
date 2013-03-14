angular.module('components', []).
  directive('contactform', function() {
  	return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: './Partials/contact.html',
      controller: function ($scope) {
      		$scope.master= {};
      		
      		$scope.update = function(user) {
      			//send email here
    			$scope.master= angular.copy(user);
  			};
  			
  			$scope.reset = function() {
    			$scope.user = angular.copy($scope.master);
  			};
 
  			$scope.reset();
      }
    };
  })