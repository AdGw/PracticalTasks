let promise = Promise.reject(new Error('error'))

  .then(undefined, error => {
    console.log(error.message)
  })
  .catch(error => {
    console.log(error.message)
  })