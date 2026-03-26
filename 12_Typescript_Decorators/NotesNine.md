# 🔐 Getter & Setter Decorators (Accessor Decorators) – TypeScript Stage 3

Ab tak hum:

✔ Method decorators  
✔ Field decorators  
✔ Class decorators  

dekh chuke hain.

Ab dekhte hain **Accessor decorators** —  
matlab `get` aur `set` ke saath decorators kaise kaam karte hain.

---

# 🟢 Step 1 — Basic Person Class

```ts
class Person {

  constructor(public name: string) {}

  greet() {
    console.log(`Hello ${this.name}`);
  }

  private _age: number = 10;

  public get age() {
    return this._age;
  }

  public set age(value: number) {
    this._age = value;
  }
}