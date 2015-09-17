(function() {
    var studentRoutes = angular.module('studentRoutes', []);
    studentRoutes.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('students', {
                url: '/students',
                templateUrl: '/arbisoft/school-app-angularjs/school-app/frontend/partials/students/get-students.html',
                controller: 'showStudents'
            })

        .state('studentUpdate', {
            url: '/student-update/:id',
            templateUrl: '/arbisoft/school-app-angularjs/school-app/frontend/partials/students/update-student.html',
            controller: 'updateStudent'
        })

        .state('studentAdd', {
            url: '/student-add',
            templateUrl: '/arbisoft/school-app-angularjs/school-app/frontend/partials/students/add-student.html',
            controller: 'addStudent'


        })

        .state('studentFee', {
            url: '/student-fee',
            templateUrl: '/arbisoft/school-app-angularjs/school-app/frontend/partials/students/get-fees.html',
            controller: 'studentFee'
        })

        .state('feeUpdate', {
            url: '/update-fee/:id',
            templateUrl: '/arbisoft/school-app-angularjs/school-app/frontend/partials/students/update-fee.html',
            controller: 'updateFee'
        })



        ;

    });
})();