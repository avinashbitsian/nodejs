var http = require("http");
var url = require("url");
var fs = require('fs');
path = require('path');
function start(route) {
  function onRequest(request, response) {
    var start = +new Date();
    var data = '';

    request.on('data', function (chunk) {
      data += chunk;
    }
    );

    request.on('end', function () {

      var values = JSON.parse(data);
      var username = values.split(" ")[1];
      var pass = values.split(" ")[2];
      values = values.split(" ")[0];
      console.log("Request for " + values + " received.");
      console.log("username " + username);
      console.log("password " + pass);
      route(values, username, pass);
    }
    );



    //var pathname = url.parse(request.url).pathname;

    //response.writeHead(200, {"Content-Type": "text/plain"});
    //response.write("Hello World");
    var end = +new Date();
    //response.write(" Done in " + (end-start) + " miliseconds \n");
    response.end();
  }


  http.createServer(onRequest).listen(8585);
  console.log("Server has started.");
}

exports.start = start;
