/** Brief: indicates how many uppercase “B” characters there
* are in the string
* Parameter str: string to count B's from.
* Return: Number of B's in string 
*/
exports.countBs = function (str) {
  c = 0;
  for (let character of str) if ( character == "B" ) ++c;
  return c;
}

/** Brief: indicates how many "char" characters there
* are in the string
* Parameter str: string to count chars from.
* Parameter char: character to count.
* Return: Number of "char" in string 
*/
exports.countChar = function (str, char) {
  c = 0;
  for (let character of str) if ( character == char ) ++c;
  return c;
}