const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  FullName: String,
  ImageUrl: String,
  CourseOfStudy: String,
  DurationOfStudy: String,
  YearOfEntry: String,
  CurrentLevel: String
  // expectedYearOfGraduation: String
});

module.exports = mongoose.model('student', studentSchema, 'school');
