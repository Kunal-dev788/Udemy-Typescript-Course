// String Type
let firstName: string = "Kunal";
var lastName: string = "Rathore";
const city = "Bhopal";
let students: number = 32;
let studentsAsString: string = students.toString();

// Number Type
var age: number = 21;
let year: number = 2026;
const numberOfMembers = 20; // literal
let stringToNumber: number = parseInt("2004");

// Booleans
let isString: boolean = true;
const alwaysStudent: boolean = false;
let minimumAge: boolean = age > 18 ? true : false;

// Undefined
let User: undefined;
console.log(User);

// null
let userRole: null;
userRole = null;
console.log(userRole); // now

// BigInt
const bigInt1: bigint = BigInt(1234); // => 1234n
const bigInt2: bigint = 123456789n;
// you can't use bigInt with floating number type.

// symbol
let id: symbol = Symbol(1234);
let alphabeticId: symbol = Symbol("id");

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
