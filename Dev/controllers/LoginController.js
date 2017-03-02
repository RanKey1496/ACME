app.controller("LoginController", function($scope, $http, $location){
	$scope.submit = function(){

		var username = $scope.username;
		var password = $scope.password;

		if (username.trim() && password.trim()) {
			var params = {'username':username, 'password':password};
			$http.post("https://lemurbackend.herokuapp.com/signin", params).
	        then(function(response){
	        	if (response.data.success == true) {
	        		localStorage.setItem("token", response.data.message);
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