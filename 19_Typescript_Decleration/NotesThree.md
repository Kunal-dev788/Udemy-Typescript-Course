# 🚀 Declaration Files Advanced (Classes + Global + npm Types) — Hinglish Notes

---

# 🧠 1. Declaration Files for Classes

---

## Problem

👉 JS class me types nahi hote  
👉 TS ko pata nahi hota:

- constructor kya leta hai  
- methods kya return karte hain  
- properties kya hain  

---

## JS Class Example

    export class User {
      constructor(greeting) {
        this.greeting = greeting
      }

      createUser(name) {
        this.user = {
          name,
          greeting: this.greeting
        }
        return this.user
      }

      showGreeting() {
        console.log(`${this.greeting} ${this.user.name}`)
      }
    }

---

# ⚠️ Issue

---

👉 TypeScript sees everything as `any`

---

# 🔥 Solution: Class Declaration in `.d.ts`

---

## Basic Structure

    export declare class User {
      greeting: string

      user: {
        name: string
        greeting: string
      }

      constructor(greeting: string)

      createUser(name: string): {
        name: string
        greeting: string
      }

      showGreeting(): void
    }

---

# 🧠 Key Rules

---

✔ `declare class` → no implementation  
✔ Only types define karo  
✔ Class name SAME hona chahiye  

---

# 🧱 2. Inheritance in Declaration Files

---

## JS

    export class AdminUser extends User {
      constructor() {
        super("Hello Admin")
      }

      showGreeting() {
        // override
      }
    }

---

## Declaration

    export declare class AdminUser extends User {
      constructor()
      showGreeting(): void
    }

---

# 🧠 Important

---

✔ `extends` same use hota hai  
✔ override methods declare karne padte hain  

---

# 🎯 Result

---

👉 TypeScript understands:

- AdminUser inherits User  
- methods available  
- correct types  

---

# 🔥 3. Using Class with Types

---

    const admin = new AdminUser()

    admin.createUser("Bob")
    admin.showGreeting()

---

👉 Full type safety + IntelliSense  

---

# 💡 4. Key Insight

---

👉 `.d.ts` class = "type blueprint"

---

❌ No logic  
✔ Only structure  

---

# 🌍 5. Global Declarations (Very Important)

---

## Problem

👉 Some JS things global hote hain:

- window.authService  
- global variables  

---

👉 TS ko pata nahi hota  

---

# 🚀 Solution: `global.d.ts`

---

## Step 1: Create File

    global.d.ts

---

## Step 2: Declare Global

    export {}

    declare global {
      // global types here
    }

---

# 🧱 Example: Auth Service

---

## JS

    window.authService = {
      currentUser: null,

      login(username, password) { ... },

      isLoggedIn() { ... }
    }

---

# 🧠 Types Create

---

## User Interface

    interface User {
      id: number
      username: string
    }

---

## AuthService Interface

    interface AuthService {
      currentUser: User | null

      login(username: string, password: string): boolean

      isLoggedIn(): boolean
    }

---

## Global Variable

    declare global {
      var authService: AuthService
    }

---

# 🎯 Result

---

👉 Without import:

    authService.login("user", "password")

---

👉 TypeScript knows:

✔ methods  
✔ parameters  
✔ return types  

---

# 💥 6. Important Concept

---

👉 This is called:

## 🔥 Ambient Declarations

---

👉 Means:

"Global context me available types"

---

# ⚠️ Key Rules

---

✔ `declare global` required  
✔ variable must match JS name  
✔ types must match exactly  

---

# 🧠 7. How It Works

---

👉 JS:

    window.authService

👉 TS:

    global.d.ts → tells TS

---

👉 Browser:

    script load karta hai  

---

👉 TS:

    types provide karta hai  

---

# 🔥 8. Real World Use Cases

---

✔ Analytics SDK  
✔ Auth SDK  
✔ Global configs  
✔ Third-party scripts  

---

# 📦 9. npm Packages & Types

---

## Problem

👉 Many npm packages = JavaScript only  

---

## Example

👉 Express.js  

---

# 🔍 How to Identify

---

## Case 1: TS Package

✔ Already written in TypeScript  
✔ No extra types needed  

---

## Case 2: JS Package (DT icon)

✔ Need types package  

---

# 🚀 Install

---

    npm install express
    npm install @types/express

---

# 🧠 Why?

---

👉 `@types/*` = declaration files  

👉 Comes from:

## 🔥 DefinitelyTyped repo

---

# 💡 Rule

---

| Package Type | Need Types? |
|-------------|------------|
| TS package  | ❌ No       |
| JS package  | ✅ Yes      |

---

# ⚔️ 10. Behind the Scenes

---

👉 `@types/express` contains:

    index.d.ts

---

👉 Defines:

✔ request  
✔ response  
✔ middleware types  

---

# 💀 11. Big Picture

---

## JS World

👉 Flexible  
👉 No types  

---

## TS World

👉 Strict  
👉 Type-safe  

---

## Bridge

👉 `.d.ts` files  

---

# 🚀 12. Final Takeaways

---

✔ Classes can be typed in `.d.ts`  
✔ Inheritance supported  
✔ Global variables typed via `global.d.ts`  
✔ npm packages need `@types` sometimes  

---

# 🔥 PRO LEVEL UNDERSTANDING

---

👉 `.d.ts` = TypeScript ka "shadow system"

---

👉 Real code JS me  
👉 Types TS me  

---

# 🎯 Interview Questions

---

### ❓ declare class kya karta hai?

👉 Class ka type define karta hai without implementation  

---

### ❓ global.d.ts kya hai?

👉 Global types define karne ke liye  

---

### ❓ @types package kya hota hai?

👉 JS library ke types  

---

### ❓ declare vs export?

👉 declare = define type  
👉 export = make usable  

---

# 💥 FINAL LINE

---

👉 Agar tu ye samajh gaya:

✔ Classes typing  
✔ Global typing  
✔ npm typing  

---

🔥 Tu **TypeScript ecosystem level understanding** pe aa gaya hai