app.controller('StoreController', ['$http', function($http) {
  var store = this;
  store.products = [];
  
  $http.get('/products.json').then(function(response) {
      store.products = response.data;
    });
}]);