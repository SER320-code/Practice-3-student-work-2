var http = require('http'); //include the 'http' module to be able to create server
var fs = require('fs') //for saving the respond to the file system on same path as http-client

var argv = require('yargs') //for getting user input
    .usage('Usage: node $0 --f=[text]') //the message that will be printed for help
    .demand(['f']) // require f(file) parameter
    .argv; //argv is a javaScript object that have properties representing the command line parameters.


//parameter 1 of request()
var options = {
  host: 'localhost',
  port: '3000',
  path: '/'+argv.f
}; //initalize the options as empty, set in setPath function

var callback = function(response){ //parameter 2 of request()

   var body = '';
   response.on('data', function(data) {
      body += data;
   });

   response.on('end', function() {
      console.log(response.statusCode); //log status code of response
      console.log(response.headers) //log header of response
      console.log(body);
      fs.writeFile("./response.html", body, function(err){ // creates or updates file with body
        if(err){
          return console.log(err); //if error, log error
        }
      });
   });
}
// Make a request to the server
var req = http.request(options, callback);
req.end(); //end so the socket doesn't hang up
