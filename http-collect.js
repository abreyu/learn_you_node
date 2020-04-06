'use-strict'

const http = require('http');
const bufferList = require('bl');

var myBufferList = bufferList(function(err, internalBufferList){
    console.log(internalBufferList.length);
    console.log(internalBufferList.toString());
});

var url = process.argv[2];
	http.get(url, function(res){
    res.pipe(myBufferList);
});

/*
const http = require('http');
const bl = require('bl');

let rawData = '';

http.get(process.argv[2], function(response){
	
	response.setEncoding('utf8');
	response.on('data', function(chunk){
		rawData += chunk;
		//console.log('internal '+rawData.length);
	})

	response.on('end', function(){
        let parsedData = rawData;
	    console.log(parsedData.length);
		console.log(parsedData);

})	
});
*/

/*

soluzione 
 'use strict'
 //richiedo il modulo http
    const http = require('http')
	//richiedo il modulo bl
    const bl = require('bl')

//eseguo il get sull'argomento passato da console e passo la sua risposta alla funzione inline passando la risposta
    http.get(process.argv[2], function (response) {
		
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
	
	*/

