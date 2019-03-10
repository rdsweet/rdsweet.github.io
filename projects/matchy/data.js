/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {

};
animal.species = 'menotaur';
animal['name'] = 'Senai';
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'rrrrrrr';
noises[1] = 'hmmmm';
noises.unshift('brrrr');
noises.push('haaah');
console.log(noises.length);
console.log(noises[noises.length -1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
console.log(animal);
animal.noises.push('whatever');


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = {species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh']};
animals.push(duck);
console.log(animals);
var unicorns = {};
unicorns.species = 'mystikal';
unicorns.name = 'Uraeus';
unicorns.noises = ['lalala', 'hohoho', 'doremi'];
var antelope = {};
antelope.species = 'horse';
antelope.name = "Connor";
antelope.noises = ['wat up?', 'howdy', 'a function is defined by a return statemtn!'];
animals.push(unicorns);
animals.push(antelope);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//  5. [ ] Write a function called `getRandom` that takes our `animals` array and returns the `index` of a random element using `Math.random`
//  6. [ ] Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
//  7. [ ] `console.log` `friends`.
//  8. [ ] add `friends` as a **property** named `friends` on one of the animals in `animals`
//  9. [ ] `console.log` your work.
 

var friends = [];
function getRandom(animals){
    var min = Math.ceil(0);
    var max = Math.floor(animals.length -1);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(friends);
friends.push(animals[getRandom(animals)].name); 
console.log(friends);
animals[getRandom(animals)]['friends'] = friends;
getRandom(animals);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
