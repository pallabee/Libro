(function() {
  "use strict";
   var module = angular.module('app');

  function getCategoryList($http){
    return $http.get("categorylist.json")
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
        console.log(model.categoryList);
      });
      }
    }

  module.component('displayCategories', {
    templateUrl: "categoryComponent.html",
    controllerAs: "model",
    controller: ["$http",controller]
  });


}());
