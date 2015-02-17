//The most basic method for exposing a public API is using named exports.
//which consists of assigning all the values we want to make public to 
//properties of the object referenced by exports (or module.exports)
//The resulting exported object becomes a container/namespace for a set
//of related functionality.

exports.info = function(message){
	console.log("info: " + message);
};

exports.verbose = function(message){
	console.log("verbose: " + message);
};
