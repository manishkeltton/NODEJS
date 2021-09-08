var querystring  = require('querystring');


function home(response, reviewData) {
  console.log("Executing 'home' handler");
  var htmlfile =
    "<html>" +
    "    <head>" +
    '        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
    "    </head>" +
    "    <body>" +
    '        <form action="/review" method="post">' +
    '           <textarea name="text" id="" cols="30" rows="10"></textarea>' +
    '           <input type="submit" value="submit text" />' +
    "        </form>" +
    "    </body>" +
    "    </html>";
  response.writeHead(200, { "content-type": "text/html" });
  response.write(htmlfile);
  response.end();
}

function review(response, reviewData) {
  console.log("Executing 'review' handler");
  response.writeHead(200, { "content-type": "text/plain" });
  response.write("You review is "+ querystring.parse(reviewData).text);
  response.end();
}

exports.home = home;
exports.review = review;
