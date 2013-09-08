// #20 INTEGRATING ISOLATE SCOPE USING '&, =, @'
var intScope = angular.module("intScope", [])
intScope.controller("intCtrl", function ($scope) {
  $scope.transmitMessage = function (number, message, network) {
    alert("transmitMessage called" + number + message + network);
  }
})
intScope.directive("communicate", function () {
  return {
    restrict: "E",
    scope: {
      signal: "@",
      network: "=",
      transmit: "&"
    },
    template: '<div class="panel">Signal: {{signal}}, network: <select ng-model="network" ng-options="net for net in networks"></select></div>' +
      '<input type="text" ng-model="value">' +
      '<div class="button" ng-click="transmit({signal: signal, message: value, network: network})">Transmit!</div>',
    link: function (scope) {
      scope.networks = ["nw1", "nw2", "nw3"]
      scope.network = scope.networks[0]
    }
  }
})

