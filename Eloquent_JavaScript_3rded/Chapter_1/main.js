// npm install prompt-sync
// Imports
const prompt = require('prompt-sync')();
const {loop_triangle} = require("./looping_triangle");

console.log("Enter 'one' for looping a triangle.")
console.log("---------------------------")
let exercise = prompt("What exercise do you wish to see? ");

if (exercise === "one") loop_triangle(); 