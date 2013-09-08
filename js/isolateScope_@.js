// #17 ISOLATE SCOPE USING '@'
var atScope = angular.module("atScope", [])
atScope.controller("atCtrl", function ($scope) {
});
atScope.directive("show", function () {
  //this is a chunky way to do it, use @ instead
  // return {
  //   scope: {},
  //   template: '<div>{{location}}</div>',
  //   link: function (scope, element, attrs) {
  //     scope.location = attrs.location;
  //   }
  // }
  return {
    scope: {
      location: '@'
      // @ could represent all kinds of strings
      // the string can evaluate to anything that can be wired correctly
    },
    template: '<div>{{location}}</div>',
  }
});

