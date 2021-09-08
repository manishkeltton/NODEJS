const { log } = require("console");
var fs = require("fs");

var readableStream = fs.createReadStream("input.txt");
var data = "";
readableStream.setEncoding("UTF-8");
readableStream.on("data", function (chunk) {
  data += chunk;
});

readableStream.on("end", function () {
  console.log(data);
});

var writeData = "Hii... Manish";
var writeableStream = fs.createWriteStream("output.txt");
writeableStream.write(writeData, "utf8");
writeableStream.end();
writeableStream.on("finish", function () {
  console.log("write completed");
});
