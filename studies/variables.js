/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


//Let******
/** let statement declares a block scope local variable optionally initializing it to a variable.
It is limited in scope unlike the var keyword which assigns variables globally or make them available at the parent scope

****Scoping/Hoisting Rules
* let variables have theiur scope in the block which they are defined and they are available
* in any contained subblocks. The var variable is available to the entire function scope.
* let does not create property on the global object.
*/

let happy = 1;
if(happy === 1){
    let happy = 2;
}

//Const******
/** Constants/const are blocked scoped just like let. The value of const cannot be changed through reassignment
 * and it cannot be redeclared. It creates a read only declaration to a variable. Const cannot change it's data type if it's
 * a collection (object, array) or it's value if it's a simple data type.
 * 
 * ******** Scoping/Hoisting*****
 * 
 *****const are only available within the scope they are declared and their subscopes.
 */
 
 //Here is code using const:
 
 const luckyNumber = 756;
 try { luckyNumber = 87;
 } catch(err) {
     console.log(err);
 }
 /** this should print  -- typeerror to the console
 if luckyNumber were to print to the console it would still be 756*/
 console.log(luckyNumber);

/**root directory is the top level folder. It is the folder in which all other folders are in and files*/
/* Data types
***Booleans -- true/false statements -- tells us if an expression is true/false
True/false is a native */
/* Expressions produce values. Like 5 + 5 // 10 */
console.log(1,200 + 12303030300303);

/*statements -- produces behaviour. It's a way of telling javascript to do something. Like assigning a number to a vaiable. Can also produce side effects*/
var x = 5; // assigns 5 to x
console.log('hello'); //behavior -- prints hell to the console
/* for loops are also statements even though it has expressions, because it produces a behaviour --looping*/
/*console logging allows you to see in the dark. It does not show what the end user sees. It allows the coder to look
at what the code will do and see if it's working as expected*/

