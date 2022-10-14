"use strict";

let $mark = {
  name: "Mark",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.markBMI = this.mass / this.height ** 2;
    return this.markBMI;
  },
};

let $john = {
  name: "John",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.johnBMI = this.mass / this.height ** 2;
    return this.johnBMI;
  },
};

console.log(
  `${$mark.calcBMI() > $john.calcBMI() ? $mark.name : $john.name}'s BMI (${
    $mark.markBMI > $john.johnBMI ? $mark.markBMI : $john.johnBMI
  }) is higher than 
    ${$mark.markBMI < $john.johnBMI ? $mark.name : $john.name}'s BMI (${
    $mark.markBMI < $john.johnBMI ? $mark.markBMI : $john.johnBMI
  })!`
);
