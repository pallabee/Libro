(function() {
  "use strict";
var module = angular.module('app');

  function getProductList($http){
    return $http.get("store/components/product/productlist.json")
                .then(function(response){
                  return response.data;
                });
  }
  function controller($http) {
      var model = this;
      model.productList ={};
      model.message = 'List of Products';
      model.$onInit = function(){
         getProductList($http).then(function(productList){
        model.productList= productList;
        console.log(model.productList);
      });
      }


    }

  module.component('displayProducts', {
    templateUrl: "store/components/product/productComponent.html",
    controllerAs: "model",
    controller: ["$http",controller]
  });


}());
