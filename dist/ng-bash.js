angular.module('ng-bash', []).factory('bash', ['$q', function($q) {

    return {
        execute: function(bashScript) {
            return $q.reject(new Error('Not implemented'));
        }
    };

}]);
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