(function() {
  "use strict";
  var module = angular.module('app');

  function controller($scope) {
        var model = this;

      model.$onInit = function() {
        model.product = model.value;
      }
      model.$onChanges = function() {
        model.product = model.value;
      }

      model.showDiv = function() {
        model.showhideflag = true;
        model.qty = 1;

      }
      model.addItem = function(count) {
        model.showhideflag = true;
        model.qty = count + 1;

      }
      model.removeItem = function(count) {

        model.qty = count - 1;
        if (model.qty < 1) {
          model.showhideflag = false;
        } else {
          model.showhideflag = true;
        }

      }

    //  $scope.$emit("someEvent", model.qty );

    }

  module.component('viewProduct', {
    templateUrl: "store/components/product/productComponent.html",
    bindings: {
      value: "<"
    },
    controllerAs: "model",
     controller: ['$scope',controller]
    
  });


}());
