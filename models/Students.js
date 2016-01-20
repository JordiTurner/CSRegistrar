var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  sID: { type: Number, min: 400000, max: 500000 },
  csCourses: [String],
  Courses: [String]
  });


mongoose.model('StudentTable', StudentSchema);
