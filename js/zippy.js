/*global angular */
// purpose to create dynamic input that is shown/hidden
// based on user interaction, ie, mouseover
var app = angular.module("app", []);

app.directive("zipped", function() {
  return {
    restrict: "E",
    transclude: true,
    scope: {
      title: "@"
    },
    template: '<div ng-click="toggleContent()"><h4>{{title}}</h4><div ng-show="isContentVisible" ng-transclude></div></div>',
    link: function (scope) {
      scope.isContentVisible = false;

      scope.toggleContent = function () {
        scope.isContentVisible = !scope.isContentVisible;
      }
    }
  };
});
