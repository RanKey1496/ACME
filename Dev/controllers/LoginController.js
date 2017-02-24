app.controller("LoginController", function($scope, $http, $location){
	$scope.submit = function(){

		var username = $scope.username;
		var password = $scope.password;

		if (username.trim() && password.trim()) {
			var params = {'username':username, 'password':password};
			$http.post("http://localhost:3000/signin", params).
	        then(function(response){
	        	if (response.data.success == true) {
	        		$location.path("/home"); 
	        	} else {
	        		alert("Usuario o contraseña invalidos");
	        	};
	        });
		} else {
			alert("Llena todos los campos");
		};
	}	
})