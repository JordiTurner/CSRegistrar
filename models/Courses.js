var mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
  courseID: [String],
  courseTimes: [String]
  });


mongoose.model('CourseTable', CourseSchema);
//Change StudentSchema?

//curl --data 'courseID=E35-100&courseTimes=M09.0' http://localhost:3000/posts