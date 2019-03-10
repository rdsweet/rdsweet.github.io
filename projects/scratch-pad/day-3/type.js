// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
 /*given an input value
 return true if the value is an array
 false if otherwise
 if input = array return true
 if otherwise return false*/
 if (Array.isArray(value)) {
     return true;
 } else {
     return false;
 }
 
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
   /* given an input value
      if its an object intended as a collection
      return true
   if not
   return false
   control for null
   not a Date
   edge case do not use type of
   */
   
   if (value === null) {
       return false;
   } else if (value instanceof Date) {
       return false;
   } else if (Array.isArray(value)){
       return false;
   } else if (typeof value === "object"){
       return true;
       
   } else{ 
       return false;
   }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    /* if value is an Array
    return true
    if value is Object
    return true
    if value is number
    return false
    if value is null
    return false
    if value is Date
    return false
    if value is anything else including strings
    */
    
    if(value === null){
        return false;
    } else if (value instanceof Date) {
        return false;
    } else if (Array.isArray(value)){
        return true;
    } else if (typeof value === "object" ) {
        return true;
    } else{
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    /* if given an input return type of as string
    */
   if (typeof value === "string"){
       return "string";
   } else if (value instanceof Date){
       return "date";
   } else if (value === null) {
       return "null";
   } else if (value === undefined){
       return "undefined";
   } else if (typeof value === "number"){
       return "number";
   } else if (typeof value === "boolean"){
       return "boolean";
   } else if (Array.isArray(value)){
       return "array";
   } else if (typeof value === "function"){
       return "function";
   } else {
       return "object";
   }
   
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
