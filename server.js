var http = require("http");
var url = require("url");
var output;
function start(route) {
  function onRequest(request, response) {
    var start = +new Date();
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
  
	var username=fetchauth();
    route(pathname,username);

    response.writeHead(200, {"Content-Type": "text/plain"});
    //response.write("Hello World");
	var end = +new Date();
	response.write("Done in " + (end-start) + " miliseconds");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
   
}

exports.start = start;
