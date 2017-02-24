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
	.when("/playlist", {
		controller: "PlayListController",
		templateUrl: "views/playlist.html"
	})
	.otherwise("/home");
};

var app = angular.module("Lemur", ["ngRoute"]).config(configApp);