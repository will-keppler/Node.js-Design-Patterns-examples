//Use logger.js

var Logger = require('./logger');
var dbLogger = new Logger('DB');

dbLogger.info('This is a message with dbLogger.info');

var accessLogger = new Logger('ACCESS');
accessLogger.verbose('This is a verbose message from accessLogger');

/*
This is cool, you make different types of the same class....or 
different types of a class with similar functionality

In the book there is a variation to this pattern that consists in 
applying a guard against invocations that dont use the new instruction.
It allows you to use the module as a factory

function Logger(name) {
	if(!(this instanceof Logger)) {
		return new Logger(name);
	}
	this.name = name;
};
*/
