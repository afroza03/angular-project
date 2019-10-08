var myApp = angular.module("myApp", []);

myApp.controller('myShoppingCart', function($scope) {

 $scope.products = [];

$scope.addProduct= function () {

    $scope.products.push({name:$scope.name, price:$scope.priceProduct});
    $scope.nameProduct = "";
    $scope.priceProduct = "";
 }

});