//One of the most popular module definitions; consists of reassigning
//the whole module.exports variable to a function.
//Its main strength is the fact that it exposes only a single
//functionality, which provides a clear entry point for the module.

module.exports = function(message){

	console.log("info: " + message);
};


//The following code shows you how to extend the module using the 
//exported function as a name space

module.exports.verbose = function(message){
	console.log("verbose: " + message);
};
