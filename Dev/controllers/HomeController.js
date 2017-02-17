app.controller("HomeController", function($scope, appModel){
	$scope.test = appModel.getHome();
})