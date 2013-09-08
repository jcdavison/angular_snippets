/*global angular */
console.log("$helpers")
var app = angular.module("app", [])
app.run( function ($rootScope, $log) {
  $rootScope.$log = $log
})
