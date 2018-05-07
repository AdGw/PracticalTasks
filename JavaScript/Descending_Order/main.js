/*Your task is to make a function that can take any non-negative 
integer as a argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.*/

const descendingOrder=n=>{
  let arr = n.toString().split('');
  console.log(arr)
  	  arrNum = [];
	  for(let i in arr){
	  	arrNum.push(parseInt(arr[i]));
	    console.log(arrNum)
	  }
	  let sorted = arrNum.sort((a, b)=>b-a
	);
	let sorted2 = sorted.join('');
  	return parseInt(sorted2);
 }
