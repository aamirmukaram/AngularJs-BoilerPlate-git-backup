(function () {
    var appName = angular.module('appName', ['gulp-angular-modules']);

    appName.controller('appNameCtrl', ['$scope', function ($scope) {
        $scope.welcomeText = "Hello World";

    }]);
    appName.factory('Person', function () {
        return function Person(name) {
            this.name = name;
        };
    });

})();