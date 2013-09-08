/*global angular */
console.log("ngRepeatStart")
var app = angular.module("application", [])

app.controller("appCtrl", function () {
  this.things = ["1", "2", "3"]
})
