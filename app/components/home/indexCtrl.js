(function (app){
	'use strict';
	app.controller('indexCtrl', indexCtrl);
	function indexCtrl($scope, $http, $q, configs){
        $scope.selectedCity = '';
        $scope.cities = _getCities();
        $scope.weatherData = [];
        $scope.totalRainFall = ''
        var url = "http://api.openweathermap.org/data/2.5/forecast/daily?id={cityId}&cnt={cnt}&APPID={appId}";
        var noOfDays = 6;

        //Ideally this function will be a call from the database that fetches cities
        function _getCities(){
            return [{
                id: 2147714,
                label: 'Sydney, NSW'
            },{
                id:7839672,
                label: 'Hobart, TAS'
            }];
        }

        $scope.getWeatherData = function(){
            //$scope.weatherData = _getWeatherData($scope.selectedCity);
            _getWeatherData($scope.selectedCity)
                .then(function success(response){
                    $scope.weatherData = response;
                    console.log($scope.weatherData);
                    $scope.totalRainFall = _calculateTotalRain();
                }, function error(response){
                    $scope.weatherData = [];
                });
        };

        function _calculateTotalRain(){
            var totalRain = 0;
            if(!$scope.weatherData.data || !$scope.weatherData.data.list){
                return '';
            }
            angular.forEach($scope.weatherData.data.list, function(value, key){
                var rain = value['rain'] || 0;
                totalRain += rain;
            });
            return totalRain;
        };

        //Helper functions
         function _getWeatherData(city) {
             if(!city) return $q.reject();
             var fetch_url = url.replace('{cityId}', city.id).replace('{cnt}', noOfDays).replace('{appId}', configs.appId);
             return $http.get(fetch_url);
         }
        $scope.getWeatherData();
	}

})(angular.module('yield'));