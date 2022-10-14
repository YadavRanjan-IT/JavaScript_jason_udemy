"use strict";

//OBJECTS

let ranjan = {
  firstName: "Ranjan",
  lastName: "Yadav",
  age: 24,
  job: "Unemployed",
  country: "Nepal",
  continent: "Asia",
  friends: ["Hari", "Roshan", "Sailesh"],
};

//OBJECT DOT VS BRACKET NOTATION

console.log(JSON.parse(JSON.stringify(ranjan)));

console.log(ranjan);
console.log(ranjan.friends[2]);
console.log(ranjan["firstName"]);

let nameKey = "Name";

console.log(ranjan["first" + nameKey]);
console.log(ranjan[`first${nameKey}`]);

let propObject = prompt("Property of Object:");

console.log(propObject);

console.log(ranjan[propObject]);

if (ranjan[propObject]) {
  console.log(ranjan[propObject]);
} else {
  console.log("Wrong Request");
}

// ADDING PROPERTY TO OBJECT

ranjan.location = "Finland";
ranjan["Github"] = "@github.com";

console.log(ranjan);

console.log(
  `${ranjan.firstName} has ${ranjan.friends.length} friends, and his best friend is called ${ranjan.friends[2]} `
);

console.log(
  `${ranjan.firstName} has ${ranjan.friends.length} friends, and his best friend is called ${ranjan["friends"][2]} `
);

// OBJECTS METHODS

console.log(ranjan);

ranjan.birthYear = 1990;
ranjan.hasDriverLicense = true;

ranjan.calcAge = function () {
  console.log(this);
  this.age = 2050 - this.birthYear;
};

console.log(ranjan);

console.log(ranjan.calcAge());
console.log(ranjan.age);
console.log(ranjan.age);
console.log(ranjan["calcAge"]());

ranjan.getSummary = function () {
  return `${this.firstName} is a ${this.age}-years old ${
    this.job
  }, and he has ${this.hasDriverLicense ? "a" : "no"} drivers license.`;
};

console.log(
  `${ranjan.firstName} is a ${ranjan.age}-year old ${ranjan.job}, and he has ${
    ranjan.hasDriverLicense ? "a" : "no"
  } driver's license`
);

console.log(ranjan.getSummary());

// ASSIGNMENTS

let myCountry = {
  country: "Nepal",
  capital: "Kathmamndu",
  language: "Nepali",
  population: 29.14,
  neighbours: ["India", "China"],
};

console.log(myCountry.population);
console.log(myCountry.neightbours);

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
myCountry["population"] += 2;

console.log(myCountry.population);

myCountry.neighbours.push("Bhutan");

console.log(myCountry.neighbours);

/*PRIMITVE VARIBALES HOLDS THEIR VALUES AS DEFINED AND CHANGES AS YOU REDEFINE THEM

REFERENCE VARIABLES CHANGES TO THE LAST INSTANCE OF CHANGE DONE TO THEM LINE 99,100,110 */

myCountry.describe = function () {
  console.log(
    `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
  );
};

myCountry.describe();

console.log(myCountry.isIsland);

myCountry.isIsland = myCountry.neighbours.length === 0 ? true : false;

console.log(myCountry.isIsland);
