let array = ["a", "b", "c", "d"];
console.log(array)

let bigArray = array.map((item, index) => item.toUpperCase())

console.log(bigArray)

let filtredArray = array.filter((item, index)=>index < 2);
console.log(filtredArray)

let sumArray = array.reduce((item, index)=>item+index);
console.log(sumArray)

let newArray = array.push()
console.log(array)