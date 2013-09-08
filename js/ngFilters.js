// #8 & #9 NATIVE NG FILTERS

var nativeFilters = angular.module("nativeFilters", [])

nativeFilters.factory("Musicians", function () {
  var Musicians = {};
  Musicians.people = [
    {name: "Amy Coltrane", instrument: "Sax"},
    {name: "John Coltrane", instrument: "Sax"},
    {name: "Miles Davis", instrument: "Trumpet"},
    {name: "Amy Coltrane", instrument: "Sax"},
    {name: "John Coltrane", instrument: "Sax"},
    {name: "Miles Davis", instrument: "Trumpet"},
    {name: "Amy Coltrane", instrument: "Sax"},
    {name: "John Coltrane", instrument: "Sax"},
    {name: "Miles Davis", instrument: "Trumpet"},
    {name: "Stan Gets", instrument: "Sax"}
  ] 
  return Musicians;
}) 

nativeFilters.controller("ctrl1", function ($scope, Musicians) {
  $scope.musicians = Musicians;
})

