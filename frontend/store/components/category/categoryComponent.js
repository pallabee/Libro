(function() {
  "use strict";
  var module = angular.module('app');

  function controller($scope) {
        var model = this;

      model.$onInit = function() {
        model.category = model.value;
      }
      model.$onChanges = function() {
        model.category = model.value;
      }

      model.getProducts = function(categoryid) {
        console.log('catid'+categoryid);

        // return $http.get('/productcatalog/products')
        //   .then(function(response) {
        //     return response.data;
      }

    //  $scope.$emit("someEvent", model.qty );

    }

  module.component('viewCategory', {
    templateUrl: "store/components/category/categoryComponent.html",
    bindings: {
      value: "<"
    },
    controllerAs: "model",
     controller: ['$scope',controller]

  });


}());
