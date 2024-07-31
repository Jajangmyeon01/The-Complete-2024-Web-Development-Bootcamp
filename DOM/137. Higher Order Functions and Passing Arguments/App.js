$0.addEventListener("click", function () {
    console.log("I got clicked!");
});

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return  num1 - num2;
}

function multiply(num1, num2) {
    return  num1 * num2;
}

function divide(num1, num2) {
    return  num1 / num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}
calculator(5,3, add);

calculator(5,3, subtract);

calculator(5,3, multiply);

calculator(5,3, divide);

debugger;
calculatalor(5,3, add);

debugger;
calculatalor(5,3, subtract);

debugger;
calculatalor(5,3, multiply);

debugger;
calculatalor(5,3, divide);