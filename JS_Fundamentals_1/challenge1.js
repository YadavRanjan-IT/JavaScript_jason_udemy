// TEST DATA 1

let markWeight = 78.0;
let markHeight = 1.69;

let johnWeight = 92.0;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

// TEST DATA 2

markWeight = 95.0;
markHeight = 1.88;

johnWeight = 85.0;
johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);
