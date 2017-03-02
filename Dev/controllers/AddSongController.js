app.controller('AddSongController', function($scope, $location, $http) {
	$scope.createSong = function(file){
		var name = $scope.name;
		var album = $scope.album;
		var duration = $scope.duration;
		var artist = $scope.artist;

		var params = new FormData();
        params.append('file', file);
        params.append('name', name);
        params.append('album', album);
        params.append('duration', duration);
        params.append('artist', artist);

		$http.post("https://lemurbackend.herokuapp.com/song/create?token="+localStorage.getItem("token"), params, {
			headers: {'Content-Type': undefined}
		}).then(function(response){
	        if (response.data.success == true) {
	        	alert("Subida con exito");
	        	$location.path("/home");
	        } else {
	        	alert("Error: " + response.data.message);
	        }
	    });
	}

	$scope.cancel = function(){
		$location.path('/home');
	}

	$scope.upload = function(){
		if ($scope.file) {
			console.log('file is ' );
            console.dir($scope.file);
            $scope.createSong($scope.file);
        } else {
        	alert('Invalid Song');
        }
	}
});