/*global angular */
var app = angular.module("app", [])

app.controller("newCtrl", function ($scope) {
  // controllera accept 'providers' aka other objects that exist
  // they must be named correctly, aka, dependancy injection
  console.log($scope)
});
// note newCtrl, the dependency injection looks at the object 
// it is vulnerable to minifcation problems is the param names change
// the below example, defends against said practice
app.controller("secondCtrl", [ '$scope', '$http', function (a, b) {
  console.log(a);
  console.log(b);
}])

app.directive("someDir", function () {
  return {
    scope: {},
    // by giving the object a scope obj it gains 
    // 'isolated' scope, basic params
    link: function (scope) {
      //link accepts (scope, element, attrs)
      console.log(scope)
    }
  }
})
