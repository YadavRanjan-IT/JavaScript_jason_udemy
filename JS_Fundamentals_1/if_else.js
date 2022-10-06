let age = 15;

if (age >= 18) {
  console.log("Sarah can start driving 🚖 license test");
} else {
  let yearsLeft = 18 - age;
  console.log(` Sarah has still ${yearsLeft} years to take test. 😂`);
}

// ASSIGNMENTS

let country = "Nepal";
let population = 29.14;

let averagePopulation = 33;

if (population >= averagePopulation) {
  console.log(`${country} population is above average`);
} else {
  console.log(
    `${country} population is ${
      averagePopulation - population
    } million below average`
  );
}

population = 13;

if (population >= averagePopulation) {
  console.log(`${country} population is above average`);
} else {
  console.log(
    `${country} population is ${
      averagePopulation - population
    } million below average`
  );
}

population = 130;

if (population >= averagePopulation) {
  console.log(`${country} population is above average`);
} else {
  console.log(
    `${country} population is ${
      averagePopulation - population
    } million below average`
  );
}
