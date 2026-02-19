/**
 * Practice Excercise for functions
 */

//* 3. Declare a function signature named Calculator as a type that takes two numbers and returns a number. Implement two functions add and subtract that match this signature.

//* 4. Create a function named logMessage that takes a string message and logs it to the console, returning void. Also, create a function named throwError that takes a string message and throws an error, returning never.

//* 1. Declare a function named greet that takes a string parameter name and returns a greeting message.
const greet = (name: string): string => `Hello ${name} nice to meet you.`;

//* 2. Define an type Product with properties id (number) and name (string). Create a function named getProduct that takes an id parameter and returns a Product.

type Product = {
  id: number;
  name: string;
};

let products: Product[] = [
  {
    id: 23,
    name: "Shampoo",
  },
  {
    id: 24,
    name: "Soap",
  },
  {
    id: 25,
    name: "Toothpaste",
  },
  {
    id: 26,
    name: "Conditioner",
  },
];

const getProduct = (id: number): Product => {
  const findProduct = products.find((product) => product.id === id);

  if (!findProduct) {
    throw new Error("Product not found");
  }

  return findProduct;
};

//* 3. Declare a function signature named Calculator as a type that takes two numbers and returns a number. Implement two functions add and subtract that match this signature.
type Calculator = (one: number, two: number) => number;
const add: Calculator = (one: number, two: number): number => one + two;
const subtract: Calculator = (one: number, two: number): number => one - two;

//* 4. Create a function named logMessage that takes a string message and logs it to the console, returning void. Also, create a function named throwError that takes a string message and throws an error, returning never.

const logMessage = (message: string): void => console.log(message);
const throwError = (message: string): never => {
  throw new Error(message);
};
