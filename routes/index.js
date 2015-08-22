var express = require('express')
var router = express.Router()
var todos = require('../models/todos')

// WRITE SOME ROUTES HERE

router.get('/', function(req, res) {
	//console.log('hey');
	res.send(todos.listPeople());
	// res.send({'body': []});
});


router.get('/:person' , function(req, res) {
	//console.log(req.query.status);
	if(req.query.status){
		res.send(todos.search(req.params.person, req.query.status));
	} else {
		if(todos.list(req.params.person)){
			res.send(todos.list(req.params.person));
		} else {
			res.status(404);
			res.send(req.body);
		}
	}
});


router.post('/:person' , function(req, res) {
	//console.log(req.params.person);
	if(req.body.name||req.body.complete){
		todos.add(req.params.person, req.body);
		res.status(201);
	} else {
		res.status(400);
	}
	res.send(req.body);
	//res.redirect('/');
});


router.put('/:person/:index' , function(req, res) {
	//console.log(req.query.status);
	//console.log(req.params.person, req.params.index);
	todos.complete(req.params.person, req.params.index);
	res.send(req.body);
});



router.delete('/:person/:index' , function(req, res) {
	//console.log(req.query.status);
	//console.log(req.params.person, req.params.index);
	todos.remove(req.params.person, req.params.index);
	res.status(204);
	res.send(req.body);
});


module.exports = router;