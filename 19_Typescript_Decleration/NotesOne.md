# 📦 TypeScript Declaration Files (.d.ts) — Deep Hinglish Notes

---

# 🧠 1. Big Idea (Why Declaration Files?)

---

👉 TypeScript ka main goal:
**Type safety**

👉 Problem:
Existing projects → JavaScript me hote hain (no types)

👉 Solution:
**Declaration Files (.d.ts)**

---

# 🔥 Definition

---

👉 Declaration files = `.d.ts`

👉 Ye sirf **types define karte hain**
👉 **NO logic / NO implementation**

---

## Example

    function add(a, b) { return a + b }  ❌ (logic)

    declare function add(a: number, b: number): number  ✅ (types only)

---

# 🎯 2. Why Use Declaration Files?

---

## 💡 Main Use Cases

---

### 1. JS + TS bridge

👉 Existing JS code ko TS me use karna  

---

### 2. Gradual migration

👉 JS → TS slowly convert  

---

### 3. Third-party libraries

👉 JS libraries ko type-safe banana  

---

# 🌉 3. Real World Flow

---

JS Codebase  
⬇  
`.d.ts` files (types)  
⬇  
TS Codebase  

---

👉 TypeScript ko pata chal jata hai:

✔ function kya expect karta hai  
✔ kya return karega  

---

# 📦 4. Types Packages (NPM)

---

👉 Bahut saare JS libraries ke liye already types available hote hain

---

## Format

    @types/library-name

---

## Example

    @types/node

---

## 🧠 Ye kya hota hai?

👉 Sirf `.d.ts` files ka collection  

---

# 🌍 5. DefinitelyTyped

---

👉 Central GitHub repo:

✔ Sab JS libraries ke types  
✔ Community maintained  

---

👉 High chance:
Tumhari library ke types already exist karte hain  

---

# 🛠️ 6. Creating First Declaration File

---

## Step 1: JS File

    // calculator.js
    export function add(a, b) {
      return a + b
    }

---

## Step 2: Enable JS in TS

### tsconfig.json

    {
      "allowJs": true
    }

---

## Step 3: Import in TS

    import { add } from "./calculator.js"

---

## ❌ Problem

👉 Types unknown → `any`

---

# 🧾 7. Create Declaration File

---

## File name MUST match

    calculator.d.ts

---

## Syntax

    export declare function add(
      number1: number,
      number2: number
    ): number

---

## 🧠 Important

👉 `declare` = only type info  
👉 No function body  

---

# 🎯 Result

---

अब TypeScript samajhta hai:

✔ params = number  
✔ return = number  

---

# 🔥 8. Before vs After

---

## ❌ Before

    add(a: any, b: any): any

---

## ✅ After

    add(a: number, b: number): number

---

# 💡 9. Important Rules

---

✔ File name same hona chahiye  
✔ Extension = `.d.ts`  
✔ Logic nahi likhna  
✔ Only types  

---

# 🧱 10. Using Interfaces in Declaration Files

---

## JS File

    export function createUserProfile(id, name) {
      return {
        userId: id,
        userName: name,
        status: "active"
      }
    }

---

## Declaration File

    export interface UserProfile {
      userId: number
      userName: string
      status: "active" | "inactive"
    }

---

    export declare function createUserProfile(
      id: number,
      name: string
    ): UserProfile

---

# 🎯 Result

---

👉 TypeScript samajhta hai:

✔ input types  
✔ return object structure  

---

# 🔄 11. Interface vs Type

---

## Interface

    export interface UserProfile {}

---

## Type

    export type UserProfile = {}

---

## 🧠 Difference?

👉 Practically same in most cases  

---

# 📌 12. Using in app.ts

---

    import { createUserProfile } from "./user.js"

    const user = createUserProfile(1, "Kunal")

---

## TypeScript knows:

    user.userId → number  
    user.userName → string  
    user.status → "active" | "inactive"

---

# ⚠️ 13. Common Issues

---

## ❌ Error

    Could not find declaration file

---

## ✅ Fix

👉 Create `.d.ts` file  
👉 OR install `@types` package  

---

# 🚀 14. Key Takeaways

---

✔ `.d.ts` = types only  
✔ JS ko TypeScript compatible banata hai  
✔ Migration easy ho jata hai  
✔ Third-party libraries ke liye must  

---

# 💥 15. Pro Insights

---

👉 Real world me:

✔ Direct JS → TS conversion rare  
✔ Declaration files = bridge  

---

👉 Libraries:

✔ React  
✔ Node  
✔ Express  

Sabke types alag package me aate hain  

---

# 🧠 16. Interview Questions

---

### ❓ What is a declaration file?

👉 File that provides type info for JS code  

---

### ❓ Does it contain logic?

❌ No  

---

### ❓ Why needed?

👉 Type safety for JS  

---

### ❓ Extension?

👉 `.d.ts`

---

# 🔥 FINAL UNDERSTANDING

---

👉 JavaScript = runtime  
👉 TypeScript = compile-time  

---

👉 `.d.ts` = translator  

---

💀 Agar ye samajh gaya…

👉 Tu JS → TS migration expert level pe hai