// Declared Any Type
let firstName: any = "Kunal"; // Default Javascript Behaviour
firstName = 32; // that the problem

// Unknown Type => Type is not known now
const multiplyByTwo = (number: unknown) => {
  if (typeof number === "number") return number * 2;
  return "Please Provide a Number";
};
console.log(multiplyByTwo(2));

// Type Alias => That You Defined // Our Own Custom Types
// Declaration
type CustomString = string;
type CustomeNumber = number;
type CustomDate = Date;

// Annotation => Assigning
const fullName: string = "Kunal Rathore";
const lastName: CustomString = "Rathore";
const myNumber: CustomeNumber = 12;
const todayDate: CustomDate = new Date();

// Inference => Typescript Intelligently Known The Type
const addNumbers = (a: number, b: number) => a + b;
const addResult = addNumbers(12, 12); // here ==> least use

// Union
type StringOrNumber = string | number;
type StringOrNumberOrUndefined = string | number | undefined;

// Quick Overview Conditional Type
type TrueString = CustomString extends string ? true : false;
type ConditionalNumber = CustomeNumber extends number ? number : undefined;

// Type-Casting
let myName = <any>"Kunal Rathore";
let studentName = "Kunal" as any; // Better Way

// User from API
const user = {
  name: "Kunal Rathore",
  email: "Kunalrathore@email.com",
};

type User = {
  name: string;
  email: string;
};

function FetchUser() {
  return user as User;
}

const fetchedUser = FetchUser();  
