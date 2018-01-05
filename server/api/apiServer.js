/**
 * api请求server
 *
 * 0：成功
 * 1：数据不合法
 * 2：客户端数据错误
 * 3：后端错误
 */
var Express = require('express')
var config = require('../../config/server.config.js')
var bodyParser = require('body-parser')
var mongoose = require( 'mongoose')
var cookieParser = require( 'cookie-parser')
// var session = require( 'express-session')

const port = config.apiPort;

const app = new Express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser('express_react_cookie'));
// app.use(session({
//     secret:'express_react_cookie',
//     resave: true,
//     saveUninitialized:true,
//     cookie: {maxAge: 60 * 1000 * 30}//过期时间
// }));


//展示页面路由
// app.use('/', require('./main'));
//管理页面路由
app.use('/', require('./user'));
app.use('/user', require('./user'));

mongoose.Promise = require('bluebird');
mongoose.createConnection(`mongodb://${config.dbHost}:${config.dbPort}/todoapp`, function (err) {
    if (err) {
        console.log(err, "数据库连接失败");
        return;
    }
    console.log('数据库连接成功');

    app.listen(port, function (err) {
        if (err) {
            console.error('err:', err);
        } else {
            console.info(`===> api server is running at ${config.apiHost}:${config.apiPort}`)
        }
    });
});
var db = require('mongoskin').db('mongodb://localhost:27017/todoapp');
module.exports=db;
// exports.db = db;