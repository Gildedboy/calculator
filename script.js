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
  if (firstOperand === 0 || secondOperand === 0) {
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

//console.log(numberButtons);

numberButtons.forEach((button) =>
  button.addEventListener("click", function () {
    //console.log(typeof +display.textContent);
    display.textContent = button.textContent;
  })
);
