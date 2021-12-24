/** Brief: Determines if a number is even.
 * Parameter number: Whole number.
 * Return: True or False.
*/

exports.isEven = function (num) {
  if (num == 0) return true;
  if (num == 1) return false;
  return num < 0 ? exports.isEven(num + 2) : exports.isEven(num - 2);
}
