// Your task is to make two functions, max and min 
// that take a(n) array/vector of integers list as 
// input and outputs, respectively, the largest and 
// lowest number in that array/vector.

function min(array) {
  return array.reduce((a, b)=>Math.min(a, b)
  );
}

function max(array) {
  return array.reduce((a, b)=>Math.max(a, b)
  );
}