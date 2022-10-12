let tip;
let bill = 275;

tip = 50 <= bill && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(
  `The bill was ${bill}, and the tip was ${tip}, and the total value ${
    bill + tip
  }`
);

bill = 40;

tip = 50 <= bill && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(
  `The bill was ${bill}, and the tip was ${tip}, and the total value ${
    bill + tip
  }`
);

bill = 430;

tip = 50 <= bill && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(
  `The bill was ${bill}, and the tip was ${tip}, and the total value ${
    bill + tip
  }`
);
