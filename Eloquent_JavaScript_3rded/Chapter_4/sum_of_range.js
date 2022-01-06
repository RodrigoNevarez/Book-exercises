/** Brief: Builds an array of whole numbers in consecutive increments.
* Parameter start: Starting number of the range.
* Parameter end: Ending number of the range.
* Parameter step: Increments or decrements between each number.
* Return: An array containing all the numbers from start up to (could or not include) end.
* Return: Undefined, if computing range is impossible. 
*   (can't range(1, 10, -1) or range(1, 10, 0) or range(10, 1, 1))
*/
exports.range = function (start, end, step = 1) {
  let range = [];
  if (start == end) {
    return [start];
  } 
  else if (start < end) {
    if (step <= 0) return undefined;
    for (let i = start; i <= end; i += step) range.push(i);
  } 
  else if (start > end) {
    if (step >= 0) return undefined;
    for (let i = start; i >= end; i += step) range.push(i);
  }
  return range;
}

/** Brief: Computes the sum of an array of numbers.
* Parameter numbers: Array of numbers.
* Return: The total sum of the numbers.
*/
exports.sum = function (numbers) {
  let total = 0;
  for (let number of numbers) total += number;
  return total;
}
