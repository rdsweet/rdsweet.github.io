// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-rdsweet');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
// function counts males
//accepts an Array
//establish a count variable
//for each male add 1
    var count = _.filter(array, function(element, index, array){
        if(element.gender === 'male'){
            return element;
        }
    });
    return count.length;
        

};

var femaleCount = function(array){
/*### 2: `femaleCount`
 - **Objective**: Find the number of female customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**: use `reduce`
 */
 
 //use reduce to find the number of female customers
//  _.reduce(array, function(seed, person){
//      seed = seed + 1;
//      return seed;
//  }, 0);
var count = 0;

    _.reduce(array, function(seed, element){
        if(element.gender === 'female'){
            return count = seed +1;
    }} , 0);
     return count;
    };
    
 
 
 
//npm start --prefix ./projects/let-s-get-functional


var oldestCustomer = function(array){
// look for the oldest customer in the array
// use anonymous function in reduce to drill down the condition
//if age is greater than seed then 
// return seed
//return name === age

var seniorCustomerName = _.reduce(array, function(seed, element, index){
    if(seed.age <= element.age){
        seed = element;
    
        return seed;
        
    } else{
        return seed;
    }});
    
    return seniorCustomerName.name;
};
// find highest number in array of ages
// return customer
  
//npm start --prefix ./projects/let-s-get-functional

var youngestCustomer = function(array){

var juniorCustomerName = _.reduce(array, function(seed, element, index){
    if(seed.age >= element.age){
        seed = element;
    
        return seed;
        
    } else{
        return seed;
    }});
    
    return juniorCustomerName.name;
};


//npm start --prefix ./projects/let-s-get-functional

//var averageBalance = function(array){
    var averageBalance = function(array) {
    //loop through array of customerObj, returns a new array of the customerObj.balance
    var avgBalances = array.map(customerObj => customerObj.balance);
    //loop through the avgBalance array using map and will return a new array that is manipulated with the slice method
    var trimmedBal = avgBalances.map(balStr => Number(balStr.replace(',', '').replace('$', '')));
    //use reduce method to add all the balances 
    var totalBal = trimmedBal.reduce((seedTotal, num) => seedTotal + num);
    //take the average balance
    var avgBal = totalBal / trimmedBal.length;
    //return avgBal to get back the value of my function
    return avgBal;
    
};
    // use reduce to add all the balances together
    // divided by the array.length - 1 to get the n
   /* var totalBalance = _.reduce(array, function(seed, element, index){
        
        
          return seed + Number(element.balance.split("$", ","));
           
        
    }, 0);
    console.log(totalBalance);
    return totalBalance/array.length;
};*/
//npm start --prefix ./projects/let-s-get-functional


var firstLetterCount = function(array, letter){
    // Given a letter
    // look at the name property
    // name is a string - treat it as an array at index 0
        // count that name.
        
    var firstNameLetter = _.reduce(array, function(seed, element, index, array){
        // if the name begins with letter if index 0 === letter
        // should satisfy upper or lower case -- change all cases to UpperCase
        if(element.name.toUpperCase()[0] === letter.toUpperCase()){
            seed = seed + 1;
        } 
        return seed;
    }, 0);
    
    return firstNameLetter; 
};
//npm start --prefix ./projects/let-s-get-functional


var friendFirstLetterCount = function(array, customer, letter){
    var letterCount = 0;
    for(var i = 0; i < array.length; i++){
        let c = array[i];
        //console.log(c);
        if(c.name === customer){
            for(var f = 0; f < array[i].friends.length; f++){
                let d = array[i].friends[f];
                console.log(d.name[0]);
                if(d.name[0].toUpperCase()=== letter.toUpperCase()){
                    letterCount +=1;
                }
            }
        } 
        
    }
    return letterCount;
};
    // given a customer's name and a letter
    // look through their array of friends
    // if the friend's first name begins with a certain letter
    //should work if given letter is capital or lower case
    // count that friend
    // use reduce to loop through the 
    // var reducedFriendFirstLetterCount = _.reduce(array, function(letterCount, element, index){
    //     if(element.friends[index].toUpperCase()[0] === letter.toUpperCase()){
    //         console.log(element.friends);
    //         letterCount = letterCount + 1;
    //     }
    //     return letterCount;
    // });
    
//     return reducedFriendFirstLetterCount;
// };

//npm start --prefix ./projects/let-s-get-functional

var friendsCount = function(array, friendName){
    // given a function
    // with an array of customers
    // and the name of the friend
    // give an array of customers who share a specific friendName
    var customersWhoShareFriend = [];
   // use the callback function to check to see if that friendsName is in that list of friends
    var customerCount = _.reduce(array,function(seed, element, index){
        
        for(var j = 0; j < element.friends.length; j++){
            // console.log(element.name);

                if(friendName === element.friends[j].name){
                    // console.log(element.name);
                  seed = element.name;
                customersWhoShareFriend.push(seed);  
        }
        }
    } );
    //if yes return friend into array
    
    return customersWhoShareFriend;
  
};

var topThreeTags = function(array){
// use reduce to count the tags
// if tags are greater > other tags
// return tags
var tagCount = _.reduce(array, (objectStarter, custObj) => {
    _.each(custObj.tags, (tagStrings) => {
        
//         if key value pairs is not in object
        if(objectStarter[tagStrings] === undefined){
            objectStarter[tagStrings] = 1;
            } else {
                //count ++;
                objectStarter[tagStrings]++;
            }
//         add key
//         if key return
//         test to see if key exists in the new 
//         if seed.tagStrings === undefined 
//         then add it to the seed
        
    });
    //return all the keys and values in the objectStarter
    return objectStarter;

}, {});

// create a variable to hold the array of keys from the reduce object
// create an array of keys from the reduce object
   var arrayofKeys = Object.keys(tagCount);
//  create a variable to put the sorted keys.
//  Where a, b  sorts from high to low where b is high
   var sortedArr = arrayofKeys.sort(function (a, b){
       return tagCount[b] - tagCount[a];
    //   keep the first 3 and slice the rest
   }).slice(0,3);
        //   then slice after 3
        
   

return sortedArr;

};



var genderCount = function(array){
    // take an array customers
    // look at genders
    // separate genders into (male, female, transgender)
    // return a count of the genders in an object
    // use reduce to get an object
    var genderObject = _.reduce(array, (genderLikeObject, customerElement) => {
        if(customerElement.gender === "male") {
            //add 1 to the male count
            genderLikeObject.male ++;
            
        } else if(customerElement.gender === "female") {
            genderLikeObject.female ++;
        } else {
            genderLikeObject.transgender ++;
        }
        return genderLikeObject;
    }, { male: 0, 
    female: 0, 
    transgender: 0});

    
return genderObject;
};
    
                

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
