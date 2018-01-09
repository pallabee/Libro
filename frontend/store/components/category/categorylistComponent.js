(function() {
  "use strict";
   var module = angular.module('app');

  function getCategoryList($http){
    return $http.get('/productcatalog/categories')
                .then(function(response){
                  return response.data;
                });
  }
  function controller($http) {
      var model = this;
      model.categoryList ={};
      model.message = 'List of categories';
      model.$onInit = function(){
         getCategoryList($http).then(function(categoryList){
        model.categoryList= categoryList;
        //console.log(model.categoryList);
      });
      }
    }

  module.component('displayCategories', {
    templateUrl: "store/components/category/categorylistComponent.html",
    controllerAs: "model",
    controller: ["$http",controller]
  });


}());
