var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var ObjectId = require('mongoose').Types.ObjectId;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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

// app.use(express.static('public'));
// app.configure(function () {
    // app.use(express.logger('public'));     /* 'default', 'short', 'tiny', 'dev' */
    // app.use(express.bodyParser());
// });

app.get('/usuarios', function(req, res)  {
	Usuario.find(function(err, data) {
		res.json(data);
	});
});

app.get('/usuarios/:id', function(req, res) {
	var id = req.params.id;
	Usuario.find({ _id : new ObjectId(id) }, function(err, data) {
		res.json(data);
	});
});

app.post('/usuarios', function(req, res) {
	Usuario.collection.save(req.body, function(err, data) {
		res.json(req.body);
	});
});

app.put('/usuarios/:id', function(req, res) {
	Usuario.update({ _id: req.params.id}, req.body, {}, function(err, data) {
		res.json(data);
	});
});

app.delete('/usuarios/:id', function(req, res) {
	Usuario.remove({ _id: req.params.id}, function(err, data) {
		res.json(data);
	})
});

app.get('/produtos', function(req, res) {
	console.log('GET /produtos');
	res.json([{
		nome: 'Arroz',
		valor: 5
	}]);
});

app.listen(3000);
console.log('Running...');