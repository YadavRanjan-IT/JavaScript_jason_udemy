"use strict";

let calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

let averageDolphinsScore = calcAverage(44, 23, 71);
let averageKoalasScore = calcAverage(65, 54, 49);

let checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log("Nobody wins!");
  }
};

checkWinner(averageDolphinsScore, averageKoalasScore);

averageDolphinsScore = calcAverage(85, 54, 41);
averageKoalasScore = calcAverage(23, 34, 27);

checkWinner(averageDolphinsScore, averageKoalasScore);
