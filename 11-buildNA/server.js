// Create our server for using app

var http = require("http");
var url = require("url");

//Organizing Code
function startserver(route, handle) {
  function onRequest(request, response) {
    var reviewData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request received for " + pathname);
    request.setEncoding("utf8");
    request.addListener("data", function (chunk) {
      reviewData += chunk;
    });

    request.addListener("end", function () {
      route(handle, pathname, response, reviewData);
    });
    // response.writeHead(200, { "Content-Type": "text/plain" });
    // response.write("Hello from our server module");
    // response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server started on localhost port 8888");
}
exports.startserver = startserver;
