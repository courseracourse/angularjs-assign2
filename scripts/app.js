(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])

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
