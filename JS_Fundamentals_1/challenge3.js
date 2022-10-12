// CODING CHALLENGE 3

// TEST DATA

let averageDolphinsScore = (96 + 108 + 89) / 3;
let averageKoalasScore = (88 + 91 + 110) / 3;

console.log(averageDolphinsScore, averageKoalasScore);

if (averageDolphinsScore === averageKoalasScore) {
  console.log("The match is Draw 🙁.");
} else if (averageDolphinsScore > averageKoalasScore) {
  console.log("The match is won by Dolphins 🏆.");
} else {
  console.log("The match is won by Koalas 🏆.");
}

// BONUS TEST DATA 1

console.log("BONUS DATA 1");
averageDolphinsScore = (97 + 112 + 101) / 3;
averageKoalasScore = (109 + 95 + 123) / 3;
console.log(averageDolphinsScore, averageKoalasScore);

let minimumScore = 100;

let dolphinsPassedThreshold = averageDolphinsScore >= minimumScore;
let KoalasPassedThreshold = averageKoalasScore >= minimumScore;

if (averageDolphinsScore === averageKoalasScore) {
  console.log("The match is drawn 🙁.");
} else if (
  averageDolphinsScore > averageKoalasScore &&
  dolphinsPassedThreshold
) {
  console.log("The match is won by the Dolphins 🏆.");
} else if (averageKoalasScore > averageDolphinsScore && KoalasPassedThreshold) {
  console.log("The match is won by Koalas 🏆.");
} else {
  console.log("No team won the trophy 🤬");
}

// BONUS DATA 2

console.log("BONUS DATA 2");
averageDolphinsScore = (97 + 112 + 101) / 3;
averageKoalasScore = (109 + 95 + 106) / 3;
console.log(averageDolphinsScore, averageKoalasScore);

dolphinsPassedThreshold = averageDolphinsScore >= minimumScore;
KoalasPassedThreshold = averageKoalasScore >= minimumScore;

if (
  averageDolphinsScore === averageKoalasScore &&
  dolphinsPassedThreshold &&
  KoalasPassedThreshold
) {
  console.log("The match is drawn 🙁.");
} else if (
  averageDolphinsScore > averageKoalasScore &&
  dolphinsPassedThreshold
) {
  console.log("The match is won by the Dolphins 🏆.");
} else if (averageKoalasScore > averageDolphinsScore && KoalasPassedThreshold) {
  console.log("The match is won by the Koalas 🏆.");
} else {
  console.log("No team won the trophy 🤬.");
}
