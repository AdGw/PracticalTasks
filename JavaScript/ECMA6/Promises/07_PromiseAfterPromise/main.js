let firstPromise = first();

let secondPromise = firstPromise.then(val => {
  return second(val);
});

secondPromise.then(console.log);