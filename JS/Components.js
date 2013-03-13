angular.module('components', []).
  directive('contactform', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      template:
        '<form name="htmlform" method="post" action="#">' +
          '<div ng-transclude></div>' +
          '<table width="450px">' +
            '<tr>'+
              '<td valign="top">' +
              	'<label for="first_name">First Name *</label>' +
              '</td>' +
              '<td valign="top">' +
              	'<input  type="text" name="first_name" maxlength="50" size="30">' +
              '</td>' +
            '</tr>' +
            '<tr>'+
              '<td valign="top">' +
              	'<label for="last_name">Last Name *</label>' +
              '</td>' +
              '<td valign="top">' +
              	'<input  type="text" name="last_name" maxlength="50" size="30">' +
              '</td>' +
            '</tr>' +
            '<tr>'+
              '<td valign="top">' +
              	'<label for="email">Email Address *</label>' +
              '</td>' +
              '<td valign="top">' +
              	'<input  type="text" name="email" maxlength="80" size="30">' +
              '</td>' +
            '</tr>' +
            '<tr>'+
              '<td valign="top">' +
              	'<label for="comments">Comments *</label>' +
              '</td>' +
              '<td valign="top">' +
              	'<textarea  name="comments" maxlength="1000" cols="25" rows="6"></textarea>' +
              '</td>' +
            '</tr>' +
            '<tr>'+
              '<td colspan="2" style="text-align:center">' +
              	'<input type="button" value="Submit">' +
              '</td>' +
            '</tr>' +
          '</table>' +
        '</form>',
      replace: true
    };
  }).
  directive('contactpartialform', function() {
  	return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: './Partials/contact.html'
    };
  })