/*A man has a rather old car being worth $2000. 
He saw a secondhand car being worth $8000. 
He wants to keep his old car until he can buy the secondhand one.

He thinks he can save $1000 each month but the 
prices of his old car and of the new one decrease of 1.5 percent per month.
 Furthermore the percent of loss increases by a fixed 0.5 percent at the 
 end of every two months.

Can you help him? Our man finds it difficult to 
make all these calculations. How many months will it take him to save up 
enough money to buy the car he wants, and how much money will he have left over?*/

const nbMonths=(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth)=>{
  let savings = 0,
      currNewPrice = startPriceNew,
      currOldPrice = startPriceOld,
      months = 0;
  while(savings < currNewPrice - currOldPrice){
    months++;
    if (months % 2 === 0){
      percentLossByMonth += 0.5;
    }
    savings += savingperMonth;
    currNewPrice *= (100 - percentLossByMonth)*0.01;
    currOldPrice *= (100 - percentLossByMonth)*0.01;
  }
  return [months, Math.round(savings + currOldPrice- currNewPrice)]
}