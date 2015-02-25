pizzaIceCream.controller("PizzaCtrl", function PizzaCtrl($scope, productsFactory) {
 $scope.products = productsFactory.products;
 $scope.productsFactory = productsFactory;
 });
