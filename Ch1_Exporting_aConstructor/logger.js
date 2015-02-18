//This pattern, we allow the user to create new instances using the 
//constructor, but we also give them the ability to extend its 
//prototype and forge new classes

function Logger(name) {
	this.name = name;
};

Logger.prototype.log = function(message) {
	console.log(' [' +this.name + '] ' + message);
};

Logger.prototype.info = function(message) {
	this.log('info: ' + message);
};

Logger.prototype.verbose = function(message) {
	this.log('verbose: ' + message);
};

module.exports = Logger;

