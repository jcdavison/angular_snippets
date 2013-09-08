// #15 DIRECTIVE TO DIRECTIVE COMMUNICATION
var superApp = angular.module("superApp", [])
superApp.directive("hero", function() {
    return{
        restrict: "E",
        scope: {},
        controller: function($scope) {
            $scope.skills = []
            this.addStrength = function () {
                $scope.skills.push("strength");
            }
            this.addFlight = function () {
                $scope.skills.push("flight");
            }
        },
        link: function (scope, element) {
            element.bind("mouseenter", function () {
                console.log("directive triggered, skills being displayed");
                console.log(scope.skills);
            })
        }
    }
});
superApp.directive("strength", function() {
    return {
        // require 'hero' links the two directives
        require: "hero",
        link: function (scope, element, attrs, heroCtrl) {
            // the 4th param, heroCtrl always represents the controller object
            heroCtrl.addStrength();
        }
    }
})
superApp.directive("flight", function() {
    return {
        require: "hero",
        link: function (scope, element, attrs, heroCtrl) {
            heroCtrl.addFlight();
        }
    }
})

