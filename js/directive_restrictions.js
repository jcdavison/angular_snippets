var app = angular.module("app", [])

app.directive("randomattribute", function () {
  return {
    restrict: "A",
    link: function () {
      document.write("randomattribute directive triggered")
    }
  }
})

// note directive names must conform to html standards so no special chars
// and everything must be lowercase,ie, the browser treats is case insenstive.

