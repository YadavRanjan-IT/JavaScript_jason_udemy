// Operators

let age = 2022 - 1990;

console.log(age);

let currentYear = 2022;

age = currentYear - 1990;

let hisAge = currentYear - 1995;

console.log(age, hisAge);

const FIRSTNAME = "Ranjan";
const LASTNAME = "Yadav";

console.log(FIRSTNAME + " " + LASTNAME);

// Assignments

let population = 29.14;

let totalPeopleInEachHalf = population / 2;

console.log(totalPeopleInEachHalf);

population += 1;

console.log(population);

let finlandPopulation = 6.0;

console.log(finlandPopulation < population);
console.log(finlandPopulation > population);

let averagePopulationOfACountry = 33.0;

console.log(averagePopulationOfACountry > population);
console.log(averagePopulationOfACountry < population);

const COUNTRY = "Nepal";
const CONTINENT = "Asia";

const ISISLAND = false;
let language = "Nepali";

let description =
  " " +
  COUNTRY +
  " is in " +
  CONTINENT +
  ", and its " +
  population +
  " million people speak " +
  language;

console.log(description);
