// Complete the solution so that it reverses 
// the string value passed into it.

// solution('world'); // returns 'dlrow'

function solution(str){
  // let splitString = "world".split("");
  let splitString = str.split("");
  
  // let reverseArray = ["w", "o", "r", "l", "d"].reverse();
  // ["d", "l", "r", "o", "w"]
  let reverseArray = splitString.reverse();
  
  // let joinArray = ["d", "l", "r", "o", "w"].join("");
  let joinArray = reverseArray.join("");
  return joinArray;
}

solution("world");

//////////////////
//Nested method//

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("world");