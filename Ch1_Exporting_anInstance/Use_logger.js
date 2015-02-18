//We dont call new Logger.

var logger = require('./logger');

logger.log('This is a message');

/*
Because the module is cached every module that requires the logger module
will actually always retrieve the same instance of the object, thus 
sharing its state

This pattern is much like creating a Singleton, but it does not guarantee
uniqueness of the instance across the entire application, as in the 
typical Singleton pattern.

An extension consists in exposing the constructor used to create the 
instance, in addition to the instance itself. This allows the user to 
create a new instance of the same object, or even to extend it.

To enable this, we just need to assign a new property to the instance, 
as shown in the following:

module.exports.Logger = Logger;

Then, use the exported constructor to create other instances of the 
class

var customLogger = new logger.Logger('CUSTOM');
customLogger.log('This is a custom message');
*/
