

var EventEmitter = require('events').EventEmitter;
var fs = require('fs');

function findPattern(files, regex) {
	var emitter = new EventEmitter();
	files.forEach(function(file) {
		fs.readFile(file, 'utf8', function(err, content) {
			if(err)
				return emitter.emit('error', err);

			emitter.emit('fileread', file);
			var match = null;
			if(match = content.match(regex))
				match.forEach(function(elem){
					emitter.emit('found', file, elem);
				});
		});
	});
	return emitter;
}

/*
The function has three events: error, fileread, and found
*/

findPattern( 
	['fileA.txt', 'fileB.json'], /hello \w+/g )
	.on('fileread', function(file) {
		console.log(file + ' was read');
	})
	.on('found', function(file, match) {
		console.log('Matched "' + match + '" in file ' + file);
	})
	.on('error', function(err) {
		console.log('Error emitted: ' + err.message);
	});

/*
This is cool. The test files are in the directory so each of the events
will be emitted, except for the error. If you want to see the error
delete one of the files fileA.txt, or fileB.json.
*/
