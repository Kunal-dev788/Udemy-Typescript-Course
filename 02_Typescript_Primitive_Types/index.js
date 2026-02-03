"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// String Type
let firstName = "Kunal";
var lastName = "Rathore";
const city = "Bhopal";
let students = 32;
let studentsAsString = students.toString();
// Number Type
var age = 21;
let year = 2026;
const numberOfMembers = 20; // literal
let stringToNumber = parseInt("2004");
// Booleans
let isString = true;
const alwaysStudent = false;
let minimumAge = age > 18 ? true : false;
// Undefined
let User;
console.log(User);
// null
let userRole;
userRole = null;
console.log(userRole); // now
// BigInt
const bigInt1 = BigInt(1234); // => 1234n
const bigInt2 = 123456789n;
// you can't use bigInt with floating number type.
// symbol
let id = Symbol(1234);
let alphabeticId = Symbol("id");
let user = {
    [id]: "1234",
    name: "Kunal Rathore",
    getId() {
        return this[id];
    },
};
console.log(user.name);
console.log(user.getId);
// console.log(user.id) not accessable like access modifier illusion
//# sourceMappingURL=index.js.map