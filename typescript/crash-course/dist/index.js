"use strict";
// Basic Types
let myAge = 26;
let myName = 'Tommy';
let isSingle = false;
let x = 'Hello';
x = 2022;
// Arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, '2', false, { value: 4 }];
// Tuple
let person = [1, 'Tommy', true];
// Tuple Array
let employee;
employee = [
    [1, 'Tommy'],
    [2, 'Janelle']
];
// Union
let pid = 22;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right"; // 4, but 3 by defeault
})(Direction1 || (Direction1 = {}));
;
console.log('Direction1.Left:', Direction1.Left);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = " Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
;
console.log('Direction2.Left:', Direction2.Left);
// Objects
// - Ugly Way
const user1 = {
    id: 301232950,
    name: 'Tommy Son'
};
const user2 = {
    id: 301232950,
    name: 'Tommy Son'
};
// Type Assertion
let cid = 1;
// - First Way 
// let customerId = <number>cid;
// customerId = '1'; // Produces error which we want
// - Second Way
// let customerId = cid as number;
// customerId = '1'; // Produces error which we want
// Functions
// -------------------------------------
//                                      | type of return value
//                                      V
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 1));
function log(message) {
    console.log(message);
}
log('Hello World!');
log(2022);
const tommy = {
    id: 301232950,
    name: 'Tommy Son'
};
const add = (x, y) => {
    return x + y;
};
// - You can't use `interface` with primitives or unions
// The example below is not able to be expressed with an `interface`:
// type Point = number | string;
// Classes
class Person {
    constructor(id, name, age) {
        console.log(`Person object created with id = ${id}, name = ${name}, and age = ${age}.`);
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const tommySon = new Person(301232950, 'Tommy Son', 26);
// tommySon.id = 69;            // Produces error as `id` property is `private`
// console.log(tommySon.age);   // Produces error as `age` property is `protected`
console.log(tommySon);
console.log(tommySon.register());
class FirstSquare {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    getArea() {
        return this.width * this.height;
    }
}
// - Using `extends` on `SquareInterface` to create a subclass
class SpecialSquare extends FirstSquare {
    constructor(width, height, color, position) {
        super(width, height, color);
        this.position = position;
    }
}
const aSpecialSquare = new SpecialSquare(5, 10, 'Blue', 'North');
console.log(aSpecialSquare.width);
console.log(aSpecialSquare.getArea());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['A', 'B', 'C', 'D']);
