"use strict";

// CALCULATE TIPS AND TOTALS FOR EACH BILL IN ARRAY bills

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

let calcTipAndTotal = (bill) => {
  while (tips.length !== bill.length) {
    let num =
      bill[tips.length] >= 50 && bill[tips.length] <= 300
        ? bill[tips.length] * 0.15
        : bill[tips.length] * 0.2;

    totals.push(num + bill[tips.length]);
    tips.push(num);
  }

  return [tips, totals];
};

console.log(calcTipAndTotal(bills)[0]);
console.log(calcTipAndTotal(bills)[1]);

let calcAvg = (arr) => {
  let sum = 0;
  for (let cnt = 0; cnt < arr.length; cnt++) {
    sum += arr[cnt];
    console.log(sum);
  }

  return sum / arr.length;
};
console.log(calcAvg(totals));
