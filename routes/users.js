// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;



// var express = require('express');
// var router = express.Router();
// var mongojs = require('mongojs');
// var db = mongojs('mongodb://localhost:27017/todoapp', ['todos']);


var express = require('express');
var router = express.Router();

var db = require('mongoskin').db('mongodb://localhost:27017/todoapp');

router.get('/', function(req, res, next) {
  db.collection('item').find().toArray(function(err, result) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
  });
});


module.exports = router;