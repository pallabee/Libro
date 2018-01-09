(function() {
    "use strict";
    var module = angular.module('app');

    function getProductList($http) {
      return $http.get('/productcatalog/products')
        .then(function(response) {
          return response.data;
        });
    }

    function controller($http) {
      var model = this;
      model.productList = {};
      model.message = 'List of Products';
      model.$onInit = function() {
        getProductList($http).then(function(productList) {
          model.productList = productList;
          console.log(model.productList);
        });
      }
      // $scope.$on('someEvent', function(event, msg) {
      //     model.count = msg;
      //     // console.log(msg);
      //   });
      //  model.addToCart = function() {
      //
      //    console.log(model.count);
      // }
    }

      module.component('displayProducts', {
        templateUrl: "store/components/product/productlistComponent.html",
        controllerAs: "model",
        controller: ["$http", controller]
      });


    }());
