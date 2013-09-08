// #16 ISOLATE SCOPE
// useful to ensure that multiple instances of ng widgets have seperate scopes
var isolateScope = angular.module("isolateScope", []);
// creating scope isolation causes controller access problems
isolateScope.controller("isolCtrl", function($scope) {
  $scope.logDescription = function (description) {
    console.log("desc:" + description);
  }
});

isolateScope.directive("place", function () {
  return {
    restrict: "E",
    // passing in a defined scope object creates scope isolation
    scope: {
      describe: "&"
    },
    template: '<input type="text" ng-model="description">' + 
      '{{description}}' + 
      '<br><div class="button" ng-click="describe({description:description})">describe!</div>'
  }
});

