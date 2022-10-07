// Type Conversion

let birthYear = "1990";

console.log(Number(birthYear), birthYear);

console.log(Number(birthYear) + 18);

console.log(String(23), 23);

// Type Coercion

console.log("I am " + 23 + " years old");

// ASSIGNMENTS
let result = "9" - "5"; // 4 number
console.log(result);

result = "19" - "13" + "17"; // 617  string
console.log(result);

result = "19" - "13" + 17; // 23  number
console.log(result);

result = "123" < 57; // false boolean
console.log(result);

result = 5 + 6 + "4" + 9 - 4 - 2; // 1143 number
console.log(result);

// truthy and falsy values

// falsy values empty String '', null, NaN, 0, undefined.

if (NaN) {
  console.log(`NaN is a truthy value`);
} else {
  console.log(`NaN is a falsy value`);
}

let x; // x ia undefined
if (x) {
  console.log(`undefined is a truthy value`);
} else {
  console.log(`undefined is a falsy value`);
}

if (0) {
  console.log(`0 is a truthy value`);
} else {
  console.log(`0 is a falsy value`);
}

let y = null;
if (y) {
  console.log(`null is a truthy value`);
} else {
  console.log(`null is a falsy value`);
}

if ("") {
  console.log(`'' is a truthy value`);
} else {
  console.log(`'' is a falsy value`);
}

// rest are truthy values
