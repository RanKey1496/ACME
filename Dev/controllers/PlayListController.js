app.controller("PlayListController", function($scope, $http, $location, passDataService){

	var selectedId = '';
	var selectedPrefix = '';

	$scope.companies = [{name:"Select company", _id:"1"}];

	$http.post('http://lemurbackend.herokuapp.com/company/getAll?token=' + localStorage.getItem('token')).then(function(response){
		if (response.data.success == true) {
			$scope.companies = response.data.message;
		};
	});

	$http.post('http://lemurbackend.herokuapp.com/playlist/getAll?token=' + localStorage.getItem('token'),{headers: {'Content-Type': undefined}}).then(function(response){
		console.log(response.data);
		$("#table").bootstrapTable({
			data: response.data.message,
	        search: true,
	        pagination: true,
	        columns:[
	            {title:"Codigo", field:"_id"},
	            {title:"Creador", field:"creator"},
	            {title:"Nombre", field:"name"}
	        ],
	        onClickRow: function(row, $element){
	        	passDataService.savePlaylistResponse(row._id);
	        	$scope.options();
	        }
	    });
	});

	$scope.options = function(){
		$location.path("/playlist-options");
		$scope.$apply();
	}

	$scope.submit = function(){
		var name = $scope.name;
		var params = {
			'name': selectedPrefix + "-" +name,
			'creator': "dummy"
		}
		$http.post('http://lemurbackend.herokuapp.com/playlist/create?token=' + localStorage.getItem('token'), params).then(function(response){
			if (response.data.success == true) {
				var playlistId = response.data.message.id;
				var playListParams = {
					'playlist': playlistId,
					'id': selectedId
				}
				$http.post('http://lemurbackend.herokuapp.com/company/addPlayList?token='+localStorage.getItem('token'), playListParams).then(function(response){
					console.log(response.data.success);
					if (response.data.success === true) {
						alert("Que viva la bareta");
					};
				});
			};
		});
	}

	$scope.update = function(company){
		selectedId = company._id;
		selectedPrefix = company.prefix;
	}
	
});