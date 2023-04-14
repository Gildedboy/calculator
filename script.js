function add(firstOperand, secondOperand) {
  return firstOperand + secondOperand;
}

function substract(firstOperand, secondOperand) {
  return firstOperand - secondOperand;
}

function multiply(firstOperand, secondOperand) {
  return firstOperand * secondOperand;
}

function divide(firstOperand, secondOperand) {
  if (firstOperand == 0 || secondOperand == 0) {
    return "ERROR";
  }
  return firstOperand / secondOperand;
}

function operate(operator, firstOperand, secondOperand) {
  switch (operator) {
    case "+":
      return add(firstOperand, secondOperand);
    case "-":
      return substract(firstOperand, secondOperand);
    case "*":
      return multiply(firstOperand, secondOperand);
    case "/":
      return divide(firstOperand, secondOperand);
  }
}

const display = document.getElementById("display");
const numberButtons = Array.from(document.getElementsByClassName("number"));
const clear = document.getElementById("clear");
const operationButtons = Array.from(
  document.getElementsByClassName("operation")
);
const result = document.getElementById("result");

//Clear function
clear.addEventListener("click", () => {
  firstOperand = 0;
  secondOperand = 0;
  display.textContent = "0";
});

//Adding Numbers to display Function
numberButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (display.textContent == 0) {
      display.textContent = button.textContent;
    } else {
      display.textContent += button.textContent;
    }
  });
});

// //Adding Numbers to Operands

// // It looks like I will have to make the text content from string into numbers first in order to make them usable for the operations
// // First I have to to make a foreach click event listener that will apply to each button... when that occurs.. it will store the number of displaytext content into firstOperand and make the display text content 0

operationButtons.forEach((operationButton) => {
  firstOperand = 0;
  secondOperand = 0;
  operationButton.addEventListener("click", () => {
    if (display.textContent != 0 && firstOperand === 0) {
      operationSymbol = operationButton.textContent;
      firstOperand = parseFloat(display.textContent);
      display.textContent = 0;
      console.log(operationSymbol, firstOperand);
    } else {
      operationSymbol = operationButton.textContent;
      secondOperand = parseFloat(display.textContent);
      display.textContent = 0;
      console.log(secondOperand);
    }
    return [operationSymbol, firstOperand];
  });
});

result.addEventListener("click", () => {
  if (secondOperand == 0) {
    secondOperand = parseFloat(display.textContent);
  }
  operationResult = operate(operationSymbol, firstOperand, secondOperand);
  display.textContent = operationResult;
});
