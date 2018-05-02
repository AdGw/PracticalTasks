// Your online store likes to give out coupons 
// for special occasions. Some customers try to 
// cheat the system by entering invalid codes
// or using expired coupons.

// Your mission: 
// Write a function called checkCoupon to verify 
// that a coupon is valid and not expired. If the 
// coupon is good, return true. Otherwise, return 
// false.

const checkCoupon=
(enteredCode, correctCode, currentDate, expirationDate)=>
enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
