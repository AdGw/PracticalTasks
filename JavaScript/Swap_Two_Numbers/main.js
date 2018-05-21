/*Swap two numbers*/

const swap = (a,b) =>{
	return [b,a];
}
let a = 10,
	b = 5;

[a,b] = swap(a,b);
console.log(a,b);