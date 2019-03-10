/**String Manipulation*/


/** This section will briefly cover what can be done with strings -- string mehtods. It's important to keep in mind
 * that strings are objects.
 * String methods include:
 *  **finding the length of a string
 *  ** finding the substring inside of a string
 ********** This operation is done by using indexOf*************************************************************
 ********** You can also use slice to cut around a string. *************************************************
 *  ** Changing case from lowercase to upperCase is another option.*/
 var name = "raymond";
   console.log(name.toUpperCase());
   
   /**The replace method can be used to update parts of the string. This method takes on two arguments.
   the string you want to replace and the string you want to replace it with.*/
   var streetName = "Candylicious";
   var governmentName = streetName.replace('licious', "");
   console.log(governmentName);
 

// You can use concatenation to add strings together or append strings

var greeting = "hello";
greeting += " world";
console.log(greeting); // prints "hello world"

var stopYellingOnSocialMedia = "YOU CANNOT HANDLE THE TRUTH";
stopYellingOnSocialMedia.toLowerCase(); //lowers the case of the string
console.log(stopYellingOnSocialMedia); // prints "you cannot handle the truth"

// string.length tells you how many characters in a string

// bracket notation[] can be used to determine the actual characters in a string
        return 'cat'[0]; //returns C as c is the first character in the word cat
// you can also use chart
 //       return 'cat'.charAt(1); //returns C as c is the first character