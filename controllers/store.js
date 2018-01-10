var ProductCatalog = require('../backend/services/product-catalog');
var ProductModel = require('../backend/models/product');

module.exports={
      registerRoutes:function(app)
      {
          // app.get('/productcatalog/categories/:categoryid',this.products);
          app.get('/:categoryid',this.products);
      },
      products:function(req,res,next)
      {
        //console.log('mantu');
        //var result = "product1";
      //  res.send(result);
        //res.render('pages/products',{name:'mantu'});
        ProductModel.findByCategory(req.params.categoryid,function(err,result){
          //console.log('products'+result);
          //var result = "product1";
          if(err)
          {
            console.log('err'+err);
            return next(err);

          }
          else {
            //  console.log('res'+result);
            res.render('pages/products',{products:result});
          }

        });
      }
}
