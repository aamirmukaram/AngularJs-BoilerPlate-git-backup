(function() {

    var studentFilters = angular.module("studentFilters", []);
    // To declare a filter we pass in two parameters to app.filter

    // The first parameter is the name of the filter 
    // second is a function that will return another function that does the actual work of the filter


    studentFilters.filter('idFilter', function() {
        return function(items, word) {
            var filtered = [];

            if (typeof(items) != "undefined" && typeof(word) != "undefined") {
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    if (item.hasOwnProperty('student_id')) {
                        if (item.student_id == word) {
                            filtered.push(item);
                        }
                    } else {
                        if (item.id == word) {
                            filtered.push(item);
                        }
                    }


                }
                return filtered;

            } else {
                return items;

            }

        };
    });

})();