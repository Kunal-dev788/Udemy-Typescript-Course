# 🧠 Structural vs Nominal Typing + Type Widening & Narrowing (Hinglish Notes)

---

# 🧬 Type Systems in Programming

👉 2 types hote hain:

1. Nominal Type System  
2. Structural Type System  

---

# 🏷️ Nominal Type System

👉 Language example: Java  

---

## 🧠 Concept

✔ Type ka naam matter karta hai  
✔ Structure same ho tab bhi alag types  

---

## ❌ Example

    type Employee = {
      name: string
      age: number
    }

    type User = {
      name: string
      age: number
    }

---

👉 Same structure hone ke baad bhi:

❌ Employee ≠ User  

---

# 🧩 Structural Type System (TypeScript)

👉 TypeScript yeh follow karta hai  

---

## 🧠 Concept

✔ Structure same → types compatible  

---

## ✅ Same Example

👉 Employee & User same structure → interchangeable  

---

# ⚽ Example (Ball vs Sphere)

    interface Ball {
      diameter: number
    }

    interface Sphere {
      diameter: number
    }

---

## Objects

    let ball: Ball = { diameter: 10 }
    let sphere: Sphere = { diameter: 20 }

---

## ✅ Allowed

    ball = sphere
    sphere = ball

---

# 🧠 Reason

✔ Same structure → same type treat hote hain  

---

# ❌ Structure Change

    interface Ball {
      diameter: number
      color: string
    }

---

👉 Ab:

❌ sphere → ball assign nahi hoga  

---

# 🧪 Extra Property Case (Tube)

    interface Tube {
      diameter: number
      length: number
    }

---

## Object

    let tube: Tube = {
      diameter: 12,
      length: 3
    }

---

## ✅ Allowed

    ball = tube

---

## ❌ Not Allowed

    tube = ball

---

# 🧠 Insight

✔ Extra properties ignore ho jaati hain  
✔ Missing properties → error  

---

# 🔥 Structural Typing Rule

👉 Required properties match hone chahiye  
👉 Extra chalega  
👉 Missing nahi chalega  

---

# 🧱 Problem: Validation Case

## Function

    const validateUserInput = (input: string) => {
      return input.trim()
    }

---

## Print Function

    const printName = (name: string) => {
      console.log(name)
    }

---

# ❌ Issue

    printName("Mark")  // without validation

👉 Unsafe  

---

# 🧠 Goal

👉 Sirf validated string allow karna  

---

# 🧩 Solution: Branded Type (Nominal Feel)

    type ValidatedString = string & {
      __brand: "validated"
    }

---

# ✏️ Apply

    const validateUserInput = (input: string) => {
      return input.trim() as ValidatedString
    }

---

    const printName = (name: ValidatedString) => {
      console.log(name)
    }

---

# ✅ Usage

    printName(validateUserInput("John"))

---

# ❌ Not Allowed

    printName("Mark")

---

# 🧠 Insight

👉 Structural system me bhi  
👉 Nominal jaisa strict behavior la sakte ho  

---

# 📈 Type Widening

## 🧠 Definition

👉 Specific type → general type  

---

## Example

    const welcome = "hello"
    let reply = "hey"

---

## Types

👉 welcome → "hello" (literal type)  
👉 reply → string (widened type)  

---

# 🧠 Reason

✔ const → fixed value  
✔ let → change ho sakta hai  

---

# 🔽 Type Narrowing

## 🧠 Definition

👉 General type → specific type  

---

## Example

    let value: string | undefined

---

## ❌ Error

    value.length

---

👉 Kyuki undefined ho sakta hai  

---

# ✅ Fix (Narrowing)

    if (value) {
      value.length
    }

---

# 🧠 Insight

✔ TypeScript samajhta hai value defined hai  
✔ Type narrow ho gaya → string  

---

# ⚙️ Strict Mode Role

👉 Narrowing tabhi kaam karta hai jab:

✔ strict mode = true  

---

# ❌ Strict Off

👉 Errors nahi aayenge  
👉 Unsafe code allow ho jayega  

---

# 🏁 Final Summary

---

## 🔹 Nominal Typing

✔ Name based  
❌ Strict but less flexible  

---

## 🔹 Structural Typing

✔ Structure based  
✔ Flexible  
❌ Sometimes unsafe  

---

## 🔹 Branding Trick

✔ Nominal jaisa behavior la sakte ho  

---

## 🔹 Widening

✔ const → specific  
✔ let → general  

---

## 🔹 Narrowing

✔ Checks ke through safe banate hain  

---

# 💡 Final Insight

👉 TypeScript ka philosophy:

✔ Flexible + Practical  
❌ Perfect strict nahi  

---

Agar yeh clear ho gaya…  
toh tu TypeScript ka **type system master level pe samajhne laga hai 🔥🚀**