// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(anything){
    return anything;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(anyvals){
    var results = "";
    if(Array.isArray(anyvals)){
        results = 'array';
    } else if ( anyvals === null) {
        
        results = 'null';
    } else {
        results = typeof(anyvals);
    }
    return results;
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function (array, number) {
    var result = [];
    if (_.typeOf(array) !== 'array') {
        return [];
    } else if (!number && number !== 0 && _.typeOf(number) !== 'number') {
        return array[0];
    } else if (number > array.length) { 
        return array;
    } else {
        for (let i = 0; i < number; i++) {
            console.log(array[i]);
            result.push(array[i]);
        }
    return result;
    }
};




// _.first = function(array, number){
//     var result = [];
// //   if array is not an array return []
// if(_.typeOf(array) !== "array"){
//     return [];
// } else if(!number && number !== 0 && _.typeOf(number) !== "number"  ) {
//     return array[0];
// } else if (number > array.length) {
//     return array;
// } else {
//     // loop through array
//     // give the index * number of indices
//     // constraints number is negative
//     // number is greater than array
    
//      for (let i = 0; i < number; i++){
        
//     var newArrayResult = [];
//     newArrayResult.push(array[i]);
    
//     }  return newArrayResult;
    
// }
// };


//   if number is not given or not a number
//   return just the 1st element in array
//   otherwise return the 1st number items of array
//   constraints if number is -negative
//   if number is greater than array.length
//};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

// _.last = function(array, number) {
//     var results = [];

//if array is not an array return array
// if (_.typeOf(array) !== array){
//     return [];
// }
// //if number is not given or not a number 
// else if (!number && number !== 0 && _.typeOf(number) !== 'number') {
//         return array[array.length -1];
//     } else if (number > array.length) { 
//         return array;
//     } else {
//         for (let i = array.length - number; i < array.length; i++) {
//             console.log(array[i]);
//             results.push(array[i]);
//         }
//     }return results;
// };

_.last = function (array, number) {
    var result =[];
    if (_.typeOf(array) !== 'array' || number < 0) {
        return [];
    } else if (!number && number !== 0 && _.typeOf(number) !== 'number') {
        return array[array.length - 1];
    } else if (number > array.length) {
        return array;
    } else {
        for (let i = array.length - number; i < array.length; i++) {
            result.push(array[i]);
        }
    return result;
}
};


// return the last element in array
// else return the last number itesms of array

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    //return the index of array that is the first occurrance of value
    for(var i = 0; i < array.length; i++){ 
        if(array[i] === value){
            return i;
        } 
    } 
    return -1;
};
   // indexof array = value
  //  return -1 if value is not in array
    //donot use [].indexOf()!
    // What if array has multiple occurances of val
    // what if val isn't in array return -1
    
    
    
    

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/


// function name _.contains
// paramaters (array and value)
// if array contains value return true
// return false otherwise
_.contains = function(array, value){
    for (var i = 0; i < array.length; i ++){
        
        return array.includes(value) ? true : false;
        
    }
     
    // if (array.includes(value)){
    //     return true;
    };
    
    // return false;


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

// function name _.each
// paramaters collection function
// if collection is array call function with each element
// so loop through each function
// else if object call function once for each property with arguments
//             property's value, it's key, collection

_.each = function(collection, function1){
    //debugger;
    //console.log(collection);
    if (Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++){
            
            function1(collection[i],i,collection );
        }
        
        } else {
       // debugger;
        for (var keys in collection) {
            function1(collection[keys], keys, collection);
        }
    }
};








