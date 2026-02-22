/**
 * ! You are developing a simple employee management system for a company. Implement the following requirements using TypeScript:
 *
 * TODO: 1. Class Definition: Create a class Employee with the following properties:
 ** -  name (string, public)
 ** -  age (number, public)
 ** -  salary (number, private)
 ** -  id (number, protected)
 *
 * TODO: 2. Use shorthand syntax in the constructor to initialize the properties name and age.
 *
 * TODO: 3. Implement getter and setter methods for the salary property. The setter should ensure the salary is a positive number.
 *
 * TODO: 4. Add a static property companyName (string, public) and a static method getCompanyName that returns the company name.
 *
 * TODO: 5. Create a subclass Manager that extends the Employee class. Add an additional property department (string, public).
 *
 * TODO: 6. Override a method getDetails in the Manager class to include the department information along with the employee details.
 */

class Employee {
  public static companyName: string = "ABC Company";

  public static getCompanyName(): string {
    return Employee.companyName;
  }

  private _salary?: number;

  constructor(
    public name: string,
    public age: number,
    protected id: number
  ) {}

  public set salary(amount: number) {
    if (amount <= 0) {
      throw new Error("Salary must be positive");
    }
    this._salary = amount;
  }

  public get salary(): number {
    if (this._salary === undefined) {
      throw new Error("Salary not set yet");
    }
    return this._salary;
  }

  public getDetails(): void {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Id: ${this.id}, Salary: ${this._salary ?? "N/A"}`
    );
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    age: number,
    id: number,
    public department: string
  ) {
    super(name, age, id);
  }

  public override getDetails(): void {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Id: ${this.id}, Salary: ${this["_salary"] ?? "N/A"}, Department: ${this.department}`
    );
  }
}