 // write a function printer_error which given a string will output 
 // the error rate of the printer as a string representing a rational 
 // whose numerator is the number of errors and the denominator the 
 // length of the control string. Don't reduce this fraction to a
 // simpler expression.

let s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";

const printerError=s=> {
  let errors = 0;
  for (let i in s) {
    if (/[n-z]/.test(s[i])) {
      errors++;
    }
  }
  return "" + errors + "/" + s.length + "";
}

printerError(s);