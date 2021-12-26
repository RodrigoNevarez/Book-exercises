const prompt = require('prompt-sync')();

// load dependencies
require("./code/load")("code/journal.js", "code/chapter/04_data.js");

console.log("Enter 'ex' for Eloquent JavaScript's example.")
console.log("---------------------------")
let exercise = prompt("What exercise do you wish to see? ");

if (exercise == "ex") {
  // ********* This code was extracted from Eloquent JavaScript 3rd edition sandbox *********
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
