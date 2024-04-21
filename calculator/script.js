let currentInput = '';
let expression = '';

function appendNumber(number) {
    currentInput += number;
    expression += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === '') return;
    currentInput = '';
    expression += ' ' + op + ' ';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    expression = '';
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(expression);
        expression += ' = ' + result;
        currentInput = result.toString();
        updateDisplay();
        // Reset currentInput and expression for a new calculation
        currentInput = '';
        expression = '';
    } catch (error) {
        clearDisplay();
        alert("Invalid expression");
    }
}

function updateDisplay() {
    document.getElementById('display').value = expression;
}

window.onload = function() {
    clearDisplay();
}
