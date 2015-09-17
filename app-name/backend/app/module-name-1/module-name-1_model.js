module.exports = function(DataTypes) {

    // STUDENT MODEL
// =============================================================================
    Student = sequelize.define('students', {
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        email: DataTypes.STRING,
        course_id: DataTypes.STRING
    }, {
        instanceMethods: {
            retrieveAll: function(onSuccess, onError) {
                Student.findAll({
                    raw: true
                }).then(onSuccess).catch(onError);
            },
            retrieveById: function(student_id, onSuccess, onError) {
                Student.find({
                    where: {
                        id: student_id
                    }
                }, {
                    raw: true
                }).then(onSuccess).catch(onError);
            },
            add: function(onSuccess, onError) {
                var name = this.name;
                var address = this.address;
                var email = this.email;
                var course_id = this.course_id;

                Student.build({
                    name: name,
                    address: address,
                    email: email,
                    course_id: course_id
                }).save().then(onSuccess).catch(onError);
            },
            updateById: function(student_id, onSuccess, onError) {
                var student_id = student_id;
                var name = this.name;
                var address = this.address;
                var email = this.email;
                var course_id = this.course_id;

                Student.update({
                    name: name,
                    address: address,
                    email: email,
                    course_id: course_id
                }, {
                    where: {
                        id: student_id
                    }
                }).then(onSuccess).catch(onError);
            },
            removeById: function(student_id, onSuccess, onError) {
                Student.destroy({
                    where: {
                        id: student_id
                    }
                }).then(onSuccess).catch(onError);
            }
        }
    });


}



