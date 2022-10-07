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
