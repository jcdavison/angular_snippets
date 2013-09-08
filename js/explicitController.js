// #22 EXPLICIT METHOD CALLING IN CONTROLLERS
// a more explicity way to call methods, clearer level of abstraction

var explicitController = angular.module("explicitController", [])

explicitController.controller("explicitCtrl", function ($scope) {
  // this style of scope calling ensures that on the client
  // explicitCtrl.someMethod() has to be called
  this.showInfo = function () {
    alert("in this case contoller.method() 'controller' must be explicitly called to trigger the mechanism")
  }
  return $scope.explicitCtrl = this;
})

