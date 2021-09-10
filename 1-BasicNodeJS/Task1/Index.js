// Learning step
// Node Js
// Express (Hard Code)
// React + Express
// Mongo DB (CRUD)
// Express + MongoDB

// NodeJS --> It's a javascript runtime engine. It is uses javascript V8 engine in crome browser.
// npm(Node package management)  --> It is package manager so whatever dependency download, which we can download through npm.
// nvm(Node version management) -->

var http = require("http");
var du = require("./date");
// http --> It is in built package or module, which require is use for import any module.

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(`Yahoo Node Js. Current Date -- ${du.dateUtil()}`);
    res.end();
  })
  .listen(8000);

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(`<!DOCTYPE html>
//                 <html lang="en">
//                 <head>
//                     <meta charset="UTF-8">
//                     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                     <title>Document</title>
//                 </head>
//                 <body>
//                     Hello World!
//                 </body>
//                 </html>`);
//     res.end();
//   })
//   .listen(8000);

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(JSON.stringify({
//       name: "Manish Kumar",
//       place: "Amhara",
//     }));
//     res.end();
//   })
//   .listen(8000);
