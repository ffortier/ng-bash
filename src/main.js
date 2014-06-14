angular.module('ng-bash', []).factory('bash', ['$q', function($q) {

    return {
        execute: function(bashScript) {
            return $q.reject(new Error('Not implemented'));
        }
    };

}]);