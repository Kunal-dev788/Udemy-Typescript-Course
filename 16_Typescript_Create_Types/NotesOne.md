# 🧠 Creating Types from Existing Types (Hinglish Notes)

---

# 🚀 Why reuse existing types?

👉 TypeScript ka **real power yahin hai**

---

## 🎯 Benefits

✔ 🔁 No redundancy (repeat code nahi)  
✔ 🧹 Maintainable code  
✔ ❌ Fewer errors  
✔ 📈 Better scalability  

---

# 🧩 Generics with Interfaces

---

## ❌ Without Generics (Bad Approach)

    interface StringBox {
      content: string
      size: number
    }

    interface NumberBox {
      content: number
      size: number
    }

---

👉 Problem: repetition 😵  

---

## ✅ With Generics

    interface Box<T> {
      content: T
      size: number
    }

---

# 🧠 Insight

👉 T = dynamic type  

---

## Usage

### String Box

    const stringBox: Box<string> = {
      content: "Hello",
      size: 10
    }

---

### Number Box

    const numberBox: Box<number> = {
      content: 100,
      size: 5
    }

---

# 🔥 Benefit

✔ Same interface → multiple types  

---

# ⚙️ Generic Constraints

---

## Problem

👉 Har type me `.length` nahi hota  

---

## Solution

    interface LengthWise {
      length: number
    }

---

## Apply Constraint

    const logLength = <T extends LengthWise>(arg: T): void => {
      console.log(arg.length)
    }

---

## ✅ Valid

    logLength("hello")
    logLength([1, 2, 3])
    logLength({ length: 10 })

---

## ❌ Invalid

    logLength(42)

---

# 🧠 Insight

✔ Sirf wahi types allow honge jisme length hai  

---

# 🔑 keyof Operator

---

## Example Type

    type User = {
      id: number
      name: string
      age: number
    }

---

## Extract Keys

    type UserKeys = keyof User

---

## Result

👉 "id" | "name" | "age"

---

## Usage

    let key: UserKeys

    key = "id"
    key = "name"
    key = "age"

---

## ❌ Error

    key = "email"

---

# 💪 keyof + Generics (Power Combo)

---

## Goal

👉 Safe property access  

---

## Function

    const getProperty = <T, K extends keyof T>(
      obj: T,
      key: K
    ): T[K] => {
      return obj[key]
    }

---

# 🧠 Breakdown

✔ T → object type  
✔ K → keys of object  
✔ T[K] → value type  

---

## Example

    const user = {
      id: 1,
      name: "Alice",
      age: 30
    }

---

## ✅ Valid

    getProperty(user, "name")
    getProperty(user, "age")

---

## ❌ Invalid

    getProperty(user, "email")

---

# 🧠 Insight

✔ Compile-time safety  
✔ No invalid keys allowed  

---

# 🏁 Final Summary

---

## 🔹 Generics

✔ Reusable types  
✔ Flexible + powerful  

---

## 🔹 Constraints

✔ Limit generics safely  

---

## 🔹 keyof

✔ Extract keys from types  

---

## 🔹 keyof + Generics

✔ Build safe utilities  

---

# 💡 Final Insight

👉 TypeScript ka goal:

✔ Reusability  
✔ Safety  
✔ Scalability  

---

Agar yeh samajh aa gaya…

👉 tu TypeScript ka **advance reusable type system level unlock kar chuka hai 🔥🚀**