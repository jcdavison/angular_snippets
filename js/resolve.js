/*global angular */
console.log("resolve")
var app = angular.module("app", [])

app.config( function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "templates/resolve.html",
      controller: "someCtrl",
      // resolve is used to do things before the controller object loads
      resolve: {
        // the below sets a timeout on the resolve
        // this is the 'base' pattern
        // app: function ($q, $timeout) {
        //   var defer = $q.defer()
        //   $timeout( function() {
        //     defer.resolve()
        //   }, 5000)
        //   return defer.promise
        // }
        // a more object oriented style, note the use of var on the controller object
        loadData: someCtrl.loadData
      }
    })
    .when("/monkeys", {
      templateUrl: "templates/resolve.html",
      controller: "otherCtrl",
      resolve: {
        load: otherCtrl.load
      }
    })
})

// wrap app in this root ctrl that can listen and handle problems
app.controller("appCtrl", function ($rootScope) {
  $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
    console.log(event)
    console.log(current)
    console.log(previous)
    console.log(rejection)
  })
})
//another way to handle the error using a more dom centric approach
// generally avoid injecting stuff into  directive, $rootScope is ok
app.directive("error", function ($rootScope) {
  return {
    restrict: "E",
    template: '<div class="alert-box alert" ng-show="isError">Error Occured</div>',
    link: function (scope) {
      $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
        scope.isError = true
      })
    }
  }
})

var someCtrl = app.controller("someCtrl", function ($scope) {
  $scope.model = {
    data: "wassup kid!"
  }
})

someCtrl.loadData = function ($q, $timeout) {
  var defer = $q.defer()
  $timeout( function() {
    defer.resolve()
  }, 500)
  return defer.promise
  // if there are mulitple resolve objects, they all get executed and returned together, no specific sequence
}
// otherCtrl actually rejects the promise, which causes the controller not to load
var otherCtrl = app.controller("otherCtrl", function ($scope) {
  $scope.model = {
    data: "wassup kid!"
  }
})
otherCtrl.load = function ($q, $timeout) {
  var defer = $q.defer()
  $timeout( function() {
    defer.reject("this is broken, sort of")
  }, 5000)
  return defer.promise
  // if there are mulitple resolve objects, they all get executed and returned together, no specific sequence
}
