// #2 CONTROLLERS basicController.html

var basicController = angular.module("basicController", [])
basicController.controller("basicCtrl", function ($scope){
 $scope.data = { 
   info: "some information stored in the controller",
   style: "panel callout"
 }
})

