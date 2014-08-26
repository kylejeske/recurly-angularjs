'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){

  var scope, compile;

  beforeEach(module('myApp.controllers'));

  beforeEach(function(){
	  inject(function ($compile, $rootScope){
		  scope = $rootScope.$new();
		  compile = $compile;
	  });
  });

  it('should be defined as MyCtrl1', inject(function($controller) {
    //spec body
    var myCtrl1 = $controller('MyCtrl1', { $scope: {} });
    expect(myCtrl1).toBeDefined();
  }));

});
