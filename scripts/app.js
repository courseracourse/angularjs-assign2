(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  this.to_buy_items = ShoppingListCheckOffService.getBuyItems();

  this.buyItem = function (ItemIndex){
    ShoppingListCheckOffService.buyItem(ItemIndex)
  }

  this.isEmpty = function (ItemIndex){
    return ShoppingListCheckOffService.getBuyItems().length == 0;
  }


}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  this.bought_items = ShoppingListCheckOffService.getBoughtItems();

  this.isEmpty = function (ItemIndex){
    return ShoppingListCheckOffService.getBoughtItems().length == 0;
  }

}

function ShoppingListCheckOffService() {
var service = this;

// List of shopping items
var to_buy_items = [{name:"cookies", quantity:10},
                    {name:"coca-colas", quantity:5},
                    {name:"chocolates", quantity:2},
                    {name:"apple pies", quantity:6},
                    {name:"beers", quantity:9},
                  ];

var bought_items = [];

service.getBuyItems = function () {
  return to_buy_items;
}

service.getBoughtItems = function () {
  return bought_items;
}

service.buyItem = function (itemIndex){
  bought_items.push(to_buy_items[itemIndex]);
  to_buy_items.splice(itemIndex, 1);
};
}

})();
