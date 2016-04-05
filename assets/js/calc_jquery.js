$(function () {
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
        $("#btnSelect").text(actionName);
    }

    function calculate() {
        if (!action) {
            alert('Выберите действие');
            return;
        }
        $("#result").val(action(+$("#num1").val(), +$("#num2").val()));
    }

    $("#btnEgually").click(calculate);
    $(".dropdown-menu li").click(function (event) {
        selectAction(event.target.innerText)
    });
});