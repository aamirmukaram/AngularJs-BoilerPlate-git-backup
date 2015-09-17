// on routes that end in /students
// ----------------------------------------------------
router.route('/students')

// create a student (accessed at POST http://localhost:8080/api/students)
.post(function(req, res) {

    var name = req.body.name;
    var address = req.body.address;
    var email = req.body.email;
    var course_id = req.body.course_id;



    var student = Student.build({
        name: name,
        address: address,
        email: email,
        course_id: course_id
    });

    student.add(function(success) {
            Fee.build({
                student_id: success.dataValues.id
            }).save().then(onSuccess).catch(onError);
            res.json({
                message: 'Student created!'
            });
        },
        function(err) {
            res.send(err);
        });
})

// get all the students (accessed at GET http://localhost:8080/api/students)
.get(function(req, res) {
    var student = Student.build();

    student.retrieveAll(function(students) {
        if (students) {
            res.json(students);
        } else {
            res.json(students);
        }
    }, function(error) {
        res.send("Student not found");
    });
});


// on routes that end in /students/:student_id
// ----------------------------------------------------
router.route('/students/:student_id')

// update a student (accessed at PUT http://localhost:8080/api/students/:student_id)
.put(function(req, res) {
    var student = Student.build();
    var name = req.body.name;
    var address = req.body.address;
    var email = req.body.email;
    var course_id = req.body.course_id;


    var student = Student.build({
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        course_id: req.body.course_id
    });


    student.updateById(req.params.student_id, function(success) {
        console.log(success);
        if (success) {
            res.json({
                message: 'Student updated!'
            });
        } else {
            res.send(401, "Student not found");
        }
    }, function(error) {
        res.send("Student not found");
    });
})

// get a student by id(accessed at GET http://localhost:8080/api/students/:student_id)
.get(function(req, res) {
    var student = Student.build();

    student.retrieveById(req.params.student_id, function(students) {
        if (students) {
            res.json(students);
        } else {
            res.send("Student not found");
        }
    }, function(error) {
        res.send("Student not found");
    });
})

// delete a Student by id (accessed at DELETE http://localhost:8080/api/student/:student_id)
.delete(function(req, res) {
    var student = Student.build();

    student.removeById(req.params.student_id, function(students) {
        if (student) {
            res.json({
                message: 'Student removed!'
            });
        } else {
            res.send(401, "Student not found");
        }
    }, function(error) {
        res.send("Student not found");
    });
});