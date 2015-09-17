(function() {
    var studentController = angular.module('studentController', []);

    studentController.controller('showStudents', function($scope, $http, $cookies, $state, Student, Fee) {

        $scope.$parent.sideBarVisibleToggler();
        $http.defaults.headers.common['x-access-token'] = $cookies.get('token');

        //GETTING ALL THE STUDENTS AND ADDING THEM TO SCOPE
        var students = Student.query(function() {
            $scope.students = students;

        });

        $scope.deleteStudent = function(id, index) {


            swal({
                title: "Are you sure?",
                text: "You will not be able to recover this student data!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                closeOnConfirm: false
            }, function() {
                var student_id = id;

                Student.delete({
                    "id": student_id
                });

                Fee.delete({
                    "id": student_id
                });
                $scope.students.splice(index, 1);
                swal("Student Deleted", "", "success");

            });
        }
        $scope.updateStudent = function(id, index) {
            $state.go('studentUpdate', {
                id: id
            });
        }
    });
    studentController.controller("updateStudent", function($state, $stateParams, $http, $cookies, $scope, Student) {
        $http.defaults.headers.common['x-access-token'] = $cookies.get('token');
        var student = Student.get({
            id: $stateParams.id
        }, function(data) {
            $scope.courseId = data.course_id;
            $scope.student = data;
        });
        $scope.updateStudent = function() {
            Student.update({
                id: $scope.student.id
            }, $scope.student);
            $state.go('students');

        }

    });
    studentController.controller("addStudent", function($state, $http, $cookies, $scope, Student) {
        $scope.addStudent = function() {
            $http.defaults.headers.common['x-access-token'] = $cookies.get('token');
            Student.save($scope.student);
            $state.go('students')
        }


    });

    studentController.controller("studentFee", function($state, $http, $cookies, $scope, Fee) {
        $scope.$parent.sideBarVisibleToggler();
        $http.defaults.headers.common['x-access-token'] = $cookies.get('token');
        //GETTING ALL THE STUDENTS AND ADDING THEM TO SCOPE
        var fees = Fee.query(function() {
            $scope.fees = fees;

        });
        $scope.updateFee = function(id) {
            $state.go('feeUpdate', {
                id: id
            });
        }
    });


    studentController.controller("updateFee", function($state, $stateParams, $http, $cookies, $scope, Fee) {



        $http.defaults.headers.common['x-access-token'] = $cookies.get('token');
        var fee = Fee.get({
            id: $stateParams.id
        }, function(data) {
            $scope.student = data;
        });
        $scope.updateStudent = function() {
            var student = $scope.student;
            student.student_fee = $scope.student.fee;
            delete student.fee;
            Fee.update({
                id: $scope.student.student_id
            }, student);
            $state.go('studentFee');

        }

    });
})();