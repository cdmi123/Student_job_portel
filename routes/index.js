var express = require('express');
var course1 = require('../model/course');
var bodyParser = require('body-parser');
var stu_details = require('../model/student_details');
const multer = require('multer');

var router = express.Router();
var ls = require('local-storage');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  var upload = multer({ storage: storage })

/* GET home page. */
router.get('/', async function(req, res, next) {

    var course_data = await course1.find();

    res.render('index',{users:course_data});
});


router.post('/', upload.single('myFile') , function(req,res){

    const file = req.file

    var obj = {
        name:req.body.name,
        surname:req.body.surname,
        fname:req.body.fname,
        course:req.body.course,
        companyname:req.body.companyname,
        salary:req.body.salary,
        myFile:req.file.originalname

    }

    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }

    stu_details.create(obj);

    res.redirect('/');

})


module.exports = router;
