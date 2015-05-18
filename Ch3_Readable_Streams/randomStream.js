var stream = require('stream'),
	util = require('util'),
	chance = require('chance').Chance();

//Constructor
function RandomStream(options){
	//Call the constructor of the parent class to initialize
	//its internal state
	stream.Readable.call(this, options);
}
//Inherit from stream.Readable
util.inherits(RandomStream, stream.Readable);

//implement _read() function
RandomStream.prototype._read = function(size) {
	//Get a random string
	var chunk = chance.string();
	console.log('Pushing chunk of size: ' + chunk.length);
//push the random string to internal reading buffer
	this.push(chunk, 'utf8');

	if(chance.bool({likelihood: 5})){
//terminate stream by pushing 'null' onto stream
		this.push(null);
	}
}
module.exports = RandomStream;
