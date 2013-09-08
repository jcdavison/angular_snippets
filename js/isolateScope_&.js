// #19 ISOLATE SCOPE USING '&'
var andScope = angular.module("andScope", [])
andScope.controller("andCtrl", function ($scope) {
  $scope.callHome = function (message) {
    console.log("calling home, major tom, are you there?, your instructions are" + message);
  }
})
andScope.directive("communicate", function () {
  return {
    scope: {
      send: "&"
    },
    template: '<input type="text" ng-model="value">' + 
    '<div class="button" ng-click="send({message:value})">send communication</div>'
  }
})

