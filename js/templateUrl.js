/*global angular */
// purpose to create dynamic input that is shown/hidden
// based on user interaction, ie, mouseover
var app = angular.module("app", []);

//below shows how a partial can be manually injected into the templateCache for later use
app.run(function ($templateCache) {
  $templateCache.put('other_partial.html', '<div class="some_class">{{some.model}}</div>')
})

app.directive("zipped", function ($templateCache) {
  // $templateCache is an object that the app has access to 
  console.log($templateCache)
  console.log($templateCache.get("partial.html"))
  console.log($templateCache.get("other_partial.html"))
  return {
    restrict: "E",
    transclude: true,
    scope: {
      title: "@"
    },
    // template: '<div ng-click="toggleContent()"><h4>{{title}}</h4><div ng-show="isContentVisible" ng-transclude></div></div>',
    // the above string can get messy, try using templateUrl: 'template.html' instead
    // when running on a local host, the html file can be store locally vice the inline script def used in this js file's markup
    // the below could be written also as template: $templateScope.get("partial.html")
    templateUrl: "partial.html",
    link: function (scope) {
      scope.isContentVisible = false;
      scope.toggleContent = function () {
        scope.isContentVisible = !scope.isContentVisible;
      }
    }
  };
});
