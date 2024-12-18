//Homework 1
function tellStory(hisName, hisActivity, hisMood) {
  const name = hisName;
  const mood = hisMood;
  const activity = hisActivity;

  const story = `This is ${name}.${name} is a nice person.Today they are ${mood}.They are ${activity} all day`;
  console.log(story);
}
// console.log(tellStory);
tellStory("Marko", "happy", "dancing");

//Homework 2

function sumOfNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

let numbers = [1, 2, 3, 4, 5];
let resultt = sumOfNumbers(numbers);

console.log(resultt);

//Homework 3

function combineStrings(arr) {
  return arr.join(" ");
}

const result = combineStrings(["Hello", "there", "students", "of", "SEDC"]);
console.log(result);

//Homework 4

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + "\n");
  }

  //  else {
  // console.log(i + "");
  // }
}

//Homework 5

function numberArray(arr) {
  let sum = 0;
  for (i = 0; i < arr.lenght; i++) {
    sum += arr[i];
  }
  let minValue = Math.min(...arr);
  let maxValue = Math.max(...arr);
  console.log("Min element is " + minValue);
  console.log("Max element is " + maxValue);
  console.log("The sum is " + sum);
}
let numberss = [50, 20, 80, 10, 30];
numberArray(numberss);

//Homework 6

function getFullNames(firstName, lastName) {
  let fullNames = [];
  for (let i = 0; i < firstName.length; i++) {
    fullNames.push(`${i + 1}. ${firstName[i]} ${lastName[i]}`);
  }
  return fullNames;
}
let first = ["Bob", "jill"];
let last = ["Grefory", "Wurtz"];
let resul = getFullNames(first, last);
console.log(resul);
