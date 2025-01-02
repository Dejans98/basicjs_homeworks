const numbers = [5, 12, 8, 21, 7];

const numberList = document.getElementById(`number-list`);
const sumElement = document.getElementById(`sum`);

for (let i = 0; i < numbers.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = numbers[i];
  numberList.appendChild(listItem);
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
sumElement.textContent = sum;
