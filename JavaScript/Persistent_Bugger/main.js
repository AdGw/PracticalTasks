/*Write a function, persistence, that takes in a positive parameter 
num and returns its multiplicative persistence, which is the number 
of times you must multiply the digits in num until you reach a single digit.*/

const persistence=num=> {
  let array = num.toString().split(""),
      product,
      multiplyCount = 0;
      
  while (array.length > 1) {
    product = array.reduce((a, b)=> a * b);
    multiplyCount++;
    array = product.toString().split("");
  }
  return multiplyCount;
}