(function() {
    'use strict';
    angular.module('myApp')
    .directive('dragger', function() {
        return {
            scope: false,
            restrict: 'E',
            template: '<div ng-mousemove="moveMe($event)"' +
                      ' ng-mousedown="downMe($event)" ' +
                      ' ng-mouseup="upMe($event)"> ' +
                      ' </div>',
            link: function(scope, element, attributes) {
                element.bind('mousemove', function($event) {
                    scope.lastEvent = 'move';
                    scope.pageX = $event.pageX;
                    scope.pageY = $event.pageY;
                });
                element.bind('mouseup', function($event) {
                    scope.lastEvent = 'up';
                    scope.pageX = $event.pageX;
                    scope.pageY = $event.pageY;
                });
                element.bind('mousedown', function($event) {
                    scope.lastEvent = 'down';
                    scope.pageX = $event.pageX;
                    scope.pageY = $event.pageY;
                });                
            }
        };
    });

}());

