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
  }

  operator = op;
  currentInput = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}