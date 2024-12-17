// Selection
const display = document.querySelector(".display");
const equalsBtn = document.querySelector(".equals-btn");
const deleteBtn = document.querySelector('.delete-btn');
const clearBtn = document.querySelector(".clear-btn");

// Variables
let firstOperand = "";
let secondOperand = "";
let operator = null;

// Functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  let result;

  switch(operator) {
    case "+":
      result = add(num1, num2);
      break;

    case "-":
      result = subtract(num1, num2);
      break;

    case "×":
      result = multiply(num1, num2);
      break;

    case "÷":
      result = divide(num1, num2);
      break;
  }

  // Handle if result is float or integer
  if(Number(result) === result && result % 1 !== 0) {
    return parseFloat(result.toPrecision(8));
  } else {
    return result;
  }
}

function getOp(op) {
  if(operator && firstOperand && secondOperand) {
      secondOperand = operate(operator, secondOperand, firstOperand);
      display.textContent = secondOperand;

      firstOperand = "";
  } else {
    if(firstOperand) {
  
      secondOperand = firstOperand;
      firstOperand = "";
    }
  }

  operator = op;
}

function populateDisplay(num) {
  if(num === "."  && firstOperand.length === 0) firstOperand = "0";

  if(num === "." && firstOperand.includes(".")) return;

  if(firstOperand === "") {
    firstOperand = num; 
  } else {
    firstOperand += num;
  }

  updateDisplay();
}

function updateDisplay() {
  display.textContent = firstOperand;
}

function deleteNumber() {
  if(firstOperand && firstOperand !== "0") {
    firstOperand = firstOperand.slice(0, -1);
    updateDisplay();
  } 
  
  if(display.textContent === "") {
    display.textContent = "0";
  }
}

function clear() {
  firstOperand = "";
  secondOperand = "";
  operator = null;
  display.textContent = "0";
}

// Event Listeners

equalsBtn.addEventListener("click", () => {
  if(operator && firstOperand && secondOperand) {
    const result = operate(operator, secondOperand, firstOperand);
    secondOperand = result;
    display.textContent = secondOperand;

    if(operator === "÷" && firstOperand === "0" || firstOperand === "0.") {
      clear();
      display.textContent = "LOL";
    }

    firstOperand = "";
    operator = null;
  }
});

deleteBtn.addEventListener("click", () => {
  deleteNumber();
});

clearBtn.addEventListener("click", () => {
  clear();
});