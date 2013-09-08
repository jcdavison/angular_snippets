// #10 BASIC DIRECTIVES
var basicDirective = angular.module("basicDirective", [])
// NOTE elements are case insensitive
basicDirective.directive("exampleelement", function () {
  return {
    restrict: "E",
    template: "<div class='panel callout radius'>a panel created by a customer element called 'exampleelement'</div>"
  }
})

