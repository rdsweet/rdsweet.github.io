// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  /*Input array. Loop forward over the array and print its values using console log*/
  for(var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  /*Input array, 
  Output -- loop backwards over the array
  print its values
  constraints go backwards
  edge case infinity*/
  
  for( var i = array.length -1; i >= 0; i--){
    console.log(array[i]);
    
  } 
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  /*Input -- object */
  /* access the keys in an object*/
  //put keys in an array
  //return the array
  const array = [];
  for (var key in object ){
  array.push(key);  
    }
  return array;
  /*Output -- return an Array with object keys
  constraints -- objects could have strings and be named key so use dot.notation*/
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  /*Input -- object
  Output look at all the keys
  print the keys to the console
  constraints
  Edge cases
  */
  
  for(var key in object){

  console.log(key);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  /*given an input object{}
  loop over the objects and its values
  return an array[] of values
  Push the values in the array*/
  const values = []
  for (var key in object) {
    
   values.push(object[key]);
  
  
  // YOUR CODE ABOVE HERE //
} return values;
}
/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object) {
    var values = object[key];
  console.log(values);
  }
  /* given an object 
  loop over the object
  print the values
  console.log the values
  */
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  /* given an Object
  loop through the object
  get the key/value pairs
  return length of its key/value pairs*/
const arrayLength = [];
  for (var key in object) {
   arrayLength.push(object[key]);
  }
   return arrayLength.length
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  /* given an object
  push the values in the object
  loop over the object in reverse
  print the values in reverse
  use console log*/
  var reverseValues = [];
  for(var key in object){
  reverseValues.push(object[key]);
  } for(var i = reverseValues.length -1; i >= 0; i--){
  console.log(reverseValues[i]);
}
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.getObjectValues = getObjectValues;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
