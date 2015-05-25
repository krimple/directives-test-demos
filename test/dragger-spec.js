(function() {
    'use strict';
    describe('da dragger!', function() {
        var element, $timeout, $compile, $scope;

        beforeEach(module('myApp'));
        beforeEach(inject(function($rootScope, _$timeout_, _$compile_) {
            $timeout = _$timeout_;
            $compile = _$compile_;
            $scope = $rootScope.$new();
            element = $compile(angular.element('<dragger id="foo"></dragger>'))($scope);
        }));

        it('should create the dom element', function() {
            expect(element).toBeDefined();
            console.log(angular.mock.dump(element));
        });

        it('should move the mouse!', function() {
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
        });

        it('should down the mouse!', function() {
            $timeout(function() {
                element.triggerHandler({
                    pageX: 100,
                    pageY: 100,
                    type: 'mousedown'
                });
            }, 100);
            $timeout.flush();

            // now it executes the ng-click bound function and we're good
            console.log(angular.mock.dump($scope));
            expect($scope.lastEvent).toBe('down');
            expect($scope.pageX).toBe(100);
            expect($scope.pageY).toBe(100);
        });

        it('should up the mouse!', function() {
            $timeout(function() {
                element.triggerHandler({
                    pageX: 100,
                    pageY: 100,
                    type: 'mouseup'
                });
            }, 100);
            $timeout.flush();

            // now it executes the ng-click bound function and we're good
            console.log(angular.mock.dump($scope));
            expect($scope.lastEvent).toBe('up');
            expect($scope.pageX).toBe(100);
            expect($scope.pageY).toBe(100);
        });
    });
}());

