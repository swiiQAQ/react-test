require('babel-loader');
var Express = require('express')
const router = Express.Router();
var User = require('../../model/user')
// import { responseClient, md5, MD5_SUFFIX } from '../util'

router.get('/getUsers', (req, res) => {
    let skip = (req.query.pageNum - 1) < 0 ? 0 : (req.query.pageNum - 1) * 10;
    let responseData = {
        total: 0,
        list: []
    };
    User.count()
        .then(count => {
            responseData.total = count;
            User.find(null, '_id username type password', { skip: skip, limit: 10 })
                .then((result) => {
                    debugger;
                    responseData.list = result;
                    // responseClient(res, 200, 0, '', responseData)
                })
                .catch(err => {
                    // responseClient(res);
                })
        });
});
