// ***** Data Types

/**This section is about Data Types. In order, for your computer or software to perform any behaviors
or actions it requires data or information. That information comes in two different ways: 

1. Primitive 
2. Complex.
**/
//


/** Simple/Primitive
/*    Strings -- character data. a set of characters surronded by quotation. If using a keyword in a string be 
careful to put the quotation marks. "retunr" "1" "help me" --space is a character
// *** Numbers -- Numeric data -- 1, 2, 3, 4, 5, 6, 7
// *** Boolean -- has 2 values 1. true or 2. false
// *** NaN -- Not a number (When console logging  typeOf NaN; //=>"number" prints to the console even though it's not a number)
// *** Undefined -- no value, incept, uninitialized
// *** Null -- no value, nullified by programmer
**/
//
//
//
//*** Complex Data Types
 //     *Object()
 //      *Array[] -- Arrays set of values ordered in an index 0 to infinity encapsulated in brackets []
//      *Function()
//
/** Array [] - An array literal is a complex data type that is used to store data.
Every value in the the list has an index - the position of the value in the list
1st value on the list has an index of 0. The 2nd value has an index of 1. 
The data is separated by commas. 
Arrays can contain references to any other data type -- booleans, objects, strings, null, undefined etc. some of the objects 
can even be empty.
This is an array literal []*/
var myArray = []; //This is an array literal assigned to a variable named myArray
myArray = ['a', 'b', 'c', {}, []];
/**index is a position inside an []array
bracket notation - returns the value in the array at the index provided

  important terms concerning Arrays
         list/collection - a more specific term to describe an array
         method () - functions on an object literal
          .length property -- arrays have a length property myArray.length;
          .length property -- returns the number of values in the array
          .push() is a method on the array to add value to the array at the end of the array
*/        

/** OBJECT Definitions
    An object literal {} is a complex data type that is used to store data {}
    *Usually a a collection of data relating to a single object identity stored in curly brackets {}
    *similar to arrays, but instead of using inices, values are stored at keys in objects
    *objects can contain references to any other datatype this includes strings, numbers, booleans, other arrays
      and objects and functions. someObject(datatype){keys/properties: values, keys/properties2: values}
    * myObject = {key1: '', key2: ''}; 
 key/value pairs a pair of key/values in an object
     *Properties - refers to key/value pairs
     *bracket notation - returns the value in the object at the provided key/value object.key[]
     *Dot Notation - returns the value in the object at a literal key
      * Objects do not have a length property
     *Every value has a corresponding key. You can almost think of it like a dictionary
     where every word has a definition
     Similar to an array, in which objects/arrays can grow indefinitely
    Objects use for-in loops
*/
    // examples:
    // var myObject = {key1: "a", key2: "b"};
    // myObject['key1']; //braccket notation gives "a"
    
    
    // myObject.key2; // dot notation gives "b"
    

//
// Complex values aggregate other values and are of indefinite size
// Copy by reference when assigning or passing, complext data types are passed by reference
//
//
//
//**** Primitive Types vs Complex Types

// var age = 5;
/* Variables can hold the actual value of primitive types. 
But only hold references to values of complex types.
*/

// ***   ***add to an object
 var myObject = { one: 'a', two: 'b'};
            myObject.three = 'c';
            
// complex types copied by reference
// 
//
var a = {one: "foo"};


/* Here the value stored in b is a reference to the value stored in a- 
they now both point to the same object */
        var b = a;
// changing the value at b effects all references, because the value is reference to the same object
        b.one = 'bar'; //prints "bar"
 //       
//
// ***Passing values to a function call 
      function doSomething(z){
          z += 1;
      }
      var act = 1;
      doSomething(act);
      //Prints 1, not 2, as the value is copied when passed to the invocation of doSomething
      
      console.log(act);

