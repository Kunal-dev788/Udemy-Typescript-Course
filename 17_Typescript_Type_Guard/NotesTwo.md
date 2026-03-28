# 🛡️ Equality, "in", and instanceof Type Guards (Deep Hinglish Notes)

---

# ⚖️ Equality Narrowing

---

## 🎯 Concept

👉 Equality checks (===, !==) use karke type narrow karna  

---

## 🔥 Best Use Case

👉 Union types ke saath  

---

## Example Types

    type Circle = {
      kind: "circle"
      radius: number
    }

    type Square = {
      kind: "square"
      sideLength: number
    }

    type Shape = Circle | Square

---

## Function

    function getArea(shape: Shape) {
      if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
      } else {
        return shape.sideLength ** 2
      }
    }

---

## 🧠 What Happens?

✔ shape.kind === "circle"  
→ TypeScript samajh gaya → Circle  

✔ else block  
→ Automatically Square  

---

## 💡 Insight

👉 Ek property se pura object type infer ho jata hai  

---

## 🚀 Key Benefit

❌ Manual checks nahi likhne padte  
✔ Clean + safe code  

---

# 🔍 "in" Operator Narrowing

---

## 🎯 Concept

👉 Check karo property exist karti hai ya nahi  

---

## Example

    function getArea(shape: Shape) {
      if ("radius" in shape) {
        return Math.PI * shape.radius ** 2
      } else {
        return shape.sideLength ** 2
      }
    }

---

## 🧠 How it Works

✔ "radius" in shape → Circle  
✔ otherwise → Square  

---

## ⚠️ Limitation

👉 Agar dono types me same property ho  
→ "in" fail ho sakta hai  

---

## 💡 Insight

👉 Use "in" when properties unique ho  

---

# ⚖️ Equality vs "in"

---

## Equality (Better)

✔ Discriminated unions  
✔ Common property (kind)

---

## "in" Operator

✔ Property existence check  
✔ When no common discriminator  

---

# 🧱 instanceof Type Guard

---

## 🎯 Concept

👉 Check karo object kis class ka instance hai  

---

## 🔥 Best Use Case

👉 Classes + OOP  

---

# 🧪 Example (E-commerce)

---

## Abstract Class

    abstract class Product {
      constructor(
        public name: string,
        public price: number
      ) {}

      abstract getPrice(): number
    }

---

## Electronics Class

    class Electronics extends Product {
      constructor(name: string, price: number, public warranty: number) {
        super(name, price)
      }

      getPrice() {
        return this.price
      }
    }

---

## Clothing Class

    class Clothing extends Product {
      constructor(
        name: string,
        price: number,
        public size: string,
        public material: string
      ) {
        super(name, price)
      }

      getPrice() {
        return this.price
      }
    }

---

# 🔍 Using instanceof

---

    function displayDetails(product: Product) {

      console.log(product.name)
      console.log(product.price)

      if (product instanceof Electronics) {
        console.log(product.warranty)
      }

      else if (product instanceof Clothing) {
        console.log(product.size)
        console.log(product.material)
      }
    }

---

# 🧠 What TypeScript Does

✔ Electronics → warranty available  
✔ Clothing → size & material available  

---

## 💡 Insight

👉 TS automatically type narrow karta hai  

---

# ⚡ Why instanceof is Powerful?

---

✔ Class-based narrowing  
✔ Methods + properties access safe  
✔ IDE autocomplete improve  

---

# 🚀 Comparison Summary

---

## Equality Narrowing

👉 value check (kind === "circle")

---

## "in" Operator

👉 property existence check  

---

## instanceof

👉 class instance check  

---

# 🧠 Final Mental Model

---

👉 Equality → "ye type kya hai?"  
👉 in → "isme ye property hai?"  
👉 instanceof → "ye kis class ka object hai?"  

---

# 💥 Pro Insight

---

👉 Real-world code me mostly:

✔ APIs → equality narrowing  
✔ Objects → "in"  
✔ Classes → instanceof  

---

# 🧠 Final Takeaway

---

👉 Type Guards = smart filtering system  

---

✔ TypeScript ko samajh aata hai  
✔ Tumhe safe code likhne deta hai  
✔ Bugs prevent karta hai  

---

Agar ye clear ho gaya…

👉 tu ab **Type Guards ka complete mastery zone touch kar raha hai 🔥🚀**