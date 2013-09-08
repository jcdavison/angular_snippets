/*global angular */
console.log("components and containers")
var app = angular.module("app", [])

app.directive("razor", function () {
  return {
    restrict: "E",
    scope: {
      edge: "@"
    },
    template: '<div>how sharp is {{edge}} ?</div>' 
  }
})

app.directive("tools", function () {
  return {
    restrict: "E",
    transclude: true,
    scope: {
      gear: "@"
    },
    template: '<div class="panel callout radius"><div class="alert alert-box" ng-transclude>{{gear}}</div></div>' 
  }
})
