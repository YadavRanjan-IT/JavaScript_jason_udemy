// STRINGS AND TEMPLATE LITERALS

let firstName = "Ranjan";

let job = "Learner";

let birthYear = "1998";

let year = 2022;

let you =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(you);

// TEMPLATE LITERALS

you = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(you);

let example = `I'm learning string literals`;

console.log(example);

let longString = `I  am a very very
long long long long 
long long long long 
long long long long 
String`;

console.log(longString);

let normLongString =
  "I'm a very very \n\
long long long long \n\
long lon gkong okibnfd \n\
String";

console.log(normLongString);

//ASSIGNMENTS

const COUNTRY = "Nepal";
const CONTINENT = "Asia";
let population = 29.14;

const ISISLAND = false;
let language = "Nepali";

let description = `${COUNTRY} is in ${CONTINENT}, and its ${population} million people speak ${language}`;

console.log(description);
