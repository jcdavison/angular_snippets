// #18 ISOLATE SCOPE USING '='
var eqlScope = angular.module("eqlScope", [])
eqlScope.controller("eqlCtrl", function ($scope) {
  $scope.ctrlLocation = "California"
})
eqlScope.directive("show", function () {
  return {
    scope: {
      // '=' represents an object of some sort
      // it creates a two way binding useful for inputs
      // the ctrl can update the directive or vice versa
      location: "="
    },
    template: '<input type="text" ng-model="location">'
  }
});

