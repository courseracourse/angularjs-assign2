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

// angular.module('LunchCheck', ['ngAnimate'])
// .controller('LunchCheckController', LunchCheckController);
//
// LunchCheckController.$inject = ['$scope'];
// function LunchCheckController ($scope) {
//   $scope.isHide = true;
//
//   $scope.lunchMenu = "";
//
//   $scope.CheckMenu = function () {
//     var MenuItems = $scope.lunchMenu.split(",");
//     MenuItems = MenuItems.sort().reverse();
//     var ItemsCount = 0;
//
//     for (var i=0; i<MenuItems.length; i++) {
//       if ((MenuItems[i] === "") || (MenuItems[i] === " ")) {
//               break;
//           }
//       ItemsCount++;
//     }
//
//     if (MenuItems == "") {
//       $scope.resultMsg = "Please enter data first";
//       $scope.resultClass = "void";
//       $scope.placeholderClass = "";
//       $scope.bubbleClass = "";
//       $scope.backgroundClass = "";
//     }
//     else {
//       $scope.resultClass = "done";
//       $scope.placeholderClass = "yplaceholder";
//       $scope.bubbleClass = "bubble";
//
//       if (ItemsCount <= 3) {
//         $scope.resultMsg = "Enjoy!";
//         $scope.backgroundClass = "backfed";
//       }
//       else {
//         $scope.resultMsg = "Too much!";
//         $scope.backgroundClass = "backhungry";
//       }
//     }
//
//     $scope.isHide = false;
//   }
//
//   $scope.keyPress = function (keyEvent) {
//     $scope.isHide = true;
//     if (keyEvent.which === 13)
//       $scope.CheckMenu();
//   }
// }

})();
