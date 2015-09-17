(function() {
    var studentDirectives = angular.module('studentDirectives', []);
    studentDirectives.directive('studentMenu', function() {
        return {
            restrict: 'E',
            templateUrl: '/arbisoft/school-app-angularjs/school-app/frontend/partials/students/menu-student.html'
        }
    });

})();