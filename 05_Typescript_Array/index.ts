let nums: number[] = [1, 2, 3, 4];
let aplha: Array<string> = ["a", "b", "c"];
let mixed: (string | number)[] = [1, 2, 3, "a", "b", "c"];

type Caterer = {
  name: string;
  address: string;
  phone: number;
};

type Seats = {
  [key: string]: string;
};

type AirPlane = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Caterer;
  seats: Seats;
};

// Array of Object
type Airplanes = AirPlane[];

const Plane: Airplanes = [
  {
    model: "Airbus A380",
    flightNumber: "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
      name: "Special Food Ltd",
      address: "484, Some Street, New York",
      phone: 7867856751,
    },
    seats: {
      A1: "John Doe",
      A2: "Mark Doe",
      A3: "Sam Doe",
    },
  },
];

// Tuples -> fixed size with fixed order values
let person: [string, string, number] = ["Kunal", "Rathore", 21];

// Type Alias
type User = [string, string, number, string?];
let me: User = ["Kunal", "Rathore", 21, "kunal@email.com"];

// Tuple with multiple string value which do not exist at the time of declaration
type listOfStudents = [number, boolean, ...string[]];

const passingStudents: listOfStudents = [3, true, "John", "Stella", "Mark"];

const failingStudents: listOfStudents = [1, false, "Scott"];

// Tuples with any number of value in the beginning or end
// Type Alias can be used with Tuples as well
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

let stringBooleanNumber: StringBooleansNumber = ["string", true, false, 32];
let booleanStringNumber: BooleansStringNumber = [true, false, "string", 32];

// Readonly

// An array can be converted into readonly using the readopnly keyword
let number: readonly number[] = [1, 2, 3];

// Once an array is readonly no values can be added or removed from an array
// number.push(1);

// A tuple can be read only also
type ReadOnlyTuple = readonly [string, string, number];

// For our example let's create a new Tuple which is readonly
type ReadOnlyPerson = readonly [string, string, number];

// Creating a new readonly person
const per: ReadOnlyPerson = ["John", "Smith", 32];

//  There are some alternavites for creating Readonly Arrays
type a = Readonly<string[]>;
type b = ReadonlyArray<string>;

//  Alternative syntax for Readonly Tuple
type c = Readonly<[string, string, number]>;

//  Why Are enums needed?
// We ofetn declare constants in JavaScript for eg.
const STATUS_LOADING = "loading";
const STATUS_STOPPED = "stopped";

// The intension of declaring these constants is that we do not want the value to change
// because these cannot be reassiged to developers bny mistake cannot do this
// JavaScript will not throw an error but will not reassign the constant it will always remain loading
// STATUS_LOADING = "stopped";

// Auto incrementing values given to enums
// Single enum can contain all values
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// Assigning the first number and the rest would auto increment
enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right,
}

// String Enums
export enum Roles {
  admin = "admin",
  author = "author",
  editor = "editor",
}

// Use case for enums
type Person = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};

const human: Person = {
  name: "John",
  email: "john@email.com",
  password: "password",
  role: Roles.admin,
};

// Enums can be hetrogeneous as well
// Assigning the first number and the rest would auto increment
enum Direction3 {
  Up = 1,
  Down = "Down",
  Left = "Left",
}

// Redeclaring the same  using Enum
// const Enum, is not compiled in JavaScript as an Object but only the value is used
const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}
// Show the use of value
let eDirection = EDirection.Up;

// Declaring an object with same values as a constant
// Typescript sets each property as readonly
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

// Now this acts as an enum because you cannot change the value of properties
console.log("Object as const", ODirection.Up);
// ODirection.Up = "newValue";

// Enums can contain computed values as well
enum AccessPermission {
  None = 0,
  Read = 1,
  Write = 2,
  ReadWrite = Read + Write,
  Delete = 4,
  All = ReadWrite | Delete,
}

console.log(AccessPermission.ReadWrite);
console.log(AccessPermission.All);