# 🧠 Interfaces Advanced + Types vs Interfaces + Abstract vs Interface – Easy Hinglish Notes

---

# 🔁 Recap

👉 Interfaces = Contract  
👉 Classes = Implementation  
👉 Abstract Classes = Partial implementation  

---

# 🧩 Declaration Merging (Important Concept)

## 🧱 Interface Declare

    interface IUser {
      id: number
      name: string
    }

---

## 🧱 Same Interface Again

    interface IUser {
      passwordHash: string
    }

---

# 🧠 Kya Hua?

👉 TypeScript ne dono ko merge kar diya 🔥  

👉 Final Interface:

- id  
- name  
- passwordHash  

---

# ⚠️ Important

✔ Same name → merge ho jaata hai  
✔ Automatic behavior  

---

# ❌ Effect

👉 Class error throw karegi agar missing property ho  

---

## 🧱 Class

    class User implements IUser {
      constructor(
        public id: number,
        public name: string,
        public passwordHash: string
      ) {}
    }

---

# 🎯 Key Insight

👉 Declaration merging powerful hai  
👉 But kabhi kabhi confusion bhi create karta hai 😬  

---

# ⚔️ Types vs Interfaces

---

## 🧱 Types Example

    type User = {
      name: string
    }

    type Admin = {
      isAdmin: boolean
    }

---

# 🔗 Intersection Type

    const userAdmin: User & Admin = {
      name: "Kunal",
      isAdmin: true
    }

---

# 🔀 Union Type

    const userOrAdmin: User | Admin = {
      name: "Kunal"
    }

---

# 🧠 Insight

✔ Union & Intersection → only types me possible  

---

# 📦 Tuple (Types Only)

    type Response = [string, number]

---

# ⚠️ Interface Limit

❌ Tuple define nahi kar sakte  
❌ Union/Intersection nahi  

---

# 🔁 Interface Merging

✔ Interfaces merge ho sakte hain  
❌ Types me error aata hai  

---

# 🧬 Interface Extends

    interface Name {
      name: string
    }

    interface LastName {
      lastName: string
    }

    interface Person extends Name, LastName {}

---

# 🧠 Insight

✔ Multiple inheritance possible  

---

# 🏗️ Class Implements Multiple Interfaces

    class Person implements Name, LastName {
      constructor(
        public name: string,
        public lastName: string
      ) {}
    }

---

# 🎯 Summary (Types vs Interfaces)

| Feature | Type | Interface |
|--------|------|----------|
| Union | ✔ | ❌ |
| Intersection | ✔ | ❌ |
| Tuple | ✔ | ❌ |
| Merging | ❌ | ✔ |
| Extend | ❌ | ✔ |

---

# ⚔️ Abstract Class vs Interface

---

# 🧱 Abstract Class

    abstract class Person {
      abstract name: string
      abstract email: string
      abstract phone: number

      greet() {
        console.log("Hello " + this.name)
      }

      static className() {
        return "Person"
      }
    }

---

# 🧱 Interface

    interface User {
      name: string
      email: string
      phone: number
      greet(): void
    }

---

# 🧠 Similarity

✔ Dono contract define karte hain  

---

# ❗ Major Difference

## 🔹 Abstract Class

✔ Methods implement kar sakta hai  
✔ Static methods allowed  

---

## 🔹 Interface

❌ Implementation nahi hota  
✔ Sirf method signature  

---

# 🧪 Example (Abstract Class)

    class RegisteredPerson extends Person {
      constructor(
        public name: string,
        public email: string,
        public phone: number
      ) {
        super()
      }
    }

---

## Usage

    const p = new RegisteredPerson("John", "john@mail.com", 123)
    p.greet()

---

# 🧪 Example (Interface)

    class RegisteredUser implements User {
      constructor(
        public name: string,
        public email: string,
        public phone: number
      ) {}

      greet() {
        console.log("Hello " + this.name)
      }
    }

---

# 🧠 Insight

👉 Interface me method likhna padta hai  
👉 Abstract me already mil jata hai  

---

# 🚫 Inheritance Rule

✔ Class → only 1 class extend  
✔ Class → multiple interfaces implement  

---

# ⚡ Static Methods

✔ Abstract class → allowed  
❌ Interface → not allowed  

---

## Example

    Person.className()

---

# 🎯 When to Use What?

## ✅ Use Abstract Class When:

- Implementation chahiye  
- Shared methods chahiye  
- Static methods chahiye  

---

## ✅ Use Interface When:

- Sirf structure define karna ho  
- Loose coupling chahiye  
- Multiple inheritance chahiye  

---

# 🧠 Final Mental Model

👉 Interface = Contract 📜  
👉 Abstract Class = Partial Blueprint 🏗️  

---

# 🏁 Final Summary

✔ Interfaces → flexible & scalable  
✔ Types → advanced typing  
✔ Abstract Classes → reusable logic  

---

# 💡 Final Insight

👉 Real world projects me teeno use hote hain  

✔ Interface → structure  
✔ Type → complex typing  
✔ Abstract → shared logic  

---

Agar ye samajh gaya…  
toh tu TypeScript ka **full advanced OOP level hit kar chuka hai 🚀🔥**