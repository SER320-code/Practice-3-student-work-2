var http = require('http');
var path = require('path');
var fs = require('fs'); //file system module

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function (req, res){
  console.log(req.headers);
  if (req.method == 'GET') {
    var fileUrl;
    if (req.url == '/')
      fileUrl = '/index.html';
    else
      fileUrl = req.url;
    var filePath = path.resolve('./public' + fileUrl);

    var fileExt = path.extname(filePath) //get the file extension
    if (fileExt == '.html'){
      fs.exists(filePath, function(exists){
        if (!exists){
          res.writeHeader(404, {'Content-Type' : 'text/html'});
          res.end('<html><body><h1>Error 404' + fileUrl + '</h1></body></html>');

          return;
        } else {
          res.writeHeader(200, {'Content-Type' : 'text/html'});
          fs.readFile(filePath, function(err, data){
            if (err){
              console.log('Error', err.stack);
              res.statusCode = 500;
              return res.end('500 Internal Error');
            }
            return res.end(data);
          });
        }
      });
    } else { //if not a .html ext. give 404
      res.writeHeader(404, {'Content-Type' : 'text/html'});
      res.end('<html><body><h1>Error 404' + fileUrl + '</h1></body></html>');
    }
  } else {
    res.writeHeader(404, {'Content-Type' : 'text/html'});
    res.end('<html><body><h1>Error 404' + req.method + '</h1></body></html>');
  }
});

server.listen(port, hostname, function(){
  console.log('Server is running at http://localhost:3000')
});
