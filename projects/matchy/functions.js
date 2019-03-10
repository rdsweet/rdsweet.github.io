// /**
//  * Part 2
//  *
//  * In this file, we're going to create some
//  * Functions to work with our data created in
//  * data.js.
//  *
//  * See the README for detailed instructions,
//  * and read every instruction carefully.
//  */
// # Part 2
// **All work in this section will be done in functions.js**

// In this file, we'll create some Functions to work with our data created Part 1, which we coded in the file `data.js`.

// These Functions will pass in all needed parameters, meaning, we will not reach into the global scope to access `animals`.

// ## Step 1 - Search
//  1. Open up the file `functions.js` in your editor.
//  2. Implement a function called `search` with a signature of `search(animals, name) { //... }` that:
//   - Takes a paramater representing an Array of `animals`.
//   - Takes a paramater representing a String, the name of an animal on which to perform a search.
//   - Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.
//   - Returns `null` if no animal with that name exists
//  3. Use the search bar at the top of the page to make sure your function works.

// ## Step 2 - Replace
//  1. Write a function called `replace` with a signature of `replace(animals, name, replacement) { //... } ` that:
//   - Takes 3 parameters, an Array of animals, a name of an animal on which to perform a search, and an Object that represents the replacement animal.
//   - If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
//   - Otherwise do nothing.
//  2. Test it on the website.

// ## Step 3 - Remove
//  1. Write a function called `remove` with a signature of `remove(animals, name)` that:
//   - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
//   - If an animal with that name exists within the `animals` Array, remove it.
//  2. Test that it works on the website.

// ## Step 4 - Add
//  1. Write a function called `add` with a signature of `add(animals, animal) { //... }` that:
//   - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
//   - Checks that the animal Object has a `name` property with a length > 0.
//   - Checks that the animal Object has a `species` property with a length > 0.
//   - Has a **unique** name, meaning no other animals have that name.
//   - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
//   - Make sure it works.

// This is called **data validation** and it's extremely important in web development!
 
// ## Step 5 - Break
// **Step back and think about how far you've come!!** We are doing really hard stuff and if you've gotten here, you get it! This is awesome! It means you are well on your way to becoming a **pro web developer**. SWEET!


//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create the function search
// add parameters animals and name
// loop through animals array
//loop through object
// if animal exists return animal
// else return null
// use the search bar to make sure it works

function search(animals, name){
//    console.log(animals);
    for (var i = 0; i < animals.length; i++) {
        
        console.log(name);
        const animalObject = animals[i];
    //if (animals[i] !== null && animalObject.name !== null) {
        if (name === animalObject.name){
    
        //console.log(animals);
        return animalObject;
    
    
}
}return null;
} 

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// ## Step 2 - Replace
//  1. Write a function called `replace` with a signature of `replace(animals, name, replacement) { //... } ` that:
//   - Takes 3 parameters, an Array of animals, a name of an animal on which to perform a search, and an Object that represents the replacement animal.
//   - If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
//   - Otherwise do nothing.
//  2. Test it on the website.

// write function replace
// parameters-- animals, name, replacement
// animals []
// name "" of an animal
// name is a key on object
// replacement animal {}
//replace the entire object
// otherwise - else do nothing
// test

 function replace(animals, name, replacement){
   for (var i = 0; i < animals.length; i++) {
       const animalObject = animals[i];
        if(name === animalObject.name) {
              animals[i] = replacement;
           return animals;
               
          }
       }
   }
    










//////////////////
////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// ## Step 3 - Remove
//  1. Write a function called `remove` with a signature of `remove(animals, name)` that:
//   - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
//   - If an animal with that name exists within the `animals` Array, remove it.
//  2. Test that it works on the website.

// write a remove function
// parameters (animals, name)
// animals []
// loop through animals
// if exists shift
// else do nothing

 function remove(animals, name) {
   for (var i = 0; i < animals.length; i++) {
       const animalObject = animals[i];
        if(name === animalObject.name) {
              animals.shift(i);
           return animals;
        }
   }
 }
    //  for(var i = 0; i < animals.length; i++) {
        //  if (name.toLowerCase() === animals[i].name.toLowerCase()) {
//             animals.splice(i);
//         }
//     }
// }

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// ## Step 4 - Add
//  1. Write a function called `add` with a signature of `add(animals, animal) { //... }` that:
//   - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
//   - Checks that the animal Object has a `name` property with a length > 0.
//   - Checks that the animal Object has a `species` property with a length > 0.
//   - Has a **unique** name, meaning no other animals have that name.
//   - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
//   - Make sure it works.
// write a function add
// parameters (animals, animal)
// animals = []
// then check the object animal
// check that animal object has a property name
// check that the animal obj has a property species
//if both then check if the name is === to other animal names. 
// has a unique name
// Adds this new object to animals Array

function add(animals, animal) {
 //Checks that the animal Object has a `name` property with a length > 0.
    if(!animal.hasOwnProperty('name')) return;
    if(animal.name.length < 1) return;
//   - Checks that the animal Object has a `species` property with a length > 0.
    if(!animal.hasOwnProperty('species')) return;
    if(animal.species.length < 1) return;
//Has a **unique** name, meaning no other animals have that name.

        for (var i = 0; i < animals.length; i++) {
         const animalUniqueName = animals[i].name;
         if(animalUniqueName === animal.name) return;
        }     
    animals.push(animal);
     
}
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
