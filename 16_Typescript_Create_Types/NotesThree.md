# 🧠 Conditional Types + Template Literal Types (Advanced Hinglish Notes)

---

# 🔀 Conditional Types (Deep Dive)

---

## 🎯 Concept

👉 Types pe condition lagana (like ternary operator)  

---

## Basic Syntax

    type MyType<T> = T extends SomeType ? TrueType : FalseType

---

## Example: Check if String

    type IsString<T> = T extends string ? "yes" : "no"

---

## Usage

    type Test1 = IsString<string>   // "yes"
    type Test2 = IsString<number>   // "no"

---

## 🧠 Insight

👉 Ye runtime pe nahi, compile time pe evaluate hota hai  
👉 Types ke upar logic apply karte ho  

---

# 🔥 Real Power: Utility Types Banana

---

## 🎯 Goal

👉 Agar object me string property ho → optional bana do  

---

## Custom Utility Type

    type OptionalIfString<T> = {
      [K in keyof T]: T[K] extends string
        ? T[K] | undefined
        : T[K]
    }

---

## Example Type

    type User = {
      id: number
      name: string
      age: number
    }

---

## Apply Utility

    type NewUser = OptionalIfString<User>

---

## 🧠 Result

    {
      id: number
      name?: string   // changed
      age: number
    }

---

## 🔍 Breakdown

✔ K → har property  
✔ keyof T → keys  
✔ T[K] → value type  
✔ extends string → condition  

---

## ⚠️ Important

👉 Values nahi → TYPES check ho rahe hain  

---

# 💡 Advanced Insight

👉 Conditional types = logic for types  
👉 Custom utility types bana sakte ho (like Partial, Pick etc.)

---

# 🧵 Template Literal Types

---

## 🎯 Concept

👉 Strings ke pattern se types banana  

---

## Basic Example

    type Status = "success" | "error" | "pending"

---

## Create New Type

    type StatusMessage = `status-${Status}`

---

## 🧠 Result

    "status-success" | "status-error" | "status-pending"

---

## 💡 Insight

👉 Automatically combinations generate ho jate hain  

---

# 🔥 Real-World Use Case

---

## RGB Pattern Type

    type RGB = `rgb(${number}, ${number}, ${number})`

---

## Usage

    const color1: RGB = "rgb(255, 0, 0)"   // ✅
    const color2: RGB = "rgb(255, 0, 0, 1)" // ❌ error

---

## 🧠 Insight

✔ Pattern validation  
✔ Format enforce kar sakte ho  

---

# 🚀 Advanced Use Cases

---

## 1. API Routes

    type Route = `/api/${string}`

---

## 2. Event Names

    type Event = `${string}Changed`

---

## 3. Dynamic Keys

    type Getter<T> = {
      [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
    }

---

# 🧠 Key Differences

---

## Conditional Types

👉 Logic based typing  

---

## Template Literals

👉 Pattern based typing  

---

# ⚡ Combined Power

👉 Conditional + Mapped + Template  
= SUPER ADVANCED TYPES 🔥  

---

# 🧠 Final Summary

---

✔ Conditional Types → IF/ELSE for types  
✔ Utility Types → custom bana sakte ho  
✔ Template Literals → string patterns  
✔ Compile-time safety → runtime bugs kam  

---

# 💥 Pro Insight

👉 Ye sab milke TypeScript ko:

👉 “Just typing tool” se  
👉 “Type-level programming language” bana dete hain 🚀

---

Agar ye samajh aa gaya…

👉 tu ab **TypeScript ke advanced level (pro zone 🔥)** me entry kar chuka hai