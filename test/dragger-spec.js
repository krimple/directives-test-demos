(function() {
    'use strict';
    describe('da dragger!', function() {
        var element;

        beforeEach(module('myApp'));
        it('should down the mouse!', inject(function($timeout, $compile, $rootScope) {
            var $scope = $rootScope.$new();
            element = $compile(angular.element('<dragger id="foo"></dragger>'))($scope);
            expect(element).toBeDefined();
            console.log(angular.mock.dump(element));

            $timeout(function() {
                element.triggerHandler({
                    pageX: 100,
                    pageY: 100,
                    type: 'mousemove'
                });
            }, 100);
            $timeout.flush();

            // now it executes the ng-click bound function and we're good
            console.log(angular.mock.dump($scope));
            expect($scope.lastEvent).toBe('move');
            expect($scope.pageX).toBe(100);
            expect($scope.pageY).toBe(100);
        }));
    });
}());

