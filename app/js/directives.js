'use strict';

/* Directives */
angular.module('myApp.directives', [])
	.directive('recurlyApi', function(){
		return {
			transclude: true,
			scope: {},
			replace: true,
			restrict: 'EA',
			link: function(scope, element, attrs, ngModel) {
			
				var __api_key = attrs.apiKey || '';
				var __api_url = attrs.apiUrl || '';
				var __configured = false;
				
				scope.error = false;
				scope.token = false;
				
				scope.data = {
					number: '',
					month: '',
					year: '',
					cvv: '',
					first_name: '',
					last_last: '',
					postal_code: ''
				};
				
				scope.init = function() {
					if (typeof recurly === 'undefined') {
						throw new Error("Recurly API Library Missing.");
					}
					scope.error = '';
					if (!__configured) {
						recurly.configure(__api_key);
						__configured = true;
					}
					recurly.token(scope.data, function(err, token){
						if (err) {
							scope.$apply(function(){
								scope.error = err.message;								
							});
						} else {
							console.log(token);
							scope.$apply(function(){
								scope.token = token;
							})
						}
					});
				}
			
			},
			
			// Could place this in an HTML template instead (wanted it to be self-contained)
			template: '<div><div ng-show="error">{{ error }}</div><div ng-show="token">Success, token generated for Account Access: {{ token }}</div><form><input type="text" data-ng-model="data.number" placeholder="Number"><input type="text" data-ng-model="data.month" placeholder="Month (MM)"><input type="text" data-ng-model="data.year" placeholder="Year (YYYY)"><input type="text" data-ng-model="data.cvv" placeholder="CVV"><input type="text" data-ng-model="data.first_name" placeholder="First"><input type="text" data-ng-model="data.last_name" placeholder="Last"><input type="text" data-ng-model="data.postal_code" placeholder="Postal Code"><button ng-click="init()">submit</button></form></div>'
		}
	});
