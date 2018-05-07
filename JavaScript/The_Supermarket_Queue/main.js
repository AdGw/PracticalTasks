/*There is a queue for the self-checkout tills at the supermarket. 
Your task is write a function to calculate the total time required 
for all the customers to check out!

The function has two input variables:

customers: an array (list in python) of positive integers representing 
the queue. Each integer represents a customer, and its value is the 
amount of time they require to check out.

n: a positive integer, the number of checkout tills.
The function should return an integer, the total time required.*/

const queueTime=(customers, n)=> {
  let w = new Array(n).fill(0);
  for (let t of customers) {
    let i = w.indexOf(Math.min(...w));
    w[i] += t;   
  }
  return Math.max(...w);
}
