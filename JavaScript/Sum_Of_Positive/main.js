// You get an array of numbers, return the 
// sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: array may be empty, in this case return 0.

const positiveSum=arr=>{
  let sum = 0
    for(let i in arr){
      if(arr[i]>0){
        sum+=arr[i];
      }
    }
  return sum;
}