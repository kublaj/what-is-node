var http = require('http');
var fs = require('fs');
var contents = "";

// get data from GET request
// write data to hard drive
// log data to console

getDataThenDoSomethingElse(console.log);

function getDataThenDoSomethingElse (callback) {
  http.get('http://www.azlyrics.com/lyrics/mya/caseoftheexwhatchagonnado.html', function(response){

    response.on('data', function(chunk) {
      contents += chunk;
    });

    response.on('end', function(){
      fs.writeFile('./contents.html', contents);
    });
  });

  callback(contents);
}
