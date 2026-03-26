# 🚀 Static Block + Generics in Classes – Easy Hinglish Notes

---

# 🔥 Static Block – New Concept

Pehle humne dekha:

✔ Static properties  
✔ Static methods  

Ab aata hai:

👉 **Static Block**

---

# 🧠 Static Block Kya Hota Hai?

Static block:

✔ Class-level code hota hai  
✔ Static members initialize karne ke liye use hota hai  
✔ Class initialize hote hi run hota hai  
✔ Instance create hone ka wait nahi karta  

---

# 🛠️ Syntax

    class Counter {
      static count = 0

      static {
        console.log("Initializing Counter class")
      }
    }

Notice:

- `static { }`
- No function name
- No parameters

---

# ⚡ Initialization vs Instantiation

Important Difference:

✔ Initialization → Jab class first time load/use hoti hai  
✔ Instantiation → Jab `new` keyword se instance create hota hai  

Static block runs at:

👉 Initialization time  
❌ Not at instance creation time  

---

# 🎯 Static Block Example

    class Counter {
      static count = 0

      static {
        Counter.count = 5
      }

      static increment() {
        Counter.count++
      }
    }

Flow:

1️⃣ Class initialize hoti hai  
2️⃣ Static block runs → count = 5  
3️⃣ increment() call → count = 6  

---

# 🌍 External Dependency Example

Static block external function use kar sakta hai:

    function loadInitialCount(): number {
      return 10
    }

    class Counter {
      static count = 0

      static {
        Counter.count = loadInitialCount()
      }
    }

Result:

✔ count = 10 initially  
✔ increment ke baad = 11  

Static block kisi bhi external logic pe depend kar sakta hai.

---

# 🔁 Constructor vs Static Block

### 🧱 Constructor

✔ Instance-level  
✔ Har new instance pe run hota hai  
✔ Multiple times run ho sakta hai  

### 🏛️ Static Block

✔ Class-level  
✔ Sirf ek baar run hota hai  
✔ Class load hone pe execute hota hai  

---

# 🏆 Static Block Use Case

✔ Static values initialize karna  
✔ External config load karna  
✔ One-time setup logic  
✔ Class-level preparation  

---

# 🚀 Generics with Classes

Ab baat karte hain Generics ki.

Generics:

👉 Flexible type system  
👉 Same class multiple types ke saath use kar sakte hain  

---

# 📦 Problem Without Generics

Example:

    class Box {
      private _value: any

      constructor(value: any) {
        this._value = value
      }

      get value() {
        return this._value
      }

      set value(newValue: any) {
        this._value = newValue
      }
    }

Problem:

✔ Flexible hai  
❌ Type safety nahi hai  

Number box me string daal sakte ho 😬

---

# 🧠 Solution – Generic Class

Generic declare karte hain:

    class Box<T> {
      private _value: T

      constructor(value: T) {
        this._value = value
      }

      get value(): T {
        return this._value
      }

      set value(newValue: T) {
        this._value = newValue
      }
    }

Yaha:

`<T>` → Generic type variable

---

# 🎯 Ab Type Safe Ho Gaya

Number box:

    const numberBox = new Box(123)

TypeScript samajh gaya:

Box<number>

Agar try karo:

    numberBox.value = "hello"

❌ Error

---

# 📦 String Box

    const stringBox = new Box("Hello")

Ab ye:

Box<string>

Agar try karo:

    stringBox.value = 123

❌ Error

---

# 🧠 Type Inference vs Manual Type

Auto inference:

    const numberBox = new Box(123)

Manual:

    const numberBox = new Box<number>(123)

Dono same hain.

---

# 🎯 Generics Ka Benefit

✔ Type safety  
✔ Reusable class  
✔ No need for `any`  
✔ Strong compile-time checking  

---

# 🏆 Final Takeaways

Static Block:

✔ Class-level initialization  
✔ Ek baar run hota hai  
✔ Static members set karta hai  

Generics:

✔ Flexible but type-safe classes  
✔ Same class multiple types ke liye  
✔ TypeScript strict checking karega  

Ab tum:

✔ Static initialization  
✔ Class-level setup  
✔ Generic reusable classes  

Confidently build kar sakte ho 🚀🔥