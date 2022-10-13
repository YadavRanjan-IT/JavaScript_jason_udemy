"use strict"; // ALWAYS ACTIVATE STRICT MODE

function add(a, b) {
  return a + b;
}

function logger() {
  console.log("My name is Ranjan");
}

logger(); // CALLING, INVOKING OR RUNNING THE FUNCTION
logger();
logger();
console.log(add(1, 6));

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  let juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

console.log(fruitProcessor(4, 5));

let appleJuice = fruitProcessor(9, 0);

console.log(appleJuice);

// Funciton Declaration vs Function Expressions

function calcAge1(birthYear) {
  return 2050 - birthYear;
}

let age1 = calcAge1(2030);
console.log(age1);

const calcAge2 = function (birthYear) {
  return 2050 - birthYear;
};

calcAge2(2020);
let age2 = calcAge2(2020);
console.log(age2);

// ARROW FUNCTIONS

let add1 = (a, b) => a + b;
console.log(add1(8, -8));

let log = () => console.log("logging");

// FUNCTIONS CALLING ANOTHER FUNCTIONS

let sum = (num1, num2, operand) => {
  let result = operand === "+" ? add1(num1, num2) : "Error!";
  return result;
};

console.log(sum(5, 5, "+"));
console.log(sum(5, 5, "-"));

//ASSIGNMENTS

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

let Nepal = describeCountry("Nepal", 29.14, "Kathmandu");
let India = describeCountry("India", 1500, "New Delhi");
let Finland = describeCountry("Finland", 5, "Helsinki");

console.log(Nepal);
console.log(India);
console.log(Finland);

let worldPopulation = 7900;
function percentageOfWorld1(population) {
  return `${(population / worldPopulation) * 100}%`;
}

console.log(
  `China has 1441 million people, so it's about ${percentageOfWorld1(
    1441
  )} of the world population.`
);

console.log(
  `India has 1500 million people, so it's about ${percentageOfWorld1(
    1500
  )} of the world population.`
);

console.log(
  `Nepal has 29.14 million people, so it's about ${percentageOfWorld1(
    29.14
  )} of the world population.`
);

let percentageOfWorld2 = function (population) {
  return `${(population / worldPopulation) * 100}%`;
};

console.log(
  `China has 1441 million people, so it's about ${percentageOfWorld2(
    1441
  )} of the world population.`
);

console.log(
  `India has 1500 million people, so it's about ${percentageOfWorld2(
    1500
  )} of the world population.`
);

console.log(
  `Nepal has 29.14 million people, so it's about ${percentageOfWorld2(
    29.14
  )} of the world population.`
);

let percentageOfWorld3 = (population) => {
  return `${(population / worldPopulation) * 100}%`;
};

console.log(
  `China has 1441 million people, so it's about ${percentageOfWorld3(
    1441
  )} of the world population.`
);

console.log(
  `India has 1500 million people, so it's about ${percentageOfWorld3(
    1500
  )} of the world population.`
);

console.log(
  `Nepal has 29.14 million people, so it's about ${percentageOfWorld3(
    29.14
  )} of the world population.`
);

let describePopulation = (country, population) => {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )} of the world}`;
};

console.log(describePopulation("India", 1500));
console.log(describePopulation("China", 1440));
console.log(describePopulation("Nepal", 29.14));
