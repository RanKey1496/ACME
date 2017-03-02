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
	.when("/add-song", {
		controller: "AddSongController",
		templateUrl: "views/add-song.html"
	})
	.when("/create-company", {
		controller: "CreateCompanyController",
		templateUrl: "views/create-company.html"
	})
	.when("/playlist-options", {
		controller: "PlayListOptionsController",
		templateUrl: "views/playlist-options.html"
	})
	.otherwise("/login");
};

var app = angular.module("Lemur", ["ngRoute"]).config(configApp);