/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
// function is called unique
// has one parameter array
// return new array of all elements
_.unique = function(array){
var result = [];
for(let i = 0; i < array.length; i++) {
    if (_.indexOf(result, array[i]) === -1) {
        result.push(array[i]);
}
}
console.log(result);
return result;
};
/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, action){
    var newArray = [];
    // call function for each element in array passing the
    for(var i = 0; i <array.length; i++){ 
        if(action(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
    };
    // arguments(element, index, arry.)
    // return a new array
    // if function was true push in new array

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, action){
    
   return  _.filter(array,function(value, index, collection){
       if(action(value, index, collection) === false){
           return true;
       }
       
            });
};   
    


   // call function for each element in array passing the arguments
   //return a new array of elements
//   var newArray = [];
//   for (var i = 0; i < array.length; i++){
//       _.filter(array,action)
//   } if()
//           return newArray.push(array[i]);

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, action){
    //debugger;
    var newArray = [];
    //console.log("hello");
        if(_.filter(array, action)){
            newArray.push( _.filter(array,action));
            newArray.push(_.reject(array, action));
            }
        
          return newArray;
};
        
        
    

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
// function _.map
//parameters of the function (collection, function)
_.map = function(collection, function2){
    var newArrayResults =[];
//if collection is an array call function
if (Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++){
            
            newArrayResults.push(function2(collection[i],i,collection ));
        }
        } else {
    for (var key in collection) {
           newArrayResults.push(function2(collection[key], key, collection));
    }
    }
return newArrayResults;
    
};



//use parameters element, index, collection
//if collection is object 
//call function using value key collection as parameters
//put all the values in the array. 

//     let newArray = [[], []];
   
//     newArray.push();
    
    
//     //if(Array.isArray(collection))
// };

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
//function name pluck
//parameters/arguments array of objects &
//a property
//return the values in an array
_.pluck = function(objArr, prop){
     return _.map(objArr, function(value, index, collection){
         return value[prop];
     });
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
//declare function _.every
//parameters- (collection, func)
//call function for every element fo collection with the parameters 
//current element, index, collection
// if collection is an object function should be current value, current key, collection
//map function will accomplish this
//return value of clling function for every element is true return true
//if even one of them returns false, return false
//if function is not provided return true if every element is truthy otherwise return false
_.every = function(collection, action){
    var newArray = [];
    _.each(collection, function(element, index, collection){
        //if action is not a function
        //return true
        if(typeof action !== 'function'){
            if(!element){
                newArray.push(element)}
        } else if (!action(element, index, collection)){
            newArray.push(element);
        }
    });
    if(newArray.length > 0){
        return false;
    } else {
        return true;
    }
        };


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
// _.some = function(collection, action){
//     return _.every(collection, function(element, index, collection){
//         if(action(element, index, collection)){
//         return true;
//         }
// return false;
// });

// };
_.some = function(collection,func){
    var newArray = [];
     _.every(collection,function(element, index, collection){
         if(typeof func !== "function"){
             //test the element
             //checking to see if the element is false
             if(element){
            //push false elements into new array
            newArray.push(element);}
         }
         //if type of func is !== function
         //if action call returns false EVEN once, return false, push element into new array
         // checking to see if the return value is false
        else if(func(element, index, collection)){
            //push false elements into new array
            newArray.push(element);
        }
    }); 
    // is  there anything in the array
    
    if(newArray.length > 0){
        return true;
    }
    // }else {
        return false;
    // }
};

// _.some = function(collection, action){
//     var newArray = [];
//     _.every(collection, function(element, index, collection){
//         //if action is not a function
//         //return true
//         if(typeof action !== 'function'){
//             if(!element){
//                 newArray.push(element)}
//         } else if (!action(element, index, collection)){
//             newArray.push(element);
//         }
//     });
//     if(newArray.length > 0){
//         return true;
//     } else {
//         return false;
//     }
//         };




/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
// 

//_.reduce takes arguments array, function, seed
_.reduce = function(array, action, seed){
   //call function for every element in collection, passing the arguments previous result, element, index
   //check if seed is given
   if (seed === undefined) {
       //if you dont have a seed then it is the first element of the array
       seed = array[0];
       //loop through starting at
       for(var i=1; i< array.length; i++){
           seed = action(seed, array[i], i);
       }
   } else {
       for(var i=0; i< array.length; i++) {
           seed = action(seed, array[i], i);
       }
 }
   return seed;
};
/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
// _.extend = function(object, object1){
    
// }
_.extend = function (...args){
   //copies properties from one object to another, combines them in order
   //create a loop
   for (var i=0; i < args.length; i++){
   //loop over every property in the object so that it can copy it into the first object
   for(var key in args[i]){
        //access the first object
        //access key in that object
        args[0][key] = args[i][key];
   }
       //return the object that we changed

   }
    return args[0];
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
