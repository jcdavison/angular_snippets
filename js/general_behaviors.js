var basicApp = angular.module("basicApp", [])

basicApp.directive("enterbatman", function() {
  return function (scope, element) {
    element.bind("mouseenter", function () {
      console.log("hey bat man, fuck you!")
    })
  }
})

// notice that in the case of an attribute directive
// in the above, the restriction and link as attributes on the 
// return object can be ommited and angular will default to
// Attribute and a function call on link

basicApp.directive("leavebatman", function() {
  return {
    restrict: "A",
    link: function (scope, element) {
      element.bind("mouseleave", function () {
      console.log("thanks for getting out")
      })
    }
  }
})
