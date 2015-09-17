(function() {
    var studentServices = angular.module('studentServices', []);
    studentServices.factory('Student', function($resource) {
        return $resource('http://localhost:8085/api/students/:id', null, {
            'update': {
                method: 'PUT'
            }
        });
    });
    studentServices.factory('Fee', function($resource) {
        return $resource('http://localhost:8085/api/fees/:id', null, {
            'update': {
                method: 'PUT'
            }
        });
    });
})();