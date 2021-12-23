// npm install prompt-sync
// Imports
const prompt = require('prompt-sync')();
const {loop_triangle} = require("./looping_triangle");
const {fizzbuzz} = require("./fizzbuzz");
const {chessboard} = require("./chessboard");

console.log("Enter '1' for looping a triangle.")
console.log("Enter '2' for FizzBuzz.")
console.log("Enter '3' for Chessboard.")
console.log("---------------------------")
let exercise = prompt("What exercise do you wish to see? ");

if (exercise == "1") loop_triangle();
else if (exercise == "2") fizzbuzz();
else if (exercise == "3") chessboard();
