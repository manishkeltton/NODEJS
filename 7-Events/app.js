var events = require("events");
var eventEmitter = new events.EventEmitter();

var ringbell = function () {
  console.log("Ring ring ring");
};

eventEmitter.on("doorOpen", ringbell);
eventEmitter.on("bellrings", function (massage) {
  console.log(massage);
});
eventEmitter.emit("doorOpen");
eventEmitter.emit("bellrings", "Well");
