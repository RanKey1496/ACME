app.service("appModel", function(){
	this.getHome = function(){
		return [
			{
				id: 0,
				nombre: "Tu madre",
				edad: "666"
			},
			{
				id: 1,
				nombre: "Tio Buseta",
				edad: "50",
			},
			{
				id: 2,
				nombre: "Tu padre no existe pa",
				edad: "-1"
			}
		]
	}
})