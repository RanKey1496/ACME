app.controller("HomeController", function($scope, $location){
	$scope.goToPlaylists = function(){
		$location.path("/playlists"); 
	}
})