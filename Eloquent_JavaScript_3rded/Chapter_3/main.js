const prompt = require('prompt-sync')();
const {min} = require("./minimum");
const {isEven} = require("./recursion");
const {countBs} = require("./bean_counting.js");
const {countChar} = require("./bean_counting.js");

console.log("Enter '1' for Minimum.")
console.log("Enter '2' for Recursion.")
console.log("Enter '3' for Bean Counting.")
console.log("---------------------------")
let exercise = prompt("What exercise do you wish to see? ");

if (exercise == "1") {
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10
}
else if (exercise == "2") {
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → false
}
else if (exercise == "3") {
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4
}
