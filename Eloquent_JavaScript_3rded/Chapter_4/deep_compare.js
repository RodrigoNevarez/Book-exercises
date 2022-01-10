/** Based of a hint from Eloquent JavaScript 3rd ed */
exports.deepEqual = function (obj1, obj2) {
  if ( obj1 === obj2 ) return true;
  
  if ( obj1==null || typeof obj1 != "object" ||
       obj2==null || typeof obj2 != "object" ) return false;

  let keys1 = Object.keys(obj1), keys2 = Object.keys(obj2);

  if ( keys1.length != keys2.length ) return false;
  
  for ( let key of keys1) {
    if (!keys2.includes(key) || !exports.deepEqual(obj1[key], obj2[key]))
     return false;
  }

  return true;
}