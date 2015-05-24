(function() {
    'use strict';
    describe('da clicker!', function() {
        var element;

        beforeEach(module('myApp'));
        it('should click!', inject(function($timeout, $compile, $rootScope) {
            var $scope = $rootScope.$new();
            // we have to compile and execute compile fn
            // to interpolate the directive
            element = $compile(angular.element('<clicker>Button</clicker>'))($scope);
            // the above broken down, we create an element with angular.element, then
            // we call the $compile function service to compile it for interpolation,
            // which returns a linking function. We then execute the linking function
            // passing it the scope to evaluate.
            expect(element).toBeDefined();

            // trigger a click event on the button of the directive
            // this hurts - it does work, but...
            // I had to find the button element in the compiled element
            // and then trigger its click handler manually
            // and do it in a timeout function
            $timeout(function() {
                // this doesn't work as it seems the event doesn't get propagated
                //angular.element(element).triggerHandler('click');

                // nor does the naive 'let's try the element directly' angle
                //element.triggerHandler('click');

                // ow, this hurts! but it works (the element has children (one)
                // and that one element child is a button, so get it
                //angular.element(element[0].children[0]).triggerHandler('click');

                // but, persistence pays off
                // we can search for an element and then trigger it
                element.find('button').triggerHandler('click');
                // muuuch better
                //
            }, 100); // the timeout is a mocked one, so we simulate time marching on
            $timeout.flush();
            // now it executes the ng-click bound function and we're good
            expect($scope.data).toBe('boo!');
        }));
    });
}());

