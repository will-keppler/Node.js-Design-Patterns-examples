//stateful instances --objects with a state created from a constructor
//or a factory, which can be shared across different modules.

function Logger(name) {
	this.count = 0;
	this.name = name;
};

Logger.prototype.log = function(message) {
	this.count++;
	console.log(' [' + this.name + '] ' + message);
};

module.exports = new Logger('DEFAULT');

//module.exports.Logger = Logger;
//exposes the constructor to allow users to create new instances of this
//class.
