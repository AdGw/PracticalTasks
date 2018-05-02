// Given two integers a and b, which can be 
// positive or negative, find the sum of all the 
// numbers between including them too and return it. 
// If the two numbers are equal return a or b.
// Note: a and b are not ordered!

let GetSum =( a,b )=>{
let sum = 0;
//When a = b, then return a/b
  if(a===b){
    return a;
//loop through b value when a > b
  }else if(a>b){
    for(b; b<=a;b++){
      sum +=b;
    }
//loop through a value when a < b
  }else if(a<b){
    for(a;a<=b;a++){
      sum +=a;
    }
  }
  return sum;
}
GetSum(4,5);