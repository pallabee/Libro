const express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
const http = require('http');

const ENV = process.env.NODE_ENV || 'development';

const config = require('./config');
const productcatalogRoute = require('./backend/services/product-catalog');
const storeController = require('./controllers/store');
// const productcatalogRoute = require('./backend/services/product-catalog').productCatalogRouter;
// const getProductByCategory = require('./backend/services/product-catalog').productlist;

const app = express();
//const Backend = require('./backend');
//const Store = require('./frontend/store');

app.set('config', config);
//app.set('root', __dirname);
//app.set('views', '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'frontend')));
app.set('view engine', 'ejs');
app.set('views', __dirname+'\\views');
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
// app.get('/about', function(req, res) {
//     res.render('pages/about');
// });

//api route
app.use('/productCatalog',productcatalogRoute);
// app.use('/productCatalog',  router.get('/categories/:categoryId', function(req, res) {
//   res.render('products');
// })
// );
//console.log(storeController);
storeController.registerRoutes(app);
// app.use('/categories/:categoryId', function(req, res) {
// console.log(req.params.categoryId);
// res.send(200);
//   //res.render('products');
// })
//);
// app.get('/lick',(req,res,next)=>{
//   console.log('lick');
//   res.sendStatus(200);
//   next();
// })
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
