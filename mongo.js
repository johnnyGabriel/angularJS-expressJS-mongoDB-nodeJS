// Requires
var mongoose = require('mongoose');

// Conecta à Collection remota
mongoose.connect('mongodb://johnnypestana:jgpsantos10@ds049935.mongolab.com:49935/teste');

// Data Schema
var UsuarioSchema = new mongoose.Schema({
	nome: {
		nome: String,
		sobrenome: String
	},
	idade: Number,
	email: String
});

// Data Model
var Usuario = mongoose.model('Usuario', UsuarioSchema);

// Nova instância do model Usuario
var usuario = new Usuario({ 
	nome: {
		nome: 'Johnny',
		sobrenome: 'Gabriel'
	},
	idade: 21,
	email: "johnny_gabriel@outlook.com"
});
// usuario.save(function(err) {
// 	if (err)
// 		console.log(err);
// 	else
// 		console.log(usuario);
// });

Usuario.find(function(err, data) {
	console.log(data);
});