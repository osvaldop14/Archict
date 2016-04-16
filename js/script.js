angular.module("prePortal", [])
.controller("ListarCursos", function ($scope) {
	$scope.nombre ="Osvaldo"
	$scope.cursos = [
					  {
					    "anio": 2015,
					    "semestre": "Primero",
					    "codigo": 2277,
					    "nombre": "Diseño 1"
					  },
					  {
					    "anio": 2014,
					    "semestre": "Segundo",
					    "codigo": 2877,
					    "nombre": "Diseños Arquitecnicos"
					  },
					  {
					    "anio": 20015,
					    "semestre": "Primero",
					    "codigo": 3155,
					    "nombre": "Infraestructura"
					  },
					  {
					    "anio": 2016,
					    "semestre": "Segundo",
					    "codigo": 3581,
					    "nombre": "Diseño Ambiental"
					  },
					  {
					    "anio": 2016,
					    "semestre": "Tercero",
					    "codigo": 3423,
					    "nombre": "Vias"
					  }
					];
});


