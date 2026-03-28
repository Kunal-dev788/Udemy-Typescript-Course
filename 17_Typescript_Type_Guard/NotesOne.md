# 🛡️ Type Guards + Narrowing (Deep Hinglish Notes)

---

# 🔰 What are Type Guards?

---

## 🎯 Concept

👉 Type Guards = runtime checks jo TypeScript ko help karte hain  
👉 Narrow down karne ke liye (refine type)

---

## Simple Meaning

👉 "Ye value actually kaunsi type ki hai?"  

---

## JavaScript Example

    function convert(num) {
      if (typeof num !== "number") {
        console.log("Invalid input")
        return
      }

      return num.toString()
    }

---

## 🧠 Insight

👉 Ye already JS me use karte ho  
👉 TypeScript bas isko smarter bana deta hai  

---

# ⚡ Types of Type Guards (Overview)

---

✔ typeof  
✔ instanceof  
✔ in operator  
✔ custom guards  
✔ truthiness narrowing  

---

# 🔍 typeof as Type Guard (Deep)

---

## Example

    function printStrings(str: string | string[] | null) {

---

## Case 1: Array

    if (typeof str === "object" && str !== null) {
      for (const s of str) {
        console.log(s)
      }
    }

---

## Case 2: String

    else if (typeof str === "string") {
      console.log(str)
    }

---

## Case 3: Fallback

    else {
      console.log("Invalid input")
    }

---

# ⚠️ Important JavaScript Quirk

👉 typeof null === "object"  

---

## ❗ Problem

👉 null ko object treat karta hai JS  

---

## ✅ Fix

    typeof str === "object" && str !== null

---

# 🧠 TypeScript Advantage

👉 TS automatically warn karta hai  
👉 Hidden bugs catch karta hai  

---

# 💡 Insight

👉 JS me bug silently hota  
👉 TS me compile time pe pakda jata  

---

# 🔥 Truthiness Narrowing

---

## 🎯 Concept

👉 Truthy / Falsy check se type narrow karna  

---

## Falsy Values

---

❌ null  
❌ undefined  
❌ false  
❌ 0  
❌ NaN  
❌ "" (empty string)  

---

# 🧪 Example

---

    type Person = {
      name: string
      age?: number
    }

---

## Function

    function printAge(person: Person) {
      if (person.age) {
        console.log(person.age)
      } else {
        console.log("Age unknown")
      }
    }

---

# 🧠 What TypeScript Does

👉 if(person.age) → age is definitely number  

---

## Automatic Narrowing

✔ undefined remove ho gaya  
✔ only number bacha  

---

# ⚠️ Edge Case

---

👉 age = 0 → falsy hai  

---

## Problem

    if(person.age) ❌

---

## Better Approach

    if(person.age !== undefined) ✅

---

# 💡 Insight

👉 Truthiness simple hai but tricky bhi hai  

---

# 🔥 TypeScript Smartness

---

## Wrong Example

    const user = {
      name: "John",
      age: "25"
    }

---

## Error

👉 string is not assignable to number  

---

# 🧠 Benefit

👉 Runtime bug avoid  
👉 Strict typing enforce  

---

# ⚡ Comparison

---

## JavaScript

❌ Manual checks  
❌ Runtime errors  

---

## TypeScript

✔ Compile-time safety  
✔ Auto narrowing  
✔ Smart inference  

---

# 🚀 Key Takeaways

---

## 🔹 Type Guards

👉 Type identify karte hain  

---

## 🔹 typeof

👉 Primitive type checking  

---

## 🔹 Truthiness

👉 Falsy/truthy se narrowing  

---

## 🔹 TypeScript Power

👉 Edge cases detect karta hai  
👉 Developer mistakes reduce  

---

# 🧠 Final Insight

👉 Type Guards = TypeScript ka superpower  

---

👉 Ye ensure karta hai:

✔ Safe code  
✔ Predictable behavior  
✔ Less runtime bugs  

---

# 💥 Pro Tip

---

👉 Always prefer:

    value !== undefined

instead of:

    if(value)

---

Agar ye clear ho gaya…

👉 tu ab **Type narrowing & type guards ka solid base build kar chuka hai 🔥**