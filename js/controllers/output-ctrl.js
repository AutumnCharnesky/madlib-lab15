var app=angular.module('madMod');

  app.controller("outputController", function($scope, madFactory) {

    console.log('output ctrl');

    // var story1=["once upon a time there was a"= $scope.noun1 +"they {{adj1}} and {{verb2}} and {{adj2}} and {{noun2}} and {{noun3}}", "yo {{noun1}} they {{adj1}} yo {{verb2}} and {{adj2}} and {{noun2}} and {{noun3}}"]
    //
    //
    //
    //
    // $scope.novel=[];
    // $scope.madlib1= function(){
    //   var i=Math.floor(Math.random()*story1.length);
    //   $scope.novel.push({text: story1[i] })
    //     console.log($scope.novel);
    // }


    $scope.print=madFactory.returnInputs();
    console.log($scope.print);
});
