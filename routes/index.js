var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express'}); this is the old line
  res.render('index.html');
});

module.exports = router;