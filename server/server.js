var path = require('path')
var Express  = require( 'express')
var favicon  = require( 'serve-favicon')
var httpProxy  = require( 'http-proxy')
var compression  = require( 'compression')
var connectHistoryApiFallback = require('connect-history-api-fallback')
var config  = require( '../config/server.config.js')

const app = new Express();
const port = config.port;

app.use('/api',(req,res)=>{
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs'); 
    app.engine('html', require('ejs').renderFile);
    console.log("api");
    proxy.web(req,res,{target:targetUrl});
    
});


app.use('/', connectHistoryApiFallback());
app.use('/',Express.static(path.join(__dirname,"..",'build')));
app.use('/',Express.static(path.join(__dirname,"..",'static')));


const targetUrl = `http://${config.apiHost}:${config.apiPort}`;
// debugger;
const proxy = httpProxy.createProxyServer({
    target:targetUrl
});

app.use(compression());
// app.use(favicon(path.join(__dirname,'..','static','favicon.ico')));



//热更新
if(process.env.NODE_EVN!=='production'){
    const Webpack = require('webpack');
    const WebpackDevMiddleware = require('webpack-dev-middleware');
    const WebpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('../webpack.config.js');

    const compiler = Webpack(webpackConfig);

    app.use(WebpackDevMiddleware(compiler, {
        publicPath: '/',
        // publicPath : './public',
        stats: {colors: true},
        lazy: false,
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        },
    }));
    app.use(WebpackHotMiddleware(compiler));

    // const webpackConfig = require("../webpack.test.js");
    // const compiler = Webpack(webpackConfig);
    // app.use(WebpackDevMiddleware(compiler))
}

app.listen(port,(err)=>{
    if(err){
        console.error(err)
    }else{
        console.log(`===>open http://${config.host}:${config.port} in a browser to view the app`);
    }
});