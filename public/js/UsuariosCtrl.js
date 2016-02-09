angular.module('Usuarios')
	.controller('UsuariosCtrl', function($scope, UsuariosService) {

	    $scope.usuarios = [];

	    UsuariosService.getUsuarios().success(function(data) {
	        $scope.usuarios = data;
	    }).error(function(data, status) {
	        console.log("erro " + data);
	    });
	    
	});