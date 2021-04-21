"use strict";
exports.__esModule = true;
function add(number1, number2) {
    if (number2 === void 0) { number2 = 10; }
    if (number2)
        return number1 + number2;
    else
        return number1;
}
add(5, 10);
add(5);
function FullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Steve',
    lastName: 'John'
};
FullName(p);
