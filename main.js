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

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}