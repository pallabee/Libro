var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/product');
var Category = require('../models/category');

router.get('/categories', function(req, res) {

  Category.findAll(function(err,result){
    //console.log('categories'+result);
    res.send(result);

  });
});
// function findProductsByCategory(categoryid){
 router.get('/api/categories/:categoryid', function(req, res) {
  console.log('hi');
  Product.findByCategory(req.params.categoryid,function(err,result){
    console.log('products'+result);
    res.send(result);
  });
});
//}
// router.get('/productList', function(req, res) {
//
//   Product.find(function(err,res){
//     res.send(res);
//   });
// });
module.exports= router;
// module.exports = {
//   productCatalogRouter: router,
//   productlist: findProductsByCategory
// };
