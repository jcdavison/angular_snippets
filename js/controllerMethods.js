// #5 & #6 CONTROLLER METHODS & FILTERS controllerMethods.html
var basicMethods = angular.module("basicMethods", [])
basicMethods.factory("Data", function () {
  return { info: " -appended w/ factory 'Data'"}
})
basicMethods.filter("chopStuff", function (Data) {
  return function (input) {
    return input.split("").reverse().join("") + Data.info;
  }
})
basicMethods.controller("basicCtrl", function ($scope) {
  $scope.data = { info: "shareable content in here"}
  $scope.blender = function (veggies) {
    return veggies.split("").reverse().join("");
  }
})

