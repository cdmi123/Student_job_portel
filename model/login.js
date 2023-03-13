const mongoose = require('mongoose');

/* Student Details */

const login = new mongoose.Schema({

    email: { type: String},
    password: { type: String},

  });

  const login_model = mongoose.model('admin', login);

  module.exports = login_model;