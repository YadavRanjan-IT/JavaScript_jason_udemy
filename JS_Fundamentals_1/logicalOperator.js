// Logical Operators

let hasDriverLicense = true;
let hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(hasDriverLicense || !hasGoodVision);
console.log(hasDriverLicense && !hasGoodVision);
console.log(!hasDriverLicense && !hasGoodVision);
console.log(!hasDriverLicense || !hasGoodVision);

let shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah can drive.");
} else {
  console.log("Sarah can't drive.");
}

let isTired = true;

console.log(hasDriverLicense || hasGoodVision || isTired);
console.log(hasDriverLicense && hasGoodVision && isTired);
console.log(hasDriverLicense && hasGoodVision && !isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah can drive");
} else {
  console.log("Sarah can't drive.");
}

// ASSIGNMENTS

/* let languageIsEnglish = false;
let isIsland = false;
let hasPopulation = Boolean(50 > 29.14);

if (languageIsEnglish && hasPopulation && isIsland) {
  console.log("You should live in Nepal");
} else {
  console.log("Nepal does not meet your criteria.");
} */

let languageIsEnglish = true;
let isIsland = true;
let hasPopulation = Boolean(50 > 29.14);

if (languageIsEnglish && hasPopulation && isIsland) {
  console.log("You should live in Nepal");
} else {
  console.log("Nepal does not meet your criteria.");
}
