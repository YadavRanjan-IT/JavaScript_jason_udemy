// EQUALITY OPERATORS

let age = 30;

if (age === 18) {
  console.log("The person age is 18");
}

console.log(18 === age);

// LOOSE EQUALITY OPERATOR

console.log(18 == "18"); // returns true

// STRICT EQUALITY OPERATORS

console.log(18 === "18"); // returns false

// NOT EQUAL TO

console.log(18 !== "18"); // returns true

console.log(18 != "18"); // returns false

// ASSIGNMENTS

//FIRST STEP

let numNeighbours = prompt(
  "How many neighour countries does your country have?"
);

if (numNeighbours == 1) {
  console.log("Only 1 border");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

//SECOND STEP

if (numNeighbours === 1) {
  console.log("Only 1 border");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

//THIRD STEP

/* let numNeighbours = Number(
  prompt("How many neighour countries does your country have?")
); */

if (numNeighbours === 1) {
  console.log("Only 1 border");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
