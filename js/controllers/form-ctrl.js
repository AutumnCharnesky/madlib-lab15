  var app=angular.module('madMod');

  app.controller("formController", function($scope, madFactory) {

    console.log("form ctrl it has loaded");

    $scope.addInput=function(words) {
      console.log(words);
      madFactory.setInputs(words);
    }

  });
