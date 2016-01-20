  (function () {
  angular.module('flapperNews', ['ui.router'])
  .config([
      '$stateProvider',
      '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {
          //resolve ensures that any time home is entered, we always load all posts before state finishes loading
          $stateProvider
              .state('visual', {
                  url: '/visual',
                  templateUrl: '/visual.html',
                  controller: 'MainCtrl',
                  resolve: {
                      studentPromise: ['students', function (students) {
                              return students.getAll();
                    }],
                      coursePromise: ['courses', function (courses) {
                              return courses.getAll();
                    }]
                  }
              })
              .state('insert', {
                url: '/insert',
                templateUrl: '/insert.html',
                controller: 'MainCtrl',
                resolve: {
                      studentPromise: ['students', function (students) {
                              return students.getAll();
                    }],
                      coursePromise: ['courses', function (courses) {
                              return courses.getAll();
                    }]
                  }
              })
              .state('clear', {
                url: '/clear',
                templateUrl: '/clear.html',
                controller: 'MainCtrl',
                resolve: {
                      studentPromise: ['students', function (students) {
                              return students.getAll();
                    }],
                      coursePromise: ['courses', function (courses) {
                              return courses.getAll();
                    }]
                  }
              })
              .state('home', {
                url: '/home',
                templateUrl: '/home.html',
                controller: 'MainCtrl',
                resolve: {
                      studentPromise: ['students', function (students) {
                              return students.getAll();
                    }],
                      coursePromise: ['courses', function (courses) {
                              return courses.getAll();
                    }]
                  }
              });
      $urlRouterProvider.otherwise('home');
  }])

//most of the code is here!
.controller('MainCtrl', ['$scope', 'students', 'courses', '$rootScope',
  function ($scope, students, courses, $rootScope) {
    //Setup variables
    $scope.students = students.students;
    $scope.courses = courses.courses;
    $rootScope.StudentTable = students;
    $rootScope.CourseTable = courses;
    $rootScope.Filter1Legend = 'undefined';
    $rootScope.Filter2Legend = 'undefined';
    $rootScope.CourseOrStudentsList = "";
    $rootScope.CourseStudentsList = "";
    $rootScope.OutputTitle = "";
    $rootScope.student = "";


    $scope.timeItems = [
      {name: '8:00', id: '8'},
      {name: '8:30', id: '8H'},
      {name: '9:00', id: '9'},
      {name: '9:30', id: '9H'},
      {name: '10:00', id: '10'},
      {name: '10:30', id: '10H'},
      {name: '11:00', id: '11'},
      {name: '11:30', id: '11H'},
      {name: '12:00', id: '12'},
      {name: '12:30', id: '12H'},
      {name: '13:00', id: '13'},
      {name: '13:30', id: '13H'},
      {name: '14:00', id: '14'},
      {name: '14:30', id: '14H'},
      {name: '15:00', id: '15'},
      {name: '15:30', id: '15H'},
      {name: '16:00', id: '16'},
      {name: '16:30', id: '16H'},
      {name: '17:00', id: '17'},
      {name: '17:30', id: '17H'},
      {name: '18:00', id: '18'},
      {name: '18:30', id: '18H'}
    ];

    //Adds students to the database
    $scope.addManyStudents = function (InputNotExample, InputStudents) {
      
      //If input is selected
      if (InputNotExample == true){
        var MassInputText = InputStudents;
      }
      //If the example list is used
      else if (InputNotExample == false){
        var MassInputText = "ID400001~ClassE37-100,ClassE37-200,ClassE37-3111,ClassE37-400N,ClassL33-100~131-CS,132-CS,330S;"+
        "ID400002~ClassE37-100,ClassL24-100,ClassE35-200,ClassF20-200,ClassF20-400N~131-CS,330S-CS;"+
        "ID400003~ClassE35-100,ClassE35-200,ClassL33-100,ClassL33-200,ClassL33-3111~131-CS,240-CS;"+
        "ID400004~ClassE35-3111,ClassE35-400N,ClassL33-100,ClassL33-200,ClassL33-3111~131-CS,132-CS;"+
        "ID400005~ClassL24-100,ClassL24-200,ClassL24-3111,ClassL24-400N,Class~131-CS,132-CS,330S;"+
        "ID400006~ClassE35-100,ClassE35-3111,ClassL33-100,ClassL33-200,ClassL33-3111~131-CS,330S-CS;"+
        "ID400007~ClassE35-100,ClassE35-400N,ClassL33-100,ClassL33-200,ClassL33-3111~131-CS,240-CS;"+
        "ID400008~ClassE35-200,ClassE35-3111,ClassL33-100,ClassL33-200,ClassL33-3111~131-CS,132-CS;"+
        "ID400009~ClassE35-100,ClassE35-200,ClassE35-3111,ClassE35-400N,ClassF20-100~131-CS,132-CS,330S;"+
        "ID400010~ClassE35-200,ClassE35-400N,ClassL33-100,ClassL33-400N,ClassL33-3111~131-CS,330S-CS;"+
        "ID400011~ClassL24-100,ClassL24-200,ClassL24-3111,ClassF20-100,ClassF20-200~131-CS,240-CS;"+
        "ID400012~ClassL24-100,ClassL24-200,ClassL24-400N,ClassF20-100,ClassF20-400N~131-CS,132-CS;"+
        "ID400013~ClassF20-100,ClassF20-200,ClassF20-3111,ClassF20-400N,ClassL24-400N~131-CS,132-CS,330S;"+
        "ID400014~ClassL24-100,ClassL24-3111,ClassL24-400N,ClassF20-3111,ClassF20-400N~131-CS,330S-CS;"+
        "ID400015~ClassL24-200,ClassL24-3111,ClassL24-400N,ClassF20-200,ClassF20-400N~131-CS,240-CS;"+
        "ID400016~ClassL24-200,ClassL24-3111,ClassF20-100,ClassF20-400N,ClassF20-3111~131-CS,132-CS;"+
        "ID400017~ClassL33-100,ClassL33-200,ClassL33-3111,ClassL33-400N,Class~131-CS,132-CS,330S;"+
        "ID400018~ClassL24-200,ClassL24-400N,ClassF20-100,ClassF20-200,ClassF20-3111~131-CS,330S-CS;"+
        "ID400019~ClassE37-100,ClassE37-200,ClassF20-200,ClassF20-400N,ClassL33-100~131-CS,240-CS;"+
        "ID400020~ClassE37-3111,ClassE37-400N,ClassF20-200,ClassF20-400N,ClassL33-100~131-CS,132-CS;"+
        "ID400021~ClassE37-3111,ClassE37-400N,ClassF20-200,ClassF20-400N,ClassL33-100~247-CS,347-CS;";
      }

      
      //regexs the string into readable data
      var StudentInfoList = MassInputText.split(";");
      var CreatesID = '';
      var CreatesCourses = '';
      var CreatescsCourses = '';
      for (i in StudentInfoList){
        CreatesID = '';
        CreatesCourses = '';
        CreatescsCourses = '';
        var StudentEntry = StudentInfoList[i]
        CreatesID = StudentEntry.match(/\d{6}/g); //matches "XXXXXX"
        IntCreatesID = parseInt(CreatesID);
        CreatesCourses = StudentEntry.match(/\w\d{2}-\w{3,}/g); //matches "deptnum-coursenum"
        var CreatescsCourses = StudentEntry.match(/\d{3,}\w?(?=-CS)/g); //matches "coursenum"\
        //inserts it into MongoDB table
        students.create({ 
            sID: IntCreatesID,
            Courses: CreatesCourses,
            csCourses: CreatescsCourses
        });      
      }
    };

    //Adds courses to the database
    $scope.addCourses = function (InputNotExample, InputCourses) {
      
      if (InputNotExample == true){
        var MassCoursesInput = InputCourses;
      }
      else if (InputNotExample == false){

        //E37 is 2 hours, MWF
        //L24 is 1 hours, MTWRF
        //E35 is 1.5 hours MW
        //F20 is 5 hours, M,T,W,R
        //L33 is 3 hours TR
        var MassCoursesInput = "E37-100~M09.0,M09.5,W09.0,W09.5,F09.0,F09.5,M10.0,M10.5,W10.0,W10.5,F10.0,F10.5;"+
        "E37-200~M11.0,M11.5,W11.0,W11.5,F11.0,F11.5,M12.0,M12.5,W12.0,W12.5,F12.0,F12.5;"+
        "E37-3111~M13.0,M13.5,W13.0,W13.5,F13.0,F13.5,M14.0,M14.5,W14.0,W14.5,F14.0,F14.5;"+
        "E37-400N~M15.0,M15.5,W15.0,W15.5,F15.0,F15.5,M16.0,M16.5,W16.0,W16.5,F16.0,F16.5;"+
        "L24-100~M08.0,M08.5,T08.0,T08.5,W08.0,W08.5,R08.0,R08.5,F08.0,F08.5;"+
        "L24-200~M09.0,M09.5,T09.0,T09.5,W09.0,W09.5,R09.0,R09.5,F09.0,F09.5;"+
        "L24-3111~M10.0,M10.5,T10.0,T10.5,W10.0,W10.5,R10.0,R10.5,F10.0,F10.5;"+
        "L24-400N~M11.0,M11.5,T11.0,T11.5,W11.0,W11.5,R11.0,R11.5,F11.0,F11.5;"+
        "E35-100~M10.0,M10.5,M11.0,W10.0,W10.5,W11.0;"+
        "E35-200~M11.5,M12.0,M12.5,W11.5,W12.0,W12.5;"+
        "E35-3111~M13.0,M13.5,M14.0,W13.0,W13.5,W14.0;"+
        "E35-400N~M14.5,M15.0,M15.5,W14.5,W15.0,W15.5;"+
        "F20-100~M12.0,M12.5,M13.0,M13.5,M14.0,M14.5,M15.0,M15.5,M16.0,M16.5;"+
        "F20-200~T12.0,T12.5,T13.0,T13.5,T14.0,T14.5,T15.0,T15.5,T16.0,T16.5;"+
        "F20-3111~W12.0,W12.5,W13.0,W13.5,W14.0,W14.5,W15.0,W15.5,W16.0,W16.5;"+
        "F20-400N~R12.0,R12.5,R13.0,R13.5,R14.0,R14.5,R15.0,R15.5,R16.0,R16.5;"+
        "L33-100~T10.0,T10.5,T08.0,T08.5,T09.0,T09.5,R10.0,R10.5,R08.0,R08.5,R09.0,R09.5;"+
        "L33-200~T10.0,T10.5,T11.0,T11.5,T12.0,T12.5,R10.0,R10.5,R11.0,R11.5,R12.0,R12.5;"+
        "L33-3111~T13.0,T13.5,T14.0,T14.5,T15.0,T15.5,R13.0,R13.5,R14.0,R14.5,R15.0,R15.5;"+
        "L33-400N~T16.0,T16.5,T17.0,T17.5,T18.0,T18.5,R16.0,R16.5,R17.0,R17.5,R18.0,R18.5"; 
      }

      //creates readable data from string using regex
      var CoursesInfoList = MassCoursesInput.split(";");
      var CreatesCourseID = '';
      var CreatesCourseTimes = '';
      for (i in CoursesInfoList){
        CreatesCourseID = '';
        CreatesCourseTimes = '';
        var CourseEntry = CoursesInfoList[i]
        CreatesCourseID = CourseEntry.match(/\w\d{2}-\w*/g); //matches "deptnum-coursenum"
        CreatesCourseTimes = CourseEntry.match(/\w\d{2}\.\d/g); //matches DayAbbrv+"XX.X"

        //inserts it into MongoDB table
        courses.create({ 
            courseID: CreatesCourseID,
            courseTimes: CreatesCourseTimes
        });   
      }
    };

    //Empty entire StudentTable
    $scope.deleteStudents = function () {
      students.remove();
      alert("All student information has been deleted");
    };

    //Empty entire CourseTable
    $scope.deleteCourses = function () {
      courses.remove();
      alert("All course information has been deleted");
    };

    //check availability for course
    $scope.CourseOutput = function(SelectedCourse, Filter1, Filter2)  {
      if(!SelectedCourse || SelectedCourse === '') { return; 
      }

      $rootScope.PercentageUnavailableTitle = "Percentage of unavailable students:";
      $rootScope.UnavailableIDsTitle = "Unavailable student IDs:"
      $rootScope.CourseOrStudentsList = "Registered Courses List:"
      $rootScope.CellInfoSelectedTimeslot = "";
      $rootScope.CellInfoPercentUnavailable = "";
      $rootScope.CellInfoUnavailableStudents = "";
      $rootScope.OutputTitle = " for " +  SelectedCourse;
      var Outputstudents = $scope.students;
      var CoursesInformationList = $scope.courses;
      var NumberofStudents = 0;
      var StudentsInCourseList = [];

      //Creates a matrix of blanks, size of the table (hours only)
      //Creates a matrix of blanks, size of the table (half hours only)
      //Creates a matrix of 0s, size of the table (hours only)
      //Creates a matrix of 0s, size of the table (half hours only)
      var HourInfoArray = [];
      var HalfHourInfoArray = [];
      var TimeMatrix = [];
      var TimeMatrixHalf = [];
      for(var i=0; i<5; i++) {
        HourInfoArray[i] = [];
        HalfHourInfoArray[i] = [];
        TimeMatrix[i] = [];
        TimeMatrixHalf[i] = [];
        for(var j=7; j<18; j++) {
          HourInfoArray[i][j] = [];
          HalfHourInfoArray[i][j] = [];
          TimeMatrix[i][j] = 0;
          TimeMatrixHalf[i][j] = 0;
        }
      }

      //Go through each student
      for (var student in Outputstudents){
        //Get students interested in course
        var CSCourseJSON = Outputstudents[student].csCourses;
        var InterestedStudent = false;
        for (var course in CSCourseJSON){
          if (CSCourseJSON[course] == SelectedCourse){
            InterestedStudent = true;
          }
        }
        //For each student interested in course
        if (InterestedStudent == true){
          NumberofStudents += 1;
          StudentsInCourseList.push(Outputstudents[student].sID);
          var NotAvailableTimes = [];
          var BusyTimes = [];
          //get their registered courses
          var CoursesTaking = Outputstudents[student].Courses;
          var allCourseIDs = CoursesInformationList;
          for (var CourseTaking in CoursesTaking){
            var CourseFound = false;
            for (var CourseID in allCourseIDs){
              var specificCourse = allCourseIDs[CourseID]
              //get their unavaiable times
              if (CoursesTaking[CourseTaking] == specificCourse.courseID){
                CourseFound = true;
                var ArrayCourseTimes = specificCourse.courseTimes;
                for (var timeslot in ArrayCourseTimes){
                  BusyTimes.push(ArrayCourseTimes[timeslot]);
                }
              }
            }
            if (CourseFound == false){
              alert.log("For student " + Outputstudents[student].sID + ", Course " + CoursesTaking[CourseTaking] + " not found in Courses Database");
            }
          }
          //Gets rid of repeats, in case the student double booked a time (overlapping classses) - doesnt double count
          NotAvailableTimes[0] = BusyTimes[0];
          for (BusyTime in BusyTimes){
            var CourseNotRepeated = true;
            for (NotAvailableTime in NotAvailableTimes){
              if (BusyTimes[BusyTime] == NotAvailableTimes[NotAvailableTime]){
                CourseNotRepeated = false;
              }
            }
            if (CourseNotRepeated == true){
              NotAvailableTimes.push(BusyTimes[BusyTime]);
            }
          }

          //increase those spots by 1 and adds the cell information to the cell array
          for (var timeslot in NotAvailableTimes){
            var weekDayIndex = 0;
            var weekDayLetter = NotAvailableTimes[timeslot].match(/[MTWRF]/g);
            if (weekDayLetter == "M"){
              weekDayIndex = 0;
            }
            else if (weekDayLetter == "T"){
              weekDayIndex = 1;
            }
            else if (weekDayLetter == "W"){
              weekDayIndex = 2;
            }
            else if (weekDayLetter == "R"){
              weekDayIndex = 3;
            }
            else if (weekDayLetter == "F"){
              weekDayIndex = 4;
            }
            var BusyHour = NotAvailableTimes[timeslot].match(/\d\d/);
            var IndexedBusyHour = parseInt(BusyHour) - 1;
            var HourOrHalf = NotAvailableTimes[timeslot].match(/\.\d/g);
            if (HourOrHalf == ".0"){
              TimeMatrix[weekDayIndex][IndexedBusyHour] += 1;
              HourInfoArray[weekDayIndex][IndexedBusyHour].push(Outputstudents[student].sID);
            }
            else if (HourOrHalf == ".5"){
              TimeMatrixHalf[weekDayIndex][IndexedBusyHour] += 1;
              HalfHourInfoArray[weekDayIndex][IndexedBusyHour].push(Outputstudents[student].sID);
            }
          }
        }
      }
      $rootScope.CourseStudentsList = StudentsInCourseList;
      $scope.NumberofStudentsinCourse = NumberofStudents;
      $scope.HourInformationArray = HourInfoArray;
      $scope.HalfHourInformationArray = HalfHourInfoArray;
      
      //if filters are used, calculates necessary math
      var Filter1Value = 0;
      var Filter2Value = 0;
      var Filter2Input = 0;
      var Filter1Input = 0;
      if (Filter1 === undefined || Filter1 == 0){
        Filter1Value = NaN;
        $rootScope.Filter1Legend = 'undefined';
      }
      else if (Filter1 != 0){
        Filter1Input = Filter1;
        $rootScope.Filter1Legend = "+"+Filter1Input+"%";
        Filter1Value = (100-Filter1Input)*NumberofStudents/100;
      }
      if (Filter2 === undefined || Filter2 == 0){
        Filter2Value = NaN;
        $rootScope.Filter2Legend = 'undefined';
      }
      else if (Filter2 != 0){
        Filter2Input = Filter2;
        $rootScope.Filter2Legend = "+"+Filter2Input+"%";
        Filter2Value = (100-Filter2Input)*NumberofStudents/100;
      }
      
      //paints cells accordingly, depending on if the filters are used
      for (var j = 8; j < 19; j++) { 
        for (var i = 1; i < 6; i++) {
          var weekdayAbrvArray = ['#M','#T','#W','#R','#F'];
          if (i==1){
            var selectedWeekday = weekdayAbrvArray[0];
          }
          else if (i==2){
            var selectedWeekday = weekdayAbrvArray[1];
          }
          else if (i==3){
            var selectedWeekday = weekdayAbrvArray[2];
          }
          else if (i==4){
            var selectedWeekday = weekdayAbrvArray[3];
          }
          else if (i==5){
            var selectedWeekday = weekdayAbrvArray[4];
          }

          if (isNaN(Filter2Value) && isNaN(Filter1Value)){
            //Worst
            if (TimeMatrix[i-1][j-1] <= NumberofStudents && TimeMatrix[i-1][j-1] > 0){
              angular.element(selectedWeekday+j).css("background", "#D3D7CF");
            }
            //Perfect
            if (TimeMatrix[i-1][j-1] == 0){
              angular.element(selectedWeekday+j).css("background", "#C5F19A");
            }
            //Worst
            if (TimeMatrixHalf[i-1][j-1] <= NumberofStudents && TimeMatrixHalf[i-1][j-1] > 0){
              angular.element(selectedWeekday+j+'H').css("background", "#D3D7CF");
            }
            //Perfect
            if (TimeMatrixHalf[i-1][j-1] == 0){
              angular.element(selectedWeekday+j+'H').css("background", "#C5F19A");
            }


          }
          else if (isNaN(Filter2Value)){
            //Worst
            if (TimeMatrix[i-1][j-1] <= NumberofStudents && TimeMatrix[i-1][j-1] > Filter1Value){
              angular.element(selectedWeekday+j).css("background", "#D3D7CF");
            }
            //Good
            if (TimeMatrix[i-1][j-1] <= Filter1Value && TimeMatrix[i-1][j-1] > 0){
              angular.element(selectedWeekday+j).css("background", "#FEF5A8");
            }
            //Perfect
            if (TimeMatrix[i-1][j-1] == 0){
              angular.element(selectedWeekday+j).css("background", "#C5F19A");
            }
            //Worst
            if (TimeMatrixHalf[i-1][j-1] <= NumberofStudents && TimeMatrixHalf[i-1][j-1] > Filter1Value){
              angular.element(selectedWeekday+j+'H').css("background", "#D3D7CF");
            }
            //Good
            if (TimeMatrixHalf[i-1][j-1] <= Filter1Value && TimeMatrixHalf[i-1][j-1] > 0){
              angular.element(selectedWeekday+j+'H').css("background", "#FEF5A8");
            }
            //Perfect
            if (TimeMatrixHalf[i-1][j-1] == 0){
              angular.element(selectedWeekday+j+'H').css("background", "#C5F19A");
            }

          }
          else if(isNaN(Filter1Value)){
            //Worst
            if (TimeMatrix[i-1][j-1] <= NumberofStudents && TimeMatrix[i-1][j-1] > Filter2Value){
              angular.element(selectedWeekday+j).css("background", "#D3D7CF");
            }
            //Okay
            if (TimeMatrix[i-1][j-1] <= Filter2Value && TimeMatrix[i-1][j-1] > 0){
              angular.element(selectedWeekday+j).css("background", "#f7bbbb");
            }
            //Perfect
            if (TimeMatrix[i-1][j-1] == 0){
              angular.element(selectedWeekday+j).css("background", "#C5F19A");
            }
            //Worst
            if (TimeMatrixHalf[i-1][j-1] <= NumberofStudents && TimeMatrixHalf[i-1][j-1] > Filter2Value){
              angular.element(selectedWeekday+j+'H').css("background", "#D3D7CF");
            }
            //Okay
            if (TimeMatrixHalf[i-1][j-1] <= Filter2Value && TimeMatrixHalf[i-1][j-1] > 0){
              angular.element(selectedWeekday+j+'H').css("background", "#f7bbbb");
            }
            //Perfect
            if (TimeMatrixHalf[i-1][j-1] == 0){
              angular.element(selectedWeekday+j+'H').css("background", "#C5F19A");
            }

          }
          else if (!isNaN(Filter2Value) && !isNaN(Filter1Value)){
            //Worst
            if (TimeMatrix[i-1][j-1] <= NumberofStudents && TimeMatrix[i-1][j-1] > Filter2Value){
              angular.element(selectedWeekday+j).css("background", "#D3D7CF");
            }
            //Okay
            if (TimeMatrix[i-1][j-1] <= Filter2Value && TimeMatrix[i-1][j-1] > Filter1Value){
              angular.element(selectedWeekday+j).css("background", "#f7bbbb");
            }
            //Good
            if (TimeMatrix[i-1][j-1] <= Filter1Value && TimeMatrix[i-1][j-1] > 0){
              angular.element(selectedWeekday+j).css("background", "#FEF5A8");
            }
            //Perfect
            if (TimeMatrix[i-1][j-1] == 0){
              angular.element(selectedWeekday+j).css("background", "#C5F19A");
            }
            //Worst
            if (TimeMatrixHalf[i-1][j-1] <= NumberofStudents && TimeMatrixHalf[i-1][j-1] > Filter2Value){
              angular.element(selectedWeekday+j+'H').css("background", "#D3D7CF");
            }
            //Okay
            if (TimeMatrixHalf[i-1][j-1] <= Filter2Value && TimeMatrixHalf[i-1][j-1] > Filter1Value){
              angular.element(selectedWeekday+j+'H').css("background", "#f7bbbb");
            }
            //Good
            if (TimeMatrixHalf[i-1][j-1] <= Filter1Value && TimeMatrixHalf[i-1][j-1] > 0){
              angular.element(selectedWeekday+j+'H').css("background", "#FEF5A8");
            }
            //Perfect
            if (TimeMatrixHalf[i-1][j-1] == 0){
              angular.element(selectedWeekday+j+'H').css("background", "#C5F19A");
            }
          }
        }
      }
    };

    //check availability for student
    $scope.StudentOutput = function(SelectedsID){
      var AllStudents = $scope.students;
      var CoursesInformationList = $scope.courses;
      $rootScope.Filter1Legend = 'undefined';
      $rootScope.Filter2Legend = 'undefined';
      $rootScope.PercentageUnavailableTitle = "";
      $rootScope.UnavailableIDsTitle = "Registered Course:"
      $rootScope.CourseOrStudentsList = "Registered Courses List:"

      if(!SelectedsID || SelectedsID === '') { return; 
      }
      $rootScope.CellInfoSelectedTimeslot = "";
      $rootScope.CellInfoPercentUnavailable = "";
      $rootScope.CellInfoUnavailableStudents = "";

      //Creates a matrix of blanks, size of the table (hours only)
      //Creates a matrix of blanks, size of the table (half hours only)
      //Creates a matrix of 0s, size of the table (hours only)
      //Creates a matrix of 0s, size of the table (half hours only)
      var HourInfoArray = [];
      var HalfHourInfoArray = [];
      var TimeMatrix = [];
      var TimeMatrixHalf = [];
      for(var i=0; i<5; i++) {
        HourInfoArray[i] = [];
        HalfHourInfoArray[i] = [];
        TimeMatrix[i] = [];
        TimeMatrixHalf[i] = [];
        for(var j=7; j<18; j++) {
          HourInfoArray[i][j] = [];
          HalfHourInfoArray[i][j] = [];
          TimeMatrix[i][j] = 0;
          TimeMatrixHalf[i][j] = 0;
        }
      }

      $rootScope.OutputTitle = " for " +  SelectedsID;
      var StudentCoursesList = [];
      var NotAvailableTimes = [];
      var BusyTimes = [];
      //get student's registered courses

      for (index in AllStudents){
        if (SelectedsID == AllStudents[index].sID){
          var studentIndex = index;
        }
      }
      var CoursesTaking = AllStudents[studentIndex].Courses;
      var allCourseIDs = CoursesInformationList;
      for (var CourseTaking in CoursesTaking){
        var CourseFound = false;
        for (var CourseID in allCourseIDs){
          var specificCourse = allCourseIDs[CourseID]
          //get their unavaiable times
          if (CoursesTaking[CourseTaking] == specificCourse.courseID){
            CourseFound = true;
            StudentCoursesList.push(CoursesTaking[CourseTaking]);
            var ArrayCourseTimes = specificCourse.courseTimes;
            BusyTimes = [];
            for (var timeslot in ArrayCourseTimes){
              BusyTimes.push(ArrayCourseTimes[timeslot]);
            }
            //increase those spots by 1 and adds the information of that timeslot to the cell
            for (var timeslot in BusyTimes){
              var weekDayIndex = 0;
              var weekDayLetter = BusyTimes[timeslot].match(/[MTWRF]/g);
              if (weekDayLetter == "M"){
                weekDayIndex = 0;
              }
              else if (weekDayLetter == "T"){
                weekDayIndex = 1;
              }
              else if (weekDayLetter == "W"){
                weekDayIndex = 2;
              }
              else if (weekDayLetter == "R"){
                weekDayIndex = 3;
              }
              else if (weekDayLetter == "F"){
                weekDayIndex = 4;
              }
              var BusyHour = BusyTimes[timeslot].match(/\d\d/);
              var IndexedBusyHour = parseInt(BusyHour) - 1;
              var HourOrHalf = BusyTimes[timeslot].match(/\.\d/g);
              if (HourOrHalf == ".0"){
                TimeMatrix[weekDayIndex][IndexedBusyHour] += 1;
                HourInfoArray[weekDayIndex][IndexedBusyHour].push(CoursesTaking[CourseTaking]);
              }
              else if (HourOrHalf == ".5"){
                TimeMatrixHalf[weekDayIndex][IndexedBusyHour] += 1;
                HalfHourInfoArray[weekDayIndex][IndexedBusyHour].push(CoursesTaking[CourseTaking]);
              }
            }  
          }
        }
        if (CourseFound == false){
          alert.log("For student " + Outputstudents[student].sID + ", Course " + CoursesTaking[CourseTaking] + " not found in Courses Database");
        }
      }
      $scope.NumberofStudentsinCourse = "";
      $rootScope.CourseStudentsList = StudentCoursesList;
      $scope.HourInformationArray = HourInfoArray;
      $scope.HalfHourInformationArray = HalfHourInfoArray;
      $rootScope.Filter1Legend = 'undefined';
      $rootScope.Filter2Legend = 'undefined';
      
      //paints each cell the appropriate color
      for (var j = 8; j < 19; j++) { 
        for (var i = 1; i < 6; i++) {
          var weekdayAbrvArray = ['#M','#T','#W','#R','#F'];
          if (i==1){
            var selectedWeekday = weekdayAbrvArray[0];
          }
          else if (i==2){
            var selectedWeekday = weekdayAbrvArray[1];
          }
          else if (i==3){
            var selectedWeekday = weekdayAbrvArray[2];
          }
          else if (i==4){
            var selectedWeekday = weekdayAbrvArray[3];
          }
          else if (i==5){
            var selectedWeekday = weekdayAbrvArray[4];
          }
          //Worst
          if (TimeMatrix[i-1][j-1] > 0){
            angular.element(selectedWeekday+j).css("background", "#D3D7CF");
          }
          //Perfect
          if (TimeMatrix[i-1][j-1] == 0){
            angular.element(selectedWeekday+j).css("background", "#C5F19A");
          }
          //Worst
          if (TimeMatrixHalf[i-1][j-1] > 0){
            angular.element(selectedWeekday+j+'H').css("background", "#D3D7CF");
          }
          //Perfect
          if (TimeMatrixHalf[i-1][j-1] == 0){
            angular.element(selectedWeekday+j+'H').css("background", "#C5F19A");
          }
        }
      }
    };

    //provides information on cell when clicked
    $scope.CellSelect = function ($event){
      //having the cell id
      var SelectedCellId = event.target.id;

      //bring up an array of all cells
      //cell id --> index of that array
      var weekDayIndex = 0;
      var weekDayWritten = "";
      var weekDayLetter = SelectedCellId.match(/[MTWRF]/g);
      if (weekDayLetter == "M"){
      weekDayIndex = 0;
      weekDayWritten = "Monday ";
      }
      else if (weekDayLetter == "T"){
      weekDayIndex = 1;
      weekDayWritten = "Tuesday ";
      }
      else if (weekDayLetter == "W"){
      weekDayIndex = 2;
      weekDayWritten = "Wednesday ";
      }
      else if (weekDayLetter == "R"){
      weekDayIndex = 3;
      weekDayWritten = "Thursday ";
      }
      else if (weekDayLetter == "F"){
      weekDayIndex = 4;
      weekDayWritten = "Friday ";
      }
      var BusyHour = SelectedCellId.match(/\d{1,}/);
      var IndexedBusyHour = parseInt(BusyHour) - 1;
      var HourOrHalf = SelectedCellId.match(/[H]/g);

      //get the information in that array[index]
      if (HourOrHalf == null){
        var HourInfoArray = $scope.HourInformationArray;
        var SelectedCellInfo = HourInfoArray[weekDayIndex][IndexedBusyHour];
        var WrittenHourOrHalf = ":00";
      }
      else if (HourOrHalf == "H"){
        var HalfHourInfoArray = $scope.HalfHourInformationArray;
        var SelectedCellInfo = HalfHourInfoArray[weekDayIndex][IndexedBusyHour];
        var WrittenHourOrHalf = ":30";
      }
      $rootScope.CellInfoSelectedTimeslot = weekDayWritten + BusyHour + WrittenHourOrHalf;
      //assures number of students in course only shows when course availability is outputted
      if ($scope.NumberofStudentsinCourse == 0){
        $rootScope.CellInfoPercentUnavailable = "";
      }
      else if ($scope.NumberofStudentsinCourse != 0){
        $rootScope.CellInfoPercentUnavailable = SelectedCellInfo.length*100/$scope.NumberofStudentsinCourse + "%";
      }
      
      $rootScope.CellInfoUnavailableStudents = SelectedCellInfo;
    };

    //creates list of courses for visual page
    var PopulateCourseListStudents = $scope.students
    if (PopulateCourseListStudents != ""){
      var CSCourseArray = [];
      var ReducedCSCourseArray = [];
      var CSCourseStudentsNumberArray = [];
      var CourseInArray = false;
      var FinalCourseList = [{courseName:"",courseStudents:""}];

      //for every student, add their cs courses to an array
      for (var student in PopulateCourseListStudents){
        var CSCourseJSON = PopulateCourseListStudents[student].csCourses;
        for (var CSCourse in CSCourseJSON){
          CSCourseArray.push(CSCourseJSON[CSCourse]); 
        }
      }
      //ensure there are no repeats, keep track of # of students
      for (var StudentCSCourse in CSCourseArray){
        CourseInArray = false;
        for (var ReducedCSCourse in ReducedCSCourseArray){
          if (ReducedCSCourseArray[ReducedCSCourse] == CSCourseArray[StudentCSCourse]){
            CourseInArray = true;
            CSCourseStudentsNumberArray[ReducedCSCourse] += 1 
          }
          if (CSCourseArray[StudentCSCourse] == ""){
            CourseInArray = true;
          }
        }
        //if no repeats, add to list
        if (CourseInArray == false){
          ReducedCSCourseArray.push(CSCourseArray[StudentCSCourse]);
          CSCourseStudentsNumberArray.push(1);
        }
      }
      for (var CSCourse in ReducedCSCourseArray){
        FinalCourseList[CSCourse]=
        {courseName: ReducedCSCourseArray[CSCourse],
        courseStudents: CSCourseStudentsNumberArray[CSCourse]}  
      }
      $rootScope.CourseList = FinalCourseList;
    }
  }])

//deals with students database
.factory('students', ['$http', function ($http) {
      var o = {
          students: []
      };
      // query the '/students' route and bind a function when request returns
     // get back a list and copy to posts object using angular.copy() - see index.ejs
      o.getAll = function () {
          return $http.get('/students')
            .success(function (data) {
              angular.copy(data, o.students);
          });
      };
      // uses router.post in index.js to post a new Student model to mongoDB
      // when $http gets success, it adds this student to the students object in local factory
      o.create = function (student) {
          return $http.post('/students', student)
            .success(function (data) {
              o.students.push(data);
          });
      };

      // grab a single student from server
      o.get = function (id) {
          return $http.get('/students/' + id)
            .then(function (res) {
              return res.data;
          });
      };


      // clear students
      o.remove = function () {
          return $http.delete('/students')
            .success(function () {
          });
      };

      return o;
  }])

//deals with courses database
.factory('courses', ['$http', function ($http) {
      var o = {
          courses: []
      };
      // query the '/courses' route and bind a function when request returns
     // get back a list and copy to posts object using angular.copy() - see index.ejs
      o.getAll = function () {
          return $http.get('/courses')
            .success(function (data) {
              angular.copy(data, o.courses);
          });
      };
      // uses router.post in index.js to post a new Course model to mongoDB
      // when $http gets success, it adds this course to the courses object in local factory
      o.create = function (course) {
          return $http.post('/courses', course)
            .success(function (data) {
              o.courses.push(data);
          });
      };

      // grab a single course from server
      o.get = function (id) {
          return $http.get('/courses/' + id)
            .then(function (res) {
              return res.data;
          });
      };


      // clear courses
      o.remove = function () {
          return $http.delete('/courses')
            .success(function () {
          });
      };

      return o;
  }]);

})();

