var RandomStream = require('./randomStream');
var randomS = new RandomStream();

randomS.on('readable', function(){
	var chunk;
	while((chunk = randomS.read()) !== null) {
		console.log("Chunk received: " + chunk.toString());
	}
});
