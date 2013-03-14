angular.module('components', []).
  directive('contactform', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      template:
        '<form novalidate class="css-form">' +
          '<div ng-transclude></div>' +
          '<table width="450px">' +
            '<tr>'+
              '<td valign="top">' +
              	'<label for="first_name">First Name *</label>' +
              '</td>' +
              '<td valign="top">' +
              	'<input  type="text" name="first_name" maxlength="50" size="30" ng-model="user.fname" required >' +
              '</td>' +
            '</tr>' +
            '<tr>'+
              '<td valign="top">' +
              	'<label for="last_name">Last Name *</label>' +
              '</td>' +
              '<td valign="top">' +
              	'<input  type="text" name="last_name" maxlength="50" size="30" ng-model="user.lname" required >' +
              '</td>' +
            '</tr>' +
            '<tr>'+
              '<td valign="top">' +
              	'<label for="email">Email Address *</label>' +
              '</td>' +
              '<td valign="top">' +
              	'<input  type="email" name="email" maxlength="80" size="30" ng-model="user.email" required >' +
              '</td>' +
            '</tr>' +
            '<tr>'+
              '<td valign="top">' +
              	'<label for="comments">Comments *</label>' +
              '</td>' +
              '<td valign="top">' +
              	'<textarea  name="comments" maxlength="1000" cols="25" rows="6" ng-model="user.comment"></textarea>' +
              '</td>' +
            '</tr>' +
            '<tr>'+
              '<td colspan="2" style="text-align:center">' +
                '<button ng-click="reset()">RESET</button> <button ng-click="update(user)">SAVE</button>' +
              '</td>' +
            '</tr>' +
          '</table>' +
        '</form>',
      replace: true,
      controller: function ($scope) {
      		$scope.master= {};
      		
      		$scope.update = function(user) {
    			$scope.master= angular.copy(user);
  			};
  			
  			$scope.reset = function() {
    			$scope.user = angular.copy($scope.master);
  			};
 
  			$scope.reset();
      }
    };
  }).
  directive('contactpartialform', function() {
  	return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: './Partials/contact.html',
      controller: function ($scope) {
      		$scope.master= {};
      		
      		$scope.update = function(user) {
    			$scope.master= angular.copy(user);
  			};
  			
  			$scope.reset = function() {
    			$scope.user = angular.copy($scope.master);
  			};
 
  			$scope.reset();
      }
    };
  })