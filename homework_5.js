"use strict";
// 5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции (использовать switch) выполнить одну из арифметических операций (использовать функции из задания 4) и вернуть полученное значение.

function summa(a, b) {
    return a + b;
}

function difference(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

/**
 * @param {number} arg1
 * @param {number} arg2
 * @param {string} operation 
 * @throws {Error} 
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return summa(arg1, arg2);
        case "-":
            return difference(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        default:
            throw new Error("Ошибка, проверьте правильность данных");
    }
}

let oneNumbers = parseInt(prompt('Введите первое значение: '));
let twoNumbers = parseInt(prompt('Введите второе значение: '));

alert(mathOperation(oneNumbers, twoNumbers, "+"));
alert(mathOperation(oneNumbers, twoNumbers, "-"));
alert(mathOperation(oneNumbers, twoNumbers, "*"));
alert(mathOperation(oneNumbers, twoNumbers, "/"));
alert(mathOperation(oneNumbers, twoNumbers, "слово"));