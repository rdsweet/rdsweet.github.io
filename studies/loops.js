// ******Looping ****

/**This section is about looping. Looping helps us search for data in collections, perform functions on data 
and even helps us eliminate data from collections.
It's quite simple we tell our code to perform a behavior to each or the odd numbered or even numbered
or every 5th etc index or value point or key value pair in terms of objects. Loops can go forward and backwards.
It is not always the most efficient way to perform this task, but it's a great basic tool. */

//Simply put:
    //    * Iterate: to perform or utter repeatedly
      //  *This construct is important so we can perform an action s specific number of times
        
        
/* **** 3 Main Loops
                    
        *While loops
        *For loops
        *For-in loops */
        
//* *Fancy Jargon for Loops
//        *Start Condition: The condition set to tell your loop where to begin
  //      *Stoppign Condition: The condition set to tell when your loop should stop based on a boolean value
    //    *Increment: How much we will increase interaction
        
        
 /*       ** for loop
            for(var i = 0 <--- starting congition; i < 5 <--- stopping condition; i++ <--- incrementer)
            
            ******Do not put a return in your for loop or it will not go through entire array []
            
 */
 var step;
 for(step = 0; step < 5; step++){
     //runs 5 times
     console.log("I enjoy walking");
 }
 //
 
 /**       ** for -in loop
 The for in loop is used for iterating over an object. It looks for keys and then if necessary their values. 
            for (var key in object) -- strictly used for Objects
            var object = {firstName: "Justin", lastName: "Connor", homeTown: "Loray"}
            
            for (var key in object) { 
                console.log(key);
                console.log(object[key]);
                */
    
    function veganSnacks(beginMonthlist, category){
        var list = ' ';
        for(var food in beginMonthlist ){
            list += category + '.' + food + '=' + beginMonthlist[food];
        }
        return list;
    }
    //           
    
    //
    
    /**while loops are used as long as a condition is met. If the condition is met the loop will move 
            to the next iteration and so forth until the condition is no longer true. 
            
    /*      ** while loop
            var count = 0;
            while (count < 5) <--- stopping condition {
                console.log(count);
                count ++; <--- incrementer
            } */
            
            var carrots = 0;
            var kale = 0;
            while (carrots < 3){
                carrots ++;
                carrots += kale;
            }
            
            
//do while loops
//The do while loops runs until the condition is false
    
            var sleep = 0;
            do { sleep += 1;
            console.log(sleep);
            //as long as sleep is < 5
            } while
                (sleep < 5);
            
            