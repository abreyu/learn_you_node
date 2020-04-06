const http = require('http');
let rawData = '';


http.get(process.argv[2], function(response){
	response.setEncoding('utf8');
	response.on('data', function(chunk){
		rawData += chunk+'\n';
		//console.log('internal '+rawData.length);
	})


        response.on('end', function(){
        let parsedData = rawData;
	    console.log(parsedData);

})

});

/*
'use strict'
    const http = require('http')

    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)
*/


