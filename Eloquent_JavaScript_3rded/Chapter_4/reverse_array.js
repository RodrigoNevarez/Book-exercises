/** Brief: Builds an new array out of another, with its contents in inverse order.
* Parameter array: array to invert order.
* Return: A new array that has the same elements in the inverse order.
*/
exports.reverseArray = function ( array ) {
  let inverse = [];
  for (let element of array) inverse.unshift(element);
  return inverse;
}


/** Brief: Modifies the order of an array's elements to its inverse.
* Parameter array: array to invert order.
*/
exports.reverseArrayInPlace = function ( array ) {
  let copy = undefined;
  for (let i = 0; i <= Math.floor(array.length / 2); ++i) {
    copy = array[i];
    array[i] = array[array.length-1-i];
    array[array.length-1-i] = copy;
  }
}