(function() {
  "use strict";
  var module = angular.module('app');
  var cart ={};
  cart.userid="user1";
  cart.items=[];
  function controller($scope) {
        var model = this;


      model.$onInit = function() {
        model.product = model.value;
      }
      model.$onChanges = function() {
        model.product = model.value;
      }

      model.showDiv = function(sku) {
        model.showhideflag = true;
        model.qty = 1;

        var item ={};
        item.productsku=sku;
        item.quantity=model.qty;

        if (localStorage.getItem("cart") === null) {
            cart.items.push(item);
            localStorage.setItem("cart", JSON.stringify(cart));
            console.log(cart);
        }
        else{
            var savedcart = JSON.parse(localStorage.getItem("cart"));
            savedcart.items.push(item);
            localStorage.setItem("cart", JSON.stringify(savedcart));
            console.log(savedcart);
        }


      }
      model.addItem = function(count,sku) {
        model.showhideflag = true;
        model.qty = count + 1;

        cart.items.forEach( function (item)
        {
            var itemid = item.productsku;
            if(itemid==sku){
              item.quantity=model.qty;
              var stored = JSON.parse(localStorage.getItem("cart"));
              //stored.items.splice(item);

              var cartupdated = stored.items.filter(function(el) {
                  return el.productsku !== itemid;
              });
              stored.items=cartupdated;
              stored.items.push(item);
              localStorage.setItem("cart", JSON.stringify(stored));
              console.log(stored);
            };
        });
      }
      model.removeItem = function(count,sku) {

        model.qty = count - 1;
        if (model.qty < 1) {
          model.showhideflag = false;
          var getcart = JSON.parse(localStorage.getItem("cart"));
          //stored.items.splice(item);
          var removeditem = getcart.items.filter(function(el) {
              return el.productsku !== sku;
          });
          if(removeditem.length>0){
            getcart.items=removeditem;
            localStorage.setItem("cart", JSON.stringify(getcart));
          }
          else{
            localStorage.removeItem("cart");
          }

          console.log(getcart);
        } else {
          model.showhideflag = true;
          cart.items.forEach( function (item)
          {
              var itemid = item.productsku;
              if(itemid==sku){
                item.quantity=model.qty;
                var stored = JSON.parse(localStorage.getItem("cart"));
                //stored.items.splice(item);
                var cartupdated = stored.items.filter(function(el) {
                    return el.productsku !== itemid;
                });
                stored.items=cartupdated;
                stored.items.push(item);
                localStorage.setItem("cart", JSON.stringify(stored));
                console.log(stored);
              };
          });
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
