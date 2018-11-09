let promise = new Promise((resolve, reject) => {
  resolve('I FIRED');
  reject(Error('I DID NOT FIRE'));
})

function onRejected(error) {
  console.log(error.message);
}

promise.then(console.log, onRejected);