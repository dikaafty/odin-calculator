let currentInput = '';
let operator = null;
let firstOperand = null;

function appendNumber(num) {
  currentInput += num;
  updateDisplay();
}

function appendDecimal() {
  if(!currentInput.includes('.')) {
    currentInput += '.';
  }
  updateDisplay();
}

function setOperator(op) {
  if(currentInput === '') return;
  if(firstOperand === null) {
    firstOperand = parseFloat(currentInput);
  } else if(operator) {
    firstOperand = operate(firstOperand, parseFloat(currentInput), operator);
  }

  operator = op;
  currentInput = '';
  updateDisplay();
}

function calculate() {
  if(operator === null || currentInput === '') return;
  if(firstOperand === null) return;

  const result = operate(firstOperand, parseFloat(currentInput), operator);
  currentInput = result.toString();
  operator = null;
  firstOperand = null;
  updateDisplay();
}

function operate(a, b, op) {
  if(op === '/' && b === 0) {
    return 'Error'; // Handle division by zero
  }

  switch(op) {
    case '+': return a + b;
    case '-': return a - b;
    case '×': return a * b;
    case '÷': return a / b;
    default: return b;
  }
}

function clearAll() {
  currentInput = '';
  operator = null;
  firstOperand = null;
  updateDisplay();
}

function deleteLastChar() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}