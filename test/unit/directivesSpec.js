'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {

  var scope, compile, validDirective;

  beforeEach(module('myApp.directives'));

  beforeEach(function(){
	  inject(function ($compile, $rootScope){
		  scope = $rootScope.$new();
		  compile = $compile;
	  });
  });

  validDirective = "<recurly-api api-url='https://zekona.recurly.com' api-key='sc-9BZinWWVk25whPG9ZGhs5l'></recurly-api>";

  describe('recurly-api', function() {
	  it('should have an empty error object', function() {
  		var element = compile(validDirective)(scope);
  		var $scope = element.isolateScope();
  		expect($scope.error).toEqual(false);
	  });
  });

});
