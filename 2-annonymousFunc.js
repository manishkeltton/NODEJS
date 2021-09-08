// var printstuff = function(stuff) {
//   console.log(stuff);
// }

// printstuff(" Print Stuff ");

function mainFunction(anotherFunction, value) {
  anotherFunction(value);
}

mainFunction(function (stuff) {
  console.log(stuff);
}, "Hello");
