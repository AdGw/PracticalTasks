// Given an array of one's and zero's 
// convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which 
// is the binary representation of 1

const binaryArrayToNumber = arr => {
  let binarr = [8,4,2,1];
  let sum = 0;
  for (let i in binarr) {
    sum += arr[i]*binarr[i];
  }
  return sum;
};

binaryArrayToNumber([1,1,1,1])