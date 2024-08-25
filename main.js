var app = angular.module("myApp", ["ngRoute"]);

app.controller(
  "myCtrl",
  function ($scope, $rootScope, $routeParams, $http, $window, $filter) {
    $scope.products = [];

    $scope.sort = 'price';
    $scope.show=false;
    

    $http.get("data.json").then(function (response) {
      $scope.products = response.data;
      console.log($scope.products);
      for (var i = 0; i < $scope.products.length; i++) {
        if ($scope.products[i].id == $routeParams.id) {
          $scope.index = i;
        }
      }
    });

    $rootScope.search = function (input) {
      $rootScope.keySearch = input;
    };

    // Mặc định hiển thị tất cả sản phẩm khi trang được load
    $scope.filteredProducts = $scope.products; {
    };
 

    $scope.addCart = function (product) {
      // Kiểm tra giỏ hàng đã có chưa, chưa thì khai báo
      if (typeof $rootScope.cart == "undefined") {
        $rootScope.cart = [];
      }

      // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
      var index = $rootScope.cart.findIndex((item) => item.id == product.id);

      if (index == -1) {
        // Nếu chưa có thì thêm mới
        product.quantity = 1;
        $rootScope.cart.push(product);
        $window.alert("Đã thêm sản phẩm vào giỏ hàng!");
      } else {
        // Nếu có rồi thì tăng số lượng
        $rootScope.cart[index].quantity++;
        $window.alert(
          "Sản phẩm đã có trong giỏ hàng. Số lượng đã được tăng!"
        );
      }
      console.log($rootScope.cart);
    };

    // Giảm số lượng sản phẩm trong giỏ hàng
    $scope.decreaseQuantity = function (item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    };



    // Tăng số lượng sản phẩm trong giỏ hàng
    $scope.increaseQuantity = function (item) {
      item.quantity++;
    };

    // Xóa sản phẩm khỏi giỏ hàng
    $scope.removeFromCart = function (item) {
      var index = $rootScope.cart.indexOf(item);
      if (index !== -1) {
        $rootScope.cart.splice(index, 1);
      }
    };

    // Tính tổng giá trong giỏ hàng
    $scope.getTotalPrice = function () {
      var totalPrice = 0;
      for (var i = 0; i < $rootScope.cart.length; i++) {
          totalPrice += parseFloat($rootScope.cart[i].price) * $rootScope.cart[i].quantity;
      }
      return totalPrice;
  };

  $scope.getCartItemCount = function () {
      if ($rootScope.cart) {
          return $rootScope.cart.reduce(function (total, item) {
              return total + item.quantity;
          }, 0);
      } else {
          return 0;
      }
  };


       //sắp xếp 
//oderby tăng giảm
$scope.tang = function () {
  $scope.sort = "price";
};

$scope.giam = function () {
  $scope.sort = "-price";
};
  }
);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/GioiThieu", {
      templateUrl: "GioiThieu.html?" + Math.random(),
      controller: "myCtrl",
    })
    .when("/news", {
      templateUrl: "news.html?" + Math.random(),
      controller: "myCtrl",
    })
    .when("/ChiTiet/:id", {
      templateUrl: "ChiTiet.html?" + Math.random(),
      controller: "myCtrl",
    })
    .when("/GioHang", {
      templateUrl: "GioHang.html?" + Math.random(),
      controller: "myCtrl",
    })
    .when("/LienHe", {
      templateUrl: "LienHe.html?" + Math.random(),
      controller: "myCtrl",
    })
    .otherwise({
      templateUrl: "DuLich.html",
      controller: "myCtrl",
    })
    .when("/Tour", {
      templateUrl: "Tour.html?" + Math.random(),
      controller: "myCtrl",
    });
});
