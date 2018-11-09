let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error('REJECTED!'));
  }, 300);
});

function onReject(error) {
  console.log(error.message);
}

promise.then(undefined, onReject)