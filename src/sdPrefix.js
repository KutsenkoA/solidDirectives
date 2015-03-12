'use strict';

angular
  .module('solidDirectives', [])
  .directive('sdPrefix', function() {
    return {
      restrict: 'A',
      scope: {
        sdPrefix: '@'
      },
      link: function(scope, element) {
        var
          setPrefix = function() {
            if (element.val() === scope.sdPrefix) {
              element.val('');
            } else if (element.val().length && element.val().indexOf(scope.sdPrefix) !== 0) {
              element.val(scope.sdPrefix + element.val());
            }
          };

        if (element.val().length) {
          setPrefix();
        }

        element.on('keyup', setPrefix);
      }
    }
  });