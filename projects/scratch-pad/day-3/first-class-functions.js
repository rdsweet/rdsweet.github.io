// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/**
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
/*if given an input base test string or number
greater than the base
is given value > base*/

  {
   /* return function that tests a given value*/
   return function(value){
    return value > base;
};
}  
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
// / given an input base to test against
// could be a string or a number
// return a function
// tests if value is less than base*/
{
    return function(value){
        return value < base;
};

}    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    /*if given a starts with character
    return function to see if string startswith character
    character
    single character
    find the character in the word
    compare the two
    return function*/
    
    
         
    return function(stringGiven) {
        const stringGivenFirstCharacter = stringGiven.toLowerCase().charAt(0);
        const lowerCaseStartsWith = startsWith.toLowerCase();
         return stringGivenFirstCharacter === lowerCaseStartsWith;
    };

       
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
   /*given a single character
   return function compares character at the end of string
   with the given character
   ensure case is okay
   Input ends with character and string
   Output comparison of the last character
   return function boolean
   Constraints case insensitive*/
   return function (stringGiven) {
       const stringGivenLowerCase = stringGiven.toLowerCase();
       const stringGivenLowerCaseLastLetter = stringGivenLowerCase[stringGivenLowerCase.length- 1];
       return stringGivenLowerCaseLastLetter === endsWith.toLowerCase();
   };
   
   
   
    
    
    
    // YOUR CODE ABOVE HERE //
}

/* 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    /* given an array of "strings"
    and a function designed to modify a string
    return an array of the strings modified.
    input array of strings and a modifier function
    output return and array of "strings" modified*
    assign output a new variable*/
    
    //* return []modified
    //step 1 create an array
    const arrayOfModifiedStrings = [];
    
    // step 2 modify the created array
    // loop over the strings 
    for(var i = 0; i < strings.length; i++) {
        
        // so that each iteration considers an individual string
        var individualString = strings[i];
        
        // given the individual string we want to apply modify function to that string
         var modifiedString = modify(individualString);
        
        // given the newly modified string add it to the arrayOfModifiedStrings
       arrayOfModifiedStrings.push(modifiedString);
    }
    // step 3 return the created array
    return arrayOfModifiedStrings;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, rehat end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //turn true if ALL Strings pass the test.
 /*Imagine you had a list of names, and you wanted to test they all 
 begin with "C", or they are all exclaimations t
  //given an array of strings
  // given a function designed to test the String
  // return a Boolean
  // return false if all Strings do not pass the test

  // loop over the Strings
        // pass them to the tests
        */
           for(var i = 0; i < strings.length; i++) {
        // how to pass an array of strings to a test
            if (!test(strings[i])){
                return false;
            }
            
           }
           return true;
        //     // Get a specific string from strings
        //     const testString = strings.get(i)
        // if the function fails the test the value will be false
        
           
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
    }