(function() {
    'use strict';
    angular.module('myApp')
    .directive('clicker', function() {
        return {
            restrict: 'E',
            template: '<button ng-click="clickMe()"><ng-transclude/></button>',
            controller: function($log, $scope) {
                $scope.clickMe = function() {
                    $scope.data = 'boo!';
                };
            },
            transclude: true
        };
    });

}());

