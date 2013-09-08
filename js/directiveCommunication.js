/*global angular */
console.log("directiveCommunication")
var app = angular.module("app", [])

app.directive("country", function () {
  return {
    restrict: "E",
    controller: function () {
      this.sendMessage = function (message) {
        console.log("sendMessage() " + message)
      }
    }
  }
})

app.directive("state", function () {
  return {
    restrict: "E",
    controller: function () {
      this.park = function () {
        console.log("your car is impounded")
      }
    }
  }
})

app.directive("city", function () {
  return {
    restrict: "E",
    require: ["^country", "^state"],
    link: function (scope, element, attrs, ctrls) {
      ctrls[0].sendMessage("welcome to SF!")
      ctrls[1].park()
    }
  }
})
