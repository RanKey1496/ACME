app.controller("HomeController", function($scope, $location){
	$scope.goToPlaylists = function(){
		$location.path("/playlist"); 
	}

	$scope.logOut = function(){
		localStorage.clear();
		$location.path("/login");
	}

	$scope.createSong = function(){
		$location.path("/add-song");
	}

	$scope.createCompany = function(){
		$location.path("/create-company");
	}
})