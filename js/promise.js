/*global angular */
console.log("promise")
var app = angular.module("app", [])

app.config( function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "templates/app.html",
      controller: "someCtrl"
    })
})

app.controller("someCtrl", function ($scope, $q) {
  // basic structure of a 'promise'
  var promiseObject = $q.defer();
  // $q represents the promise factory
  var chainObject = $q.defer();

  promiseObject.promise
    .then(function () {
      console.log("promiseObject.promise.then triggered")
    })

  chainObject.promise
    .then(function (message) {
      console.log(message)
      return "the founders say what?"
    })
    .then(function (returnedMessage) {
      console.log(returnedMessage)
      return "try to fail fast!"
    })
    .then(function (message) {
      console.log("3 " + message)
    })

  // the below triggers a once time event that occurs after the promise is fulfilled
  $scope.resolve = function () {
    promiseObject.resolve()
  }
  // the below will trigger a chain of promises
  $scope.chain = function () {
    chainObject.resolve("message to the founders! science bitches!")
  }
  // close structure of a 'promise'

  $scope.model = {
    data: "some random data"
  }
})
