(function() {
    'use strict';
    angular.module('myApp')
    .directive('dragger', function() {
        return {
            scope: true,
            restrict: 'E',
            template: '<div ng-mousemove="moveMe($event)"' +
                      ' ng-mousedown="downMe($event)" ' +
                      ' ng-mouseup="upMe($event)"> ' +
                      ' </div>',
            controller: function($log, $scope) {
                $scope.downMe = function($event) {
                    $scope.lastEvent = 'down';
                    $scope.pageX = $event.pageX;
                    $scope.pageY = $event.pageY;
                };
                $scope.upMe = function($event) {
                    $scope.lastEvent = 'up';
                    $scope.pageX = $event.pageX;
                    $scope.pageY = $event.pageY;
                };
                $scope.moveMe = function($event) {
                    console.log('you moved me');
                    $scope.lastEvent = 'move';
                    $scope.pageX = $event.pageX;
                    $scope.pageY = $event.pageY;
                };
            }
        };
    });

}());

