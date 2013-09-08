// #21 TRANSCLUSION BASICS
// transclusion allows elements nested inside the directive to be appended to the directive's template
var transClude = angular.module("transClude", [])
transClude.controller("transCtrl", function ($scope) {
})
transClude.directive("trans", function() {
  return {
    restrict: "E",
    transclude: true,
    template: '<div class="panel" ng-transclude>A master, transclude container</div>'
  }
})

