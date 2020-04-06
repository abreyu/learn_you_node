const fs = require('fs');

let myReadStream = fs.createReadStream('readme.txt','utf8');
let myWriteStream = fs.createWriteStream('write.txt');
let myPipeWriteStream = fs.createWriteStream('write_pipe.txt');

myReadStream.on('data', function(chunk) {
	myWriteStream.write(chunk);

});

myReadStream.pipe(myPipeWriteStream);