// Given an array of integers, remove 
// the smallest value. Do not mutate 
// the original array/list. If there 
// are multiple elements with the same
// value, remove the one with a lower
// index. If you get an empty array/list,
// return an empty array/list.

// Don't change the order of the elements that are left.

const removeSmallest=numbers=> {
  let outputArr = []
  let smallest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
     smallest = numbers[i];
    }
  }
  for (let j = 0; j < numbers.length; j++) {
    if (j !== numbers.indexOf(smallest)) {
      outputArr.push(numbers[j]);
    } 
  }
  return outputArr;
}

removeSmallest([5, 3, 2, 1, 4])