// Functions
/**This section is all aboout functions and why we use them.  Please be aware of the examples
as they will provide you a better understanding of functions.*/
// What is a function? A function is a reusable block of code that accepts inputs.
                                        //   2. processes those inputs
                                        //   3. and sometimes returns a new data value
                                            
    // Parts of a function
//             1. Name
//             2. Parameters/arguments
//             3. function body
//             4. return statements
            
//             function myFunction(parameter) {
//                 functioon body
//                 return statement
//             }
            
//      All functions do not have to return
//      You can declare a variable inside a function body.
//
//
//
/**A FUNCTION STATEMENT defines a function with the specified parameters. It's also known as a function declaration. 
 * You can also use function constructor and a function expression. 
 */
 
/** Function Expression
 * 
 * A FUNCTION EXPRESSION is very similar to and is similar to a function statement
 * The difference is the function name can be omitted in function expressions to create anonymous functions.
 * It can be used as an immediately invoked function. It runs as soon as it is defined.
 * 
 */
 //
 //
 //
 
/**Parameters/arguments
//         Parameters/arguments are just placeholders for arguments that ware later passed or given to the function
//         at call time
*/
//
//
//
/**Scope & Closures
 * Scope is where you can access variables
 * Scopes - refers to what variables  are accessible and where we can access them. Variables can be defined in 2 scopes:
 *      ***Global -- accessible everywhere
 *      ***Local -- accessible in the scope they were created only
 * Closures -- denying access outside of the scope -- it keeps variables active. 
 * */
 
 //

        
// **Return statement
//         Functions have return statements.
//         *The return statement will give value to a function call. ( pulls value to parent schope)
//         *return statements can only be used in a function body
        
// ** Function Call
//         We call a function by its name, followed by parenthesis()
//         *Calling a function runs the code in the function body.
//         *Calling functions and defining a function are 2 different things
//         * Calling = firing, invoking, executing
        
// Arrow Functions
 const power = (base, exponent) => {
     let result = 1;
     for(let count = 0; count < exponent; count ++){
         result *= base;
     }
     return result;
     };
 
// // Important: Console.log and return are not the same thing
//       *return statements inside a function body returns a value or data
//       *console.log does not return. It gives an undefined. 
//
//
//This is an example of a square function
/**As you know when you square a number you multiply that number by itself. so 8 * 8 gives you 64.
The example below does just that.*/
function square(x){
    return x * x;
}    

// Can also be written like this
const square1 = (x) => {return x * x;};

// Also like this
const square2 = x => x * x;

/** This is another way to write an arrow function. This function of horn tells the computer that when it executes
or invokes the horn function to print 'toot' to the console. Printing to the console helps the developer identify bugs, quirks and 
even is a sign of success in some situations. The user does not see this.*/
const horn = () => {console.log('toot')};

//There are a myriad of actions a function can perform. This is only miniscule amount. 

