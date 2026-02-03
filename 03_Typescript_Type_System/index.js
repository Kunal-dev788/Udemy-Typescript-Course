"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Declared Any Type
let firstName = "Kunal"; // Default Javascript Behaviour
firstName = 32; // that the problem
// Unknown Type => Type is not known now
const multiplyByTwo = (number) => {
    if (typeof number === "number")
        return number * 2;
    return "Please Provide a Number";
};
console.log(multiplyByTwo(2));
// Annotation => Assigning
const fullName = "Kunal Rathore";
const lastName = "Rathore";
const myNumber = 12;
const todayDate = new Date();
// Inference => Typescript Intelligently Known The Type
const addNumbers = (a, b) => a + b;
const addResult = addNumbers(12, 12); // here ==> least use
//# sourceMappingURL=index.js.map