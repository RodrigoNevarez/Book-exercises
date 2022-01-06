/** Brief: Builds a list structure given an array.
* Parameter array: array to build list from.
* Return: The list deriving from the array.
*/
exports.arrayToList = function ( array ) {
  // Base case: Array is empty
  if ( array[0] == undefined ) 
    return null;

  return {
    value: array[0], 
    rest: exports.arrayToList( array.slice(1) )
  }
}

/** Brief: Builds an array given a list structure.
* Parameter list: list to build array from.
* Return: The array deriving from the list.
*/
exports.listToArray = function ( list ) {
  // Base case: There are no more linked elements
  if (list.rest == null) return [list.value];
  let array = exports.listToArray(list.rest);
  array.unshift(list.value);
  return array;
}

/** Brief: Takes an element and a list and creates a new list with the 
*   element to the front of the input list.
* Parameter element: Element to add in front of the list.
* Parameter list: list to prepend to element.
* Return: A new list with the given element upfront following input list.
*/
exports.prepend = function ( element, list ) {
  return {
    value: element,
    rest: list
  }
}

/** Brief: Returns the element at the given position in the list.
* Parameter list: Input list to return element from.
* Parameter i: Index number of the list (with zero referring to the first element).
*   Refers to the number of calls to function.
* Return: Element at the given position in the list.
* Return: undefined, when there is no such element.
*/
exports.nth = function (list, i) {
  // Out of range
  if (list == null || i < 0) return undefined;

  if (i == 0) return list.value;
  return exports.nth(list.rest, i-1)
}
