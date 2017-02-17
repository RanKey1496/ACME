var configApp = function($routeProvider){
	$routeProvider.when("/home", {
		controller: "HomeController",
		templateUrl: "views/home.html"
	})
	.otherwise("/home");
};

var app = angular.module("ACME", ["ngRoute"]).config(configApp);