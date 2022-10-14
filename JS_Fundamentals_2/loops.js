"use strict";

// FOR LOOPS

for (let counter = 1; counter <= 10; counter++) {
  console.log(counter);
  console.log(`loop-${counter}`);
}

let ranjan = [
  "Ranjan",
  "Yadav",
  24,
  "Unemployed",
  "Nepal",
  "Asia",
  ["Hari", "Roshan", "Sailesh"],
];

for (let cnt = 0; cnt < ranjan.length; cnt++) {
  console.log(ranjan[cnt]);
}

let birthYears = [1991, 1999, 1962, 1984, 2002];
let ages = [];

for (let cnt = 0; cnt < birthYears.length; cnt++) {
  ages.push(2050 - birthYears[cnt]);
}

console.log(birthYears, ages);

// CONTINUE OR BREAK

//While loop

let cnt = 0;
while (cnt <= 10) {
  console.log(cnt);
  cnt++;
}

let num = Math.ceil(Math.random() * 6);

console.log(num);

// ASSIGNMENTS

for (let cnt = 1; cnt <= 50; ++cnt) {
  console.log(`Voter number ${cnt} is currently voting!`);
}

function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}%`;
}

let populations = [29.14, 1500, 1440, 5];
let percentages2 = [];

for (let cnt = 0; cnt < populations.length; cnt++) {
  percentages2.push(percentageOfWorld1(populations[cnt]));
}

console.log(percentages2);

let listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let cnt = 0; cnt < listOfNeighbours.length; cnt++) {
  for (let count = 0; count < listOfNeighbours[cnt].length; count++) {
    console.log(`Neighbour: ${listOfNeighbours[cnt][count]}`);
  }
}

let percentages3 = [];

while (percentages3.length !== populations.length) {
  percentages3.push(percentageOfWorld1(populations[percentages3.length]));
}

console.log(percentages3);
