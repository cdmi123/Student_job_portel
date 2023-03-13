var express = require('express');
var course1 = require('../model/course');
var bodyParser = require('body-parser');
var stu_details = require('../model/student_details');

var router = express.Router();
var ls = require('local-storage');

/* GET home page. */
router.get('/', async function(req, res, next) {

    var course_data = await course1.find();

    res.render('index',{users:course_data});
});


router.post('/', function(req,res){

    stu_details.create(req.body);

    res.redirect('/');

})


module.exports = router;
