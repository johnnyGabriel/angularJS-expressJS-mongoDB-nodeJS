angular.module('Usuarios')
	.factory('UsuariosService', function($http) {

		var host = "http://localhost:3000";

		var _getUsuarios = function() {
			return $http.get(host + "/usuarios");
		};
		var _getUsuario = function(id) {
			return $http.get(host + "/usuarios/" + id);
		}

		return {
			getUsuarios: _getUsuarios,
			getUsuario: _getUsuario 
		}
		
	});