console.log(__filename);
console.log(__dirname);

console.log("Before Timout");
function printstuff() {
  console.log("This was from setTimout");
}
function printstuff() {
    console.log("This was from setInterval");
  }

setTimeout(printstuff, 1000);
setInterval(printstuff, 2000);

console.log("after Timeout");