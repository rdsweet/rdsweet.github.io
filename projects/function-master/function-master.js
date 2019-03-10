//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
var objectValues = [];
for (var key in object) {
    objectValues.push(object[key]);
}
return objectValues;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//keys to string should take 
function keysToString(object) {
    
    var objectKeys = [];
    for(var key in object) {
        objectKeys.push(key);
    }
    return objectKeys.join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// values to string object
// take values and turn into a string
// if value is not a string do nothing
// constraint return only strings

function valuesToString(object) {
    var objectValueString = [];
    for (var key in object) {
        //console.log(typeof object[key] === 'string');
        if (typeof object[key] === "string"){
            //console.log(object[key]);
            objectValueString.push(object[key]);
        }
    }
            return objectValueString.join(" ");
        }
    
    


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take one argument and return 'array' if its an array and 'object' if its an object", function(assert){
//       function arrayOrObject
//       if it's an array return array
//       if it's an object return object
//       use array.isArray()
      
      
      

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return "array";
    } else { 
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //capitalize all the words
    // make string of words into an array
    // take the first letter of each word and make it capital
    //make the other letters lowercase
    var splitStr = string.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++){
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   return splitStr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
// should take an object with a name property return welcome Name
//for in loop through object to find name
//take name's value and return
//Welcome name!
//if name exists return Welcome name{
//string.charAt(0).toUpperCase() + string.slice(1)
//object['name'].charAt(0).toUpperCase() + ['name'].slice(1);
    
return "Welcome " + object['name'].charAt(0).toUpperCase() + object['name'].slice(1) + "!"; //Welcome Name!

}
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// take an object 
// take the name
// take the species
// return name is species
function profileInfo(object) {
return object['name'].charAt(0).toUpperCase() + object['name'].slice(1) + " is a " + object['species'].charAt(0).toUpperCase() + object['species'].slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function maybeNoises(object) {
//     for(var key in object){
//     //console.log(object);
//     if(object[key].length > 0){ 
//         return object.noises.join(" ");
//     } else {
//       return "there are no noises";
//     }
//     }
// }
// //if object has noise array
// //console.log(object);

// //return object.noisesnoise array as a string
// //loop through the array and return
// //if no noises
// } 
function maybeNoises(object) {
  for(var key in object) {
      if(object[key].length > 0) {
          return object.noises.join(" ");
      }
  }
  return "there are no noises";
 }


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// loop through string
// if the word is in the string
// return true
function hasWord(string, word) {
    if(string.includes(word)){
      return true;  
    } else{
        return false;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// take a name
// add name to object's friend's array
// push name on to an array
// return object
function addFriend (name, object) {
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take name and object parameters
//if name is in friend return true
//if not there return false
function isFriend(name, object) {
    if(object.hasOwnProperty('friends')){
      for(var i = 0; i < object.friends.length; i++) {
        if (object.friends[i] === name){
            return true;
       } 
    
        } 
    

} return false;
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
// need an variable array
//loop through the given array
        //if name !== array[i].name
        //!array[i].friends.includes(name)
        //if false push(array[i].name) to array
//return the variable array we made
//if you are the name
var newArray = [];
for(var i = 0; i < array.length; i++) {
    if(name !== array[i].name) {
        if(!array[i].friends.includes(name)){
            newArray.push(array[i].name);
        }
    }
}
return newArray;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////


//given object, key, value as parameters
function updateObject(object, key, value) {
    object[key] = value;
    
 return object;

// if(!object.hasOwnProperty(key)){
//     object.key = value;
    


}
//update the property/key with new values
//add property to an objectif it's not there
// loop through object to see if property is there
//if key is there add value
//if key is not there add the key
//see if hasOwnProperty





//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    
//compare elements in array to properties in object
//if elements match a property then remove property

//loop through array
for (var i = 0; i < array.length; i++){
    //debugger;
    //then compare to keys in object
    //console.log(array);
    for (var key in object){
        if (array[i] === key){
            //delete object[keys] that match
            delete object[key];
        
    }
    }  

}
return object;
}
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//given an array
function dedup(array) {
    //debugger;
    
    console.log(array);

    //create a new array
    var newArray = [];
    //loop through the new array
   for(var i = 0; i < array.length; i++){
        //if elements in current array are not in newArray
        if(!newArray.includes(array[i])){
            //push element in current array
            newArray.push(array[i]);
        }
    }
    //return new array
    console.log(newArray);
    return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}