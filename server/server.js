/**
 * Created by admin on 09/10/2016.
 */
import express from 'express'
import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'
import mongoose from 'mongoose'
import path from 'path'
import bodyParser from 'body-parser'
import morgan from 'morgan'

import api from './routes'

const app = express();
const port = (process.env.PORT || 3000);
const devPort = 3001;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/demo-db');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('DB connected!');
});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Request-Headers", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/', express.static(path.join(__dirname, './../public')));
app.use('/api/', api);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    console.dir(err);
    res.status(err.status || 500);
    if(err.status === 500) {
        console.error(err.stack);
        res.json({error: 'Internal Server Error'});
    }
    else if(err.status === 404) {
        res.render('error');    //render error page
    } else {
        res.json({error: err.message})
    }
});

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});

if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');

    const config = require('../webpack.dev.config');
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}
