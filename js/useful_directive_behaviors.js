var useful = angular.module("useful", [])

useful.directive("add", function () {
  return function (scope, element, attrs) {
    element.bind("mouseenter", function () {
      element.addClass(attrs.add)
      console.log("hello")
    }) 
  }
})

// the point of these is to demonstrate how directives can be very useful to 
// manipulate the DOM or do things as a team

useful.directive("leave", function () {
  return function (scope, element, attrs) {
    element.bind("mouseleave", function () {
      element.removeClass(attrs.leave)
      console.log("goodbye")
    }) 
  }
})
