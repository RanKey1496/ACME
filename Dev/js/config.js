var configApp = function($routeProvider){
	$routeProvider
	.when("/home", {
		controller: "HomeController",
		templateUrl: "views/home.html"
	})
	.when("/login", {
		controller: "LoginController",
		templateUrl: "views/login.html"
	})
	.otherwise("/home");
};

var app = angular.module("Lemur", ["ngRoute"]).config(configApp);