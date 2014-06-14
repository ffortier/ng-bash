angular.module('ng-bash').directive('script', ['bash', function(bash) {

    return {
        restrict: 'E',
        link: function(scope, iElem, iAttrs) {
            if (iAttrs.type === 'application/x-ng-bash') {
                bash.execute(iElem.text());
            }
        }
    }

}]);