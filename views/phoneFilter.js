var phoneFormat = angular.module("phoneFormat",[]);

		phoneFormat.filter('phFormat', function(){

			return function(num) {

				var country = 'usa';
				var countryCode;
				if (!num) { 
					return ''; 
				}

				if (num[0] == '+') {

					if (num[1] == '1') {
						return country;
					}

					countryCode = num.substring(1,3);

					switch(countryCode){
						case '44':
							country = 'eu';
							break;

						case '91':
							country = 'in';
							break;

						case '61':
							country = 'au';
							break;

						case '27':
							country = 'sa';
							break;

						case '86':
							country = 'ch';
							break;

						default:
							country = 'usa';
					}

				}
				return country;
			};

		});

		phoneFormat.controller('phoneFormatController', ['$scope', 'phFormatFilter',function($scope,phFormat){
		
		}]);