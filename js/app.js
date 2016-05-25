(function() {

  var app = angular.module('store', ['store-products']);

  app.controller('StoreController', function($scope){
    $scope.feed = feed;
  });

  /*
  app.controller('StoreController', ['$http', function($http){
    var store = this;

    store.products = [];

    $http.get('/store-products.json').success(function(data){
      store.products = data;
    });
  }]);
  */

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });
  var feed = [
    {
      name: "Mowed a lawn.",
      user: "Bob Hope",
      desc: "I mowed a lawn this weekend because my neighbor's grass is 3 feet tall."
    },
    {
      name: "Mowed a lawn 2.",
      user: "Bob Hope",
      desc: "I mowed a lawn this weekend because my neighbor's grass is 3 feet tall."
    },
    {
      name: "Got donations",
      user: "Barack Obama",
      desc: "I got donations for my wife's organization."
    },
    {
      name: "Got donations",
      user: "Barack Obama",
      desc: "I got donations for my wife's organization."
    },
    {
      name: "Got donations",
      user: "Barack Obama",
      desc: "I got donations for my wife's organization."
    },
    {
      name: "Got donations",
      user: "Barack Obama",
      desc: "I got donations for my wife's organization."
    },
    {
      name: "Got donations",
      user: "Barack Obama",
      desc: "I got donations for my wife's organization."
    },
    {
      name: "Got donations",
      user: "Barack Obama",
      desc: "I got donations for my wife's organization."
    }
  ]

})();
