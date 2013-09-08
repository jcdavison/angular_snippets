/*global angular */
console.log("providers")
var app = angular.module("app", [])


app.provider("special", function () {
  var message;
  return {
    getMessage: function (value) {
      message = value
    },
    $get: function () {
      return {
        info: message + "some special info attached directly to a provider"
      } 
    }
  }
})

//note that is is also possible to configure the 'provider'

app.config( function (specialProvider) {
  specialProvider.getMessage("shhh, ")
})

app.config( function ($routeProvider, $provide) {
  // this defines an actual factory but it is also
  $provide.factory("otherFactory", function () {
    return {
      info: "special info injected via direct $provide binding"
    }
  });

  $routeProvider
    .when("/", {
      templateUrl: "templates/providers.html",
      controller: "basicCtrl"
    });
})

app.factory("basic", function () {
  return {
    data: "some data provided by a custom provider"
  }
})

app.controller("basicCtrl", function ($scope, basic, otherFactory, special) {
  //note that basic is defined after the confi and otherFactory defined
  //directly on the provide object
  $scope.title = basic.data
  $scope.info = otherFactory.info
  $scope.special = special.info
})
