// Simple, given a string of words, return 
// the length of the shortest word(s).

// String will never be empty and you do 
// not need to account for different data types.
/*-----------------------*/

//break string into an array of words
//set shortest length to first word
//compare to each other word 
//reset if a shorter word is found
//return the shortest

let findShort=s=>{
  s = s.split(' ');  
  let shortest = s[0];
  
  for(let i = 0; i < s.length; i++){
    if(shortest.length > s[i].length){
      shortest = s[i];
    }
  }
  return shortest.length;
}
