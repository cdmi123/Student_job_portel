var express = require('express');
var ls = require('local-storage');
var router = express.Router();
var admin = require('../model/login');
var course = require('../model/course');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var id = ls.get('admin_id');

  if(id!="")
  {
      res.redirect('cdmi.job/dashboard');
  }
  else
  {
      res.render('login');
  }

});

router.get('/dashboard', async function(req, res, next) {
  
  var id = ls.get('admin_id');

    if(id=="")
    {
        res.redirect('/cdmi.job');
    }
    else
    {
        res.render('dashboard');
    }

});


router.post('/', async function(req, res, next) {

var user = req.body.email;
var password = req.body.password;

  var data = await admin.find({email:user}&&{password:password});

      if(data.length>0)
      {
          ls('admin_id',data[0]._id);
          res.redirect('/cdmi.job/dashboard');
      }
});

router.post('/add_course', async function(req, res, next) {
  
  course.create(req.body);

  res.redirect('dashboard');

});

module.exports = router;
