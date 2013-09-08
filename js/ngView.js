/*global angular */
console.log("ngView")

var app = angular.module("app", [])


// note that config can receive $xProvider and the output becomes x, avail as a factory
app.config(function ($routeProvider) {
  // the use of a real server would dictate actually including a template
  // but since we aren't running on a domain, js won't allow a template include
  // $routeProvider has two methods, .when and .otherwise
  $routeProvider
    .when( '/', 
      {
        template: "<h5>some template content, {{model.info}}</h5>",
        controller: "appCtrl"
      }
    )
    .when( '/:monkeys', 
      {
        template: "some other content, {{model.info}}",
        controller: "otherCtrl"
      }
    )
    .otherwise({
      template: "content to show when the route is bogus"
    })
})

// $route is accesible because $routeProvider was given to config
app.controller("appCtrl", function ($scope, $route) {
  // now the controller has access to $route stuff
  // like rails, the route thing is just an object!
  console.log($route.routes)
  $scope.model = {
    info: "hey there!, this is controller model provided content"
  }
})

// note that below, the controller has access to the $routeParams
app.controller("otherCtrl", function ($scope, $route, $routeParams) {
  $scope.model = {
    info: $routeParams.monkeys
  }
})
