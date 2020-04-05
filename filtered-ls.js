const fs = require('fs');

fs.readdir(process.argv[2], function filter(err, fileList) {
	for(var i=0;i<fileList.length;i++)
		if(fileList[i].indexOf(`.${process.argv[3]}`)>-1)
           console.log(fileList[i]);
})