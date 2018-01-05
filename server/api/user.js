require('babel-loader');
var Express = require('express')
const router = Express.Router();
var User = require('../../model/user')
var db = require('./apiServer')
// import { responseClient, md5, MD5_SUFFIX } from '../util'

router.get('/getUsers', (req, res) => {
    // let skip = (req.query.pageNum - 1) < 0 ? 0 : (req.query.pageNum - 1) * 10;
    // let responseData = {
    //     total: 0,
    //     list: []
    // };
    // User.count()
    //     .then(count => {
    //         responseData.total = count;
    //         User.find(null, '_id username type password', { skip: skip, limit: 10 })
    //             .then((result) => {
    //                 debugger;
    //                 responseData.list = result;
    //                 // responseClient(res, 200, 0, '', responseData)
    //             })
    //             .catch(err => {
    //                 // responseClient(res);
    //             })
    //     });

    // db.collection('User').find().toArray(function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     // res.send(result);
    // });
    User.count(null,function(result){
        console.log(result);
        res.send(result);
    })

    // let responseData = {
    //     total: 0,
    //     list: []
    // };
    // User.count()
    //     .then(count=>{
    //         User.find().then((result)=>{
    //             responseData.list = result;
    //         })
    //     })
});

module.exports = router;