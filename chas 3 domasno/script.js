//Exercise
function calculateAge(bY, cY = 2024) {
  let result = cY - bY;
  console.log(`You are ${result} years old`);
  return result;
}
calculateAge(1971, 2024);
calculateAge(1991);
calculateAge(1998);

//Homework 1
//Se nadevam deka ja pogodiv na kraj :)

function perimetar(input) {
  console.log(typeof input);
  return typeof input;
}
perimetar({});
perimetar(7);
perimetar(true);
perimetar("Dejan");
perimetar(undefined);

// console.log(typeof "dejan");
// console.log(typeof 7);
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);

// function varPrint() {
// let student = "Dejan";
// let number = 7;
// let;
// }
// console.log(varPrint);

//Homework 2

function dogCalculate(dY, hY = 7) {
  let result = dY * hY;
  console.log(`Your dog is ${result} years old`);
  return result;
}
dogCalculate(1);
dogCalculate(14);

//Homework 3

let accountBalance = 1000;
function atmWithdreaw() {
  let withdrawAmount = parseFloat(
    prompt("Enter the amount you want to withdraw")
  );
  if (withdrawAmount > accountBalance) {
    return `Not enough money your balance is ${accountBalance}`;
  } else {
    accountBalance -= withdrawAmount;
    return `you have withdraw ${withdrawAmount} your remaining balance is ${accountBalance}`;
  }
}
console.log(atmWithdreaw());
