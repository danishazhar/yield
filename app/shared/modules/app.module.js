(function(){
	'use strict';

	var app = angular.module('yield', ['ngRoute', 'ui']);
	app.constant('configs', {
		appId : 'f5edc597e98e20c426c2bf61c796a1d2'
	});
	app.config(config);
	config.$inject = ['$routeProvider'];
	function config($routeProvider){
		$routeProvider.when("/", {
			templateUrl: "/app/components/home/index.html",
			controller: "indexCtrl"
		}).otherwise({redirectTo: "/"});
	}
})();

