let array = process.argv;
let filtredArray = array.filter((item, index)=>index >= 2);
let sumArray = filtredArray.reduce((item, index)=>Number(item)+Number(index))
console.log(sumArray)