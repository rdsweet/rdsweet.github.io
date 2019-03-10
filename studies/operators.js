/** -----Operators

This section is about operators. Operators are symbols that are used to perform an operation.

// Assignment operators
/* An assignment operator assigns a value to its left operand
based on the value of its right operand. */

var u = 8; //u is assigned 8
console.log(u); // prints 8

/* if you had the assigment operator to an arithmetic operator 
You do the operation plus the assignment. */
u += 1; // u is assigned 9
console.log(u); // prints 9
u-= 1; // u is assigned 8
console.log(u); // prints 8
u *2; // u is assigned 16
console.log(u); //prints 16




// Arithmetic operators

console.log(2 + 1); // prints 3
console.log(2 - 1); //prints 1
console.log(1 * 2); // prints 2
console.log(4 / 2); // prints 2


// Comparison operators
// Comparison operators compare two values and evaluate to a Boolean, true or false.
// There are binary and strict comparison operators

//*** Binary Comparison Operators
console.log(1 > 2);
console.log(1 + 4 < 5 -3);
console.log(1 <= 2);
console.log(400 >= 2000);

// *** Modulo: returns the remainder of a division operation %
console.log(5 % 2); //prints 1
console.log(10 % 2); //prints 0


// ++ as 1 to the value
 var z = 1;
 z = z + 1;
 z++; //same as line 45
 console.log(z); //prints 2
 
 // -- subtracts 1 from the value
 var x = 1;
 x--;
 console.log(x); //prints the value of 0 whereas 1 - 1 = 0 


//** Strict Comparison Operators
        // *Strictly equal to ===
        // *Strictly not equal to !==
        // *Loosely equal to ==
        // * Loosely not equal to !=
        
    console.log(2 === 2);
    console.log('2' == 2); //evaluates to true even though one is a string it's loosely equal
    console.log(3 !== 2);
    console.log('3' != 2);




// Logical operators

// *** && is the And Operator: both conditions must resolve to be true
// *** || is the Or operator: one of two conditions must resolve to be true
// *** ! is the bang operator: flips the truthiness of the value

    console.log(1 < 2 && 1 > 0); // prints true, because Both conditions are true
    console.log(1 > 2 || 1 > 0); // prints true, because One of the conditions is true
    
/* The double bang !! is just two bang operators together. It coerces a value to Boolean.
If it was falsey (0, null, undefined, etc) it will be false, otherwise true. */
console.log(!!1); //prints true
console.log(!!-1); // prints true
console.log(!!0); // prints false
//    
//
//
// Unary operators (!, typeOf, -)
// * The Unary operator assigns a single value/data type to a variable.
    var y = 2;
    console.log(-y);
    console.log(2 -2);
    
//    *** typeOf tells the type of value the data type represents //
    console.log(typeof 1); // prints 'number'
    console.log(typeof "Raymond"); // prints 'string'
    console.log(typeof (1 < 2)); // prints 'false'
//
// negation, the bang operator: flips the truthiness of a value //
    console.log(!true); //not true = true
    console.log(!false);//not false  = true
    console.log(!null); // not null
    
 var contact;
    console.log('contact');
    contact = 'Raymond';
    console.log('contact');
    contact = null;
    console.log(contact);
    
    if(contact) {console.log("we have contact");}
    contact = 'Taylor';
    console.log(contact);
    
    if(contact) {console.log('we have contact');}
    
    
// Ternary operator(conditional) (a ? b : c)
/* The ternary operator is the only javascript operator that takes three operands.
It is often used as a shortcut to the if statements*/

/*Syntax condition ? exprT : exprF

condition  An expression whose value is used as a condition

exprT/exprF Epressions with values of any type
*/
//If the condition is true it returns the value of exprT if false it returns exprF

/*Besides false the condition can be null, undefined, NaN, 0, an empty string"", 
if condition is any of these it returns exprF*/

var age = 26;
var strongestBeverageOption = (age >= 21) ? "Beer" : "Juice";
console.log(strongestBeverageOption); //prints "Beer"