const prompt = require('prompt-sync')();
const {reverseArray} = require("./reverse_array");
const {reverseArrayInPlace} = require("./reverse_array");
const {range} = require("./sum_of_range");
const {sum} = require("./sum_of_range");
const {arrayToList} = require("./list");
const {listToArray} = require("./list");
const {prepend} = require("./list");
const {nth} = require("./list");

/***** This code was extracted from Eloquent JavaScript 3rd edition sandbox */
// load dependencies
require("./code/load")("code/journal.js", "code/chapter/04_data.js");

exercise = 2;

//console.log("Enter 'ex' for Eloquent JavaScript's example.")
//console.log("---------------------------")
//let exercise = prompt("What exercise do you wish to see? ");

if (exercise == "ex") {
  /***** This code was extracted from Eloquent JavaScript 3rd edition sandbox */
  for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < -0.1) {
      console.log(event + ":", correlation);
    }
  }
  // → brushed teeth: -0.3805211953
  // → work:          -0.1371988681
  // → reading:        0.1106828054
} 
else if (exercise == "1") {
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55
} 
else if (exercise == "2") {
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]
} 
else if (exercise == "3") {
  console.log(arrayToList([10, 20, 30]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20
} 
else if (exercise == "4") {
  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true
}
