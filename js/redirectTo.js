/*global angular */
console.log("redirectTo")

var app = angular.module("app", [])

app.config(function ($routeProvider) {
  $routeProvider
    .when('/monkeys', {
      templateUrl: "templates/redirect.html",
      controller: "someCtrl"
    })
    // note that redirectTo can return a function
    .when('/lions', {
      redirectTo: function () {
        return "/monkeys"
      }
    })
    .when('/example/:name/:location', {
      redirectTo: function ($routeParams, path, search) {
        console.log(path)
        console.log(search)
        console.log($routeParams)
        return "/" + $routeParams.name
      }
    })
    .when('/john', {
      templateUrl: "templates/john.html"
    })
    .otherwise({
      redirectTo: "monkeys"
    })
})

app.controller("someCtrl", function ($scope) {
  $scope.model = {
    data: "special data goes in here"
  }
})
