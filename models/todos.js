// BUILD A MODULE THAT PASSES THE TESTS IN THE MODEL TEST FILE

var model = {};

var reset = function(){
	model = {};
};
var listPeople = function(){
	var people = [];
	for (var key in model){
		people.push(key);
	}
	//console.log(people);
	return people;
}

var list = function(key){
	return model[key]
}

var search = function(key, status){
	var results = [];
	var completed = null;
	//console.log(status);
	if (status === 'complete'){
		completed = true;
	}
	if (status === 'active'){
		completed = false;
	}
	for (var i = 0; i<model[key].length; i++){
		// console.log(model[key][i].complete, completed);
		// console.log(model[key][i].complete == completed);
		if(model[key][i].complete == completed){
			results.push(model[key][i]);
		}
	}
	return results;
}

var add = function(key, val){
	var val = val;
	val.complete = false;
	if(model[key]){
		model[key].push(val);
	} else{
		model[key]=[val];
	}
}

var complete = function(key, num){
	model[key][num].complete = true;
}

var remove = function(key, num){
	//console.log(model[key][num]);
	model[key].splice(num,1);
	//console.log(model[key][num]);
}

module.exports = {
  reset: reset,
  listPeople: listPeople,
  list: list,
  add: add,
  complete: complete,
  remove: remove,
  search: search
}
