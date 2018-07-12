var http = require('http');
var hostname = 'localhost';
var port = '3000';


var server = http.createServer((req, res) => {
  var body = [];
  req.on('data', (data) => { //take data from input stream
    body.push(data);
  });
  req.on('end', () => { //concat it to the response
    body = Buffer.concat(body).toString();
    res.end(body);
  });
})

server.listen(port, hostname, function(){
  console.log('Server is running!');
});
