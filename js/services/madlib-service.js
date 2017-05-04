  var app=angular.module('madMod');

  app.factory('madFactory', function() {
    console.log('factory');
    var inputs={};
    function setInputs(words) {
      inputs=words;
      console.log(inputs);
    }
    function returnInputs() {
      return inputs;
    }
    return{
      setInputs:setInputs,
      returnInputs: returnInputs
    }
  })
