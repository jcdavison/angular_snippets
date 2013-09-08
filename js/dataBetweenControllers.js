// #4 SHARING DATA BETWEEN CONTROLLERS dataBetweenControllers.html

var sharedData = angular.module("sharedData", [])
sharedData.factory("DataStore", function () {
  return { content: "bindeable content!" }
})
sharedData.controller("firstCtrl", function ($scope, DataStore) {
  $scope.info = DataStore;
})
sharedData.controller("secondCtrl", function ($scope, DataStore) {
  $scope.info = DataStore;
})

