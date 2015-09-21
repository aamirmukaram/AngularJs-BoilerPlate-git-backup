describe("appName", function() {

    beforeEach(module('appName'));

    describe("appNameCtrl", function() {

        var scope;
        // load the controller's module
        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            $controller("appNameCtrl", {
                $scope: scope
            });
        }));
        it("should show the value of variable", function() {
            expect(scope.welcomeText).toBe('Hello World');
        });
    });
});