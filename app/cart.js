angular.module('myApp', ['ngAnimate']);

angular.module('myApp')
.controller('myController', function ($scope) {
  
  $scope.inventory = [
    { id :  1, category : "5 litter oil", description : "soyabin oil",   price :   580.00, qty : 1 },
    { id :  2, category : "1 litter oil", description : "soyabin oil",   price :   120.00, qty : 1, onSale : true },
    { id :  3, category : "Noodle",   description : "family pack (big)",     price :   250.00, qty : 1 },
    { id :  4, category : "Salad",   description : "Frozen Salad",       price :  150.00, qty : 1 },
    { id :  5, category : "curry cooker",        description : "big curry cooker",          price :  1800.99, qty : 1 },
    { id :  6, category : "sospane",        description : "big sospane",            price :  1500.99, qty : 1 },
    { id :  7, category : "sleeping bag", description : "simple sleeping bag",  price :  490.99, qty : 1 },
    { id :  8, category : "sleeping kushon", description : "deluxe sleeping kuson",  price :  790.99, qty : 1 },
    { id :  9, category : "vegitable",         description : "5 kg ",        price : 250.99, qty : 1 },
    { id : 10, category : "fruit",         description : "5 kg",        price : 990.99, qty : 1 },
    { id : 11, category : "tent",         description : "3-person tent",        price : 249.99, qty : 1 },
    { id : 12, category : "tent",         description : "4-person tent",        price : 319.99, qty : 1 },
    { id :  13, category : "1 litter oil", description : "soyabin oil",   price :   120.00, qty : 1, onSale : true },
    { id :  14, category : "Noodle",   description : "family pack (big)",     price :   250.00, qty : 1 },
    { id :  15, category : "Salad",   description : "Frozen Salad",       price :  150.00, qty : 1 },
    { id :  16, category : "curry cooker",        description : "big curry cooker",          price :  1800.99, qty : 1 },
    { id :  17, category : "sospane",        description : "big sospane",            price :  1500.99, qty : 1 },
    { id :  18, category : "sleeping bag", description : "simple sleeping bag",  price :  490.99, qty : 1 },
    { id :  19, category : "sleeping kushon", description : "deluxe sleeping kuson",  price :  790.99, qty : 1 },
    { id :  20, category : "vegitable",         description : "5 kg ",        price : 250.99, qty : 1 },
    { id : 21, category : "fruit",         description : "5 kg",        price : 990.99, qty : 1 }
  ];
  
  $scope.cart = [];
  
  var findItemById = function(items, id) {
    return _.find(items, function(item) {
      return item.id === id;
    });
  };
  
  $scope.getCost = function(item) {
    return item.qty * item.price;
  };

  $scope.addItem = function(itemToAdd) {
    var found = findItemById($scope.cart, itemToAdd.id);
    if (found) {
      found.qty += itemToAdd.qty;
    }
    else {
      $scope.cart.push(angular.copy(itemToAdd));}
  };
  
  $scope.getTotal = function() {
    var total =  _.reduce($scope.cart, function(sum, item) {
      return sum + $scope.getCost(item);
    }, 0);
    console.log('total: ' + total);
    return total;
  };
  
  $scope.clearCart = function() {
    $scope.cart.length = 0;
  };
  
  $scope.removeItem = function(item) {
    var index = $scope.cart.indexOf(item);
    $scope.cart.splice(index, 1);
  };
  $scope.check=function(){
    alert("Thanks from buying from us");
  }
  
});
