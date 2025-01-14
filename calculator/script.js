const result = document.getElementById(`result`);

function display(input) {
  result.value += input;
}
function clearDispley() {
  result.value = "";
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  let expression = result.value;

  let numbers = expression.split(/([+\-*/])/).filter(Boolean);

  if (numbers.length < 3) return;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === "*" || numbers[i] === "/") {
      let num1 = parseFloat(numbers[i - 1]);
      let num2 = parseFloat(numbers[i + 1]);

      if (numbers[i] === "*") {
        numbers[i - 1] = num1 * num2;
      } else if (numbers[i] === "/") {
        if (num2 === 0) {
          result.value = "Error";
          return;
        }
        numbers[i - 1] = num1 / num2;
      }

      numbers.splice(i, 2);
      i--;
    }
  }

  let finalResult = parseFloat(numbers[0]);

  for (let i = 1; i < numbers.length; i++) {
    let operator = numbers[i];
    let num = parseFloat(numbers[i + 1]);

    if (operator === "+") {
      finalResult += num;
    } else if (operator === "-") {
      finalResult -= num;
    }
    i++;
  }

  result.value = finalResult;
}
