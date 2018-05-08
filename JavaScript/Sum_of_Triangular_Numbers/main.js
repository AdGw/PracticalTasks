/*Your task is to return the sum of Triangular Numbers 
up-to-and-including the nth Triangular Number.

Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) 
obtained by continuedsummation of the natural numbers 1, 2, 3, 4, 5, etc."*/

const sumTriangularNumbers=n=> {
  let start = 1,
      result = 0;
  while(n > 0){
    result += n * start;
    start++;
    n--;
  }  
  return result;
}