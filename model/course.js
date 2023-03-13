const mongoose = require('mongoose');

/* course Details */

const course = new mongoose.Schema({

  course: { type: String},

  });

  const course_model = mongoose.model('course', course);

  module.exports = course_model;