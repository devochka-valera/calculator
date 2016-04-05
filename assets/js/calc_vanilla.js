function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divided(a, b) {
    return a / b;
}

function getNum1() {
    return +getInputValue('num1');
}

function getNum2() {
    return +getInputValue('num2');
}

function getInputValue(id) {
    return document.getElementById(id).value;
}

var action;

function selectAction(actionName) {
    switch (actionName) {
    case '+':
        action = sum;
        break;
    case '-':
        action = subtract;
        break;
    case '*':
        action = multiply;
        break;
    case '/':
        action = divided;
        break;
    }
    document.getElementById('btnSelect').innerHTML = actionName;
}

function calculate() {
    if (!action) {
        alert('Выберите действие');
        return;
    }
    document.getElementById('result').value = action(getNum1(), getNum2());
}