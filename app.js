const express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
const http = require('http');

const ENV = process.env.NODE_ENV || 'development';

const config = require('./config');
const app = express();
//const Backend = require('./backend');
//const Store = require('./frontend/store');

app.set('config', config);
//app.set('root', __dirname);
app.set('views', path.join(__dirname));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'frontend')));
app.set('view engine', 'ejs');
app.set('env', ENV);

var db = require('./config/db');
db.connect(app);

//let backend = new Backend();

//let store = new Store(config, backend, app);
var router = express.Router();
/* GET home page. */

app.use('/', router.get('/', function(req, res) {
  res.render('index');
})
);
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
let server;

server = http.createServer(app);
server.listen(config.port || 3001,() => {

console.log('Server is running at ',config.baseUrl);
});

module.exports = app;
