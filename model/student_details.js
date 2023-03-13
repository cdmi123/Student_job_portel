const mongoose = require('mongoose');

/* Student Details */

const Student_model = new mongoose.Mongoose.Schema({

    name: { type: String},
    surname: { type: Number},
    fathername: { type: String},
    course: { type: String},
    companyname: { type: String},
    salary: { type: Number},
    image:{type:String}

  });

  const Student_Job_Details = mongoose.model('Student_Details', Student_model);

  module.exports = Student_Job_Details;