pizzaIceCream.factory('productsFactory', function productsFactory() {
  var factory = {};


  factory.totalPrice = function() {
  return factory.productQuantity * 1.75;
  };

  return factory;
});
