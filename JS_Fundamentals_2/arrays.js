"use strict";

let names = ["Ranjan", "Hari", "Roshan", "Aman"];
console.log(names);

let years = new Array(1991, 1984, 2008, 2022);
console.log(years);

console.log(names[0]);

console.log(names.length);

names[2] = "Bhandari";

console.log(names);

names = ["you", "me"];

console.log(names);

years = [1990, 1967, 2002, 2010, 2018];

let calcAge = (birthYear) => {
  return 2050 - birthYear;
};

console.log(calcAge(years[0]));

// Array methods

//push and unshift

let newLength = years.push(2022);

console.log(years);
console.log(newLength);

newLength = years.unshift(1950);
console.log(years);
console.log(newLength);

//pop and shift

newLength = years.pop();
console.log(years);
console.log(newLength);

newLength = years.shift();
console.log(years);
console.log(newLength);

//indexOf and includes(bool value return)

console.log(years.indexOf(1967));
console.log(years.includes(1967)); // STRICT EQUALITY
console.log(years.includes(197));

// ASSIGNMENT

let populations = [29.14, 1500, 1440, 5];

console.log(populations.length === 4);

function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}%`;
}

let percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[populations.length - 1]),
];

console.log(percentages);

let neighbours = ["Bhutan", "Nepal", "Pakistan", "India"];
neighbours.push("Utopia");
neighbours.pop();

neighbours.includes("Germany")
  ? ""
  : console.log("Probably not a central european country:D");

neighbours.includes("India")
  ? (neighbours[neighbours.indexOf("India")] = "Republic of India")
  : "";

console.log(neighbours);
