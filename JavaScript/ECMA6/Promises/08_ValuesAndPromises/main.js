function attachTitle(string) {
  return 'DR. ' + string;
}
let promise = new Promise((resolve, reject) => {
    resolve('MANHATTAN')
  })
  .then(attachTitle)
  .then(console.log)