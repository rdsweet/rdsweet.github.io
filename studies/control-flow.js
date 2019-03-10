

//Control Flow

// This section is about what I know about control flow. Control flow is the order in which code is run. From the first file to the last.
// There are two ways that can interupt or change the course of Control Flow: conditionals and loops.

// A real life example is when customers are signing up for new membership they can complete the entire form. A bot/code will 
// be created to validate or loop through to check the form and a conditional is used if valid information is left blank.

//Below is an example of a conditional

var newMember = function(name, address, zip){
    if(name === undefined){
       let noName = prompt("You must enter a name");
    }
};

//** ***Conditions*****
        // * if statement- using the keyword if to check for a specific condition
        // *Runs the code wrapped in curly braces {} only if a condition is true
        // *The condition is any boolean expression
        //         a. 1 === 1  1 is strictly equals to 1
        //         b. 1 !== 1  1 is not equal to 1
        //         c. 1 >= 1   1 is greater than or equal to 1
        //         d. 1 <= 1   1 is less than or equal to 1
                
        /* *The condition being checked must be inside parentheses()
          for example if (1 === 1)*/

    
    //codeblock: A space where a specific set of code can/will execute
    //Evaluate: what a line of code will resolve to
    /*Conditional: the part of the if statement that determines if the code will run "based
    on boolean values"*/
    //keywords: a specific word in javascript that has a specific purpose and cannot be used otherwise
    //comparison operator returns a logical value based on whether the comparison is trure of false
    
    /* else if statement -- using the keyword else if to check for a specific condition
            *just like if statements it runs the code wrapped in curly braces {} only if a condition is true
            *But only if the initial statement is false
            *Again just like if the condition is any boolean value (true/false) or any boolean expression
            ie (1 === 1) or (1 !== 1)
            the condition being checked must be inside the parentheses */
            
            /*        else if statement examples
                        If (some condition here) {
                            run some code here; 
                            console.log('this code ran');
                        } else if (another condition here) {
                            run some code here if this condition is true;
                        } else {
                            return something here
                        } */
                        
        
                        
                        
            /*Behind each conditional is a code block that we can use to execute code. A mantra
            to keep in mind with using if, else if statements*/
            // keep in mind that when a block of code executes the rest of the chain is ignored
            /* So if you have a conditional that can be true in 2 separate cases, only one block
               of code will rull, and that is determined based on the structure. If else if statements
               read from top to bottom. */
               
            /* **** Else statements
                *else statment - using the keyword else that runs a block of code if all other conditions are false
                * So if all other conditions are false, this is the default
                * since else statements are defaults - there is no condition to check
                * The only thing that follows the keyword else is a block or body of code in curly braces {}
                */
                
/**Loops are discussed in full detail in the loop section. But here's is an example of a loop. This code tells us to add
the numbers in the array. Starting at the 1st position or 0 index.
So, the function will at 1 to 2 then add 3 to 3, then 6  to 4 then 10 to 5, then 15 to 6 then 21 to 4
then 25 to 7 then 32 to 10 then 42 to 11. Then it will print 53 to the console.**/

let numberArray = [1, 2, 3, 4, 5, 6, 4, 7, 10, 11];

var loopExample = function(array){
    for(var i = 0; i < numberArray.length; i++){
        i +=
        console.log(i);
    }
};

