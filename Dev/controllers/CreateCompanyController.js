app.controller('CreateCompanyController', function($scope, $http, $location){

	$scope.create = function(){
		var name = $scope.name;
		var nit = $scope.nit;
		var prefix = $scope.prefix;

		var params = {
			'name': name,
			'nit': nit,
			'prefix': prefix
		}

		$http.post("https://lemurbackend.herokuapp.com/company/create?token="+localStorage.getItem("token"), params)
			.then(function(response){
				if (response.data.success == true) {
					alert("Creada con exito");
				} else {
					alert("Error creando empresa");
				}
			});
	}

	$scope.cancel = function(){
		$location.path('/home');
	}

});