/*Implement a function that adds two numbers together 
and returns their sum in binary. The conversion can be 
done before, or after the addition.

The binary number returned should be a string.*/

const addBinary=(a,b)=> {
  let sum = a+b;
  return (sum >>> 0).toString(2);
}