app.controller("PlayListOptionsController", function($scope, $http, $location, passDataService){

	var selectedId = '';
	var playlistId = passDataService.getPlaylistId();

	$http.post('http://lemurbackend.herokuapp.com/song/getAll?token=' + localStorage.getItem('token')).then(function(response){
		if (response.data.success == true) {
			$scope.songs = response.data.message;
		};
	});

	$scope.submit = function(){

		var params = {
			'song':selectedId,
			'id': playlistId
		}

		$http.post('http://lemurbackend.herokuapp.com/playlist/addSong?token=' + localStorage.getItem('token'), params).then(function(response){
			console.log(response.data);
			if (response.data.success == true) {
				$location.path("/playlist").replace();
			};
		});
	}

	$scope.update = function(song){
		console.log(song._id);
		console.log(playlistId);
		selectedId = song._id;
	}

});