// #14 DIRECTIVE TO CONTROLLER COMMUNICATION
var app = angular.module("testApp", []) 
app.controller("testCtrl", function ($scope){
    $scope.performActivity = function() {
        console.log("performActivity()called");
    }
});
// example of a directive
app.directive("enter", function() {
    return function(scope, element, attrs) {
        element.bind("mouseenter", function() {
            element.addClass(attrs.enter);
        })
    }
});
// notice that attrs can be passed in and represent
// attributes from the point of dom insertion
app.directive("perform", function() {
    return function(scope, element, attrs) {
        element.bind("mouseenter", function() {
            // the scope binds the directive to the controller
            scope.$apply(attrs.perform);
        })
    }
});
app.directive("leave", function() {
    return function(scope, element, attrs) {
        element.bind("mouseleave", function() {
            console.log("this is leaving");
            element.removeClass(attrs.enter);
        })
    }
})

