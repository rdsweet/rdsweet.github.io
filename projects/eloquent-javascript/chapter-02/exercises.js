
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// starting with one #
//add pounds to the counter until the prompt number finishes
//show all added pounds
function triangles(Number) { 
  var counter = "";
  
  
  for (var i = 0; i < Number;  i ++) {
    counter += "#";
    
    
    console.log(counter);
    
  }

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
for(var i = 1; i < 16; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log('fizzbuzz');
  } else if (i % 3 === 0){
    console.log("fizz");
  } else if (i % 5 === 0){
    console.log("buzz");
  } else { console.log(i);
  }
  }
}  


////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//create a chess board
//print number of squares using a pound
//add the appropriate spaces
// use \n for new line
//make it work for 8 lines
//probably need a loop
//add "#" to four as the condition
//+ " " after each "#"
//while Number is less break
// if \n go to new line

function drawChessboard(Number) {
  
    var hash = ' ';
    var space = ' ';
    for (var i = 1; i < Number; i++) 
    {        

        hash += '\n';
    
        for (var j = 0; j < Number; j++) 
        {
        if((i +j) % 2 == 0)
        {
        hash += space;
        }
        else
        {
        hash += "#";
        }
    }
  console.log(hash);
}
// var lineBoard = "#" + " " ;
//   for (var i = 0; i < Number; i++) {
//     for 
//     lineBoard = Number + '\n';
//       console.log(lineBoard);
};



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
