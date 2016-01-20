var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var StudentTable = mongoose.model('StudentTable');
var CourseTable = mongoose.model('CourseTable');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');


  //Students
  
});
router.get('/students', function(req, res, next) {
  StudentTable.find(function(err, students){
    if(err){
      return next(err);
    }
    res.json(students);
  });
});

router.post('/students', function(req, res, next) {
  var student = new StudentTable(req.body);
  student.save(function(err, student){
    if(err) {
      return next(err);
    }
    res.json(student);
  });
});


router.delete('/students', function(req, res) {
  StudentTable.remove(function(err, students){
    if(err){
      return next(err);
    }
    res.json("deleted all students!");
  });
});


router.param('student', function(req, res, next, id) {
  var query = StudentTable.findById(id);
  query.exec(function (err, student){
    if (err) { return next(err); }
    if (!student) { return next(new Error("can't find student")); }
    req.student = student;
    return next();
  });
});

router.get('/students/:student', function(req, res) {
    res.json(req.student);
  });





//Courses
router.get('/courses', function(req, res, next) {
  CourseTable.find(function(err, courses){
    if(err){
      return next(err);
    }
    res.json(courses);
  });
});

router.post('/courses', function(req, res, next) {
  var course = new CourseTable(req.body);
  course.save(function(err, course){
    if(err) {
      return next(err);
    }
    res.json(course);
  });
});


router.delete('/courses', function(req, res) {
  CourseTable.remove(function(err, courses){
    if(err){
      return next(err);
    }
    res.json("deleted all courses!");
  });
});


router.param('course', function(req, res, next, id) {
  var query = CourseTable.findById(id);
  query.exec(function (err, course){
    if (err) { return next(err); }
    if (!course) { return next(new Error("can't find course")); }
    req.course = course;
    return next();
  });
});

router.get('/courses/:course', function(req, res) {
    res.json(req.course);
  });






module.exports = router;
