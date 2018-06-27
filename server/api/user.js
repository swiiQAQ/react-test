require('babel-loader');
var Express = require('express')
const router = Express.Router();
var config = require('../../config/server.config.js')
var mongoskin = require('mongoskin')

// var db = require('./apiServer')
// import { responseClient, md5, MD5_SUFFIX } from '../util'
var db = mongoskin.db(`mongodb://${config.dbHost}:${config.dbPort}/${config.dataBase}`);
router.get('/getUsers', (req, res) => {
  db.collection('user').find().toArray(function (err, result) {
    if (err) throw err;
    res.json(result);

  });
});
router.post('/insert', (req, res) => {
  var param = req.body;
  db.collection('user').insert({ 'userName': param.userName, 'password': param.password }, function(err,result) {
    if (!err) {
      res.send({ 'status': 1 });
    } else {
      res.send({ 'status': 0 });
    }
  })
})
router.post('/delete',(req,res)=>{
  var param = req.body;
  if(param.id){
      var ObjectId = mongoskin.ObjectID;
      db.collection('user').remove({'_id':ObjectId(param.id)}, function (err, result) {
          if(!err){
              res.send({'status':1});
          }else{
              res.send({'status':0});
          }
      });
  }
})
router.post('/update',(req,res)=>{
  var param = req.body;
  if(param.id){
    var ObjectId = mongoskin.ObjectID;
    db.collection('user').update({'_id':ObjectId(param.id)},{'_id':ObjectId(param.id),'userName':param.username,'password':param.password},function(err,result){
      if(!err){
        res.send({'status':1});
      }
      else{
        res.send({'status':0});
      }
    })
  }
  
})

module.exports = router;