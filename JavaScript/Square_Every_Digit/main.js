/*Instructions

For example, if we run 9119 through the function, 811181 will come out, 
because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer*/

const squareDigits=num=>{
  let strNum = String(num),
      newNum ='';
  
  for (let i in strNum){
    newNum += strNum[i]*strNum[i];
  }
  return Number(newNum);
}

