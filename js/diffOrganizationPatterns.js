// #23 DIFF ORGANIZATIONAL PATTERNS

var orgApp = angular.module("orgApp", [])
var randObject = {}
randObject.controllers = {}
randObject.controllers.mainCtrl = function ($scope) {
  this.communicate = function () {
    alert("hello amigo, we <3 you!");
  }
  return $scope.mainCtrl = this
}
randObject.directives = {}
randObject.directives.mainDir = function () {
  return {
    restrict: "E"
  }
}
orgApp.directive(randObject.directives);
orgApp.controller(randObject.controllers);
// the point here is that the directive can be defined on a random object and then 
// passed to whatever module desired.
