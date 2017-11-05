const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Student = require('../models/student');


const db = 'mongodb://LocalHost/Andela/school';
mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
  if (err) {
    console.log('Error' + err);
  }
});

router.get('/students', function (req, res) {
  console.log('Request for all students');
  Student.find({}).exec(function (err, students) {
    if (err) {
      console.log('Error getting Data')
    } else{
      res.json(students);
    }
  });
});

router.get('/students/:id', function (req, res) {
  console.log('Request for a student');
  Student.findById(req.params.id).exec(function (err, student) {
    if (err) {
      console.log('Error getting Data')
    } else{
      res.json(student);
    }
  });
});

router.post('/students', function (req, res) {
  console.log('add a new student');
  var newStudent = new Student();
  newStudent.FullName = req.body.FullName;
  newStudent.ImageUrl = req.body.ImageUrl;
  newStudent.CourseOfStudy = req.body.CourseOfStudy;
  newStudent.YearOfEntry = req.body.YearOfEntry;
  newStudent.DurationOfStudy = req.body.DurationOfStudy;
  newStudent.CurrentLevel = req.body.CurrentLevel;

  // newStudent. expectedYearOfGraduation = req.body.expectedYearOfGraduation;
  newStudent.save(function (err, insertedStudent) {
    if (err) {
      console.log('Error saving student');
    } else {
      res.json(insertedStudent);
    }
  })
});


router.put('/student/:id', function (req, res) {
  console.log('Update the data');
  Student.findByIdAndUpdate(req.params.id,
    {
      $set: {
        FullName : req.body.FullName,
        ImageUrl : req.body.ImageUrl,
        CourseOfStudy : req.body.CourseOfStudy,
        YearOfEntry : req.body.YearOfEntry,
        DurationOfStudy : req.body.DurationOfStudy,
        CurrentLevel : req.body.CurrentLevel}
    },
  {
      new: true
  },
  function (err, updatedStudent) {
    if(err) {
      res.send('Error Updating Video');
    } else {
      res.json(updatedStudent);
    }
  }
  )

});

router.delete('student/:id', function (req, res) {
  console.log('Deleting a student');
  Student.findByIdAndRemove(req.params.id, function (err, deletedStudent) {
    if (err) {
      res.send('Error Deleting Data');
    } else {
      res.json(deletedStudent);
    }
  });
});

module.exports = router;
