pizzaIceCream.controller("IceCreamCtrl", function IceCreamCtrl($scope, productsFactory) {
 $scope.products = productsFactory.products;
 $scope.productsFactory = productsFactory;
});
