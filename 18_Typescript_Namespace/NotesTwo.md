# ⚡ TypeScript + ES Modules + Node Modules (Deep Hinglish Notes)

---

# 🧠 1. Big Idea

👉 TypeScript sirf types nahi deta  
👉 Yeh JavaScript ke **modules system** ke saath bhi kaam karta hai  

---

## 🔥 Supported Module Systems

✔ ES Modules (ESM) → modern  
✔ CommonJS (CJS) → Node.js old standard  

---

# ⚙️ 2. ES Modules in TypeScript

---

## 📌 Config Changes (VERY IMPORTANT)

### tsconfig.json

    {
      "compilerOptions": {
        "module": "ESNext"
      }
    }

---

## 🧠 Why ESNext?

👉 Latest JS module system  
👉 Browser + modern tools support  

---

## ❌ Remove this (Namespace wala setup)

    "outFile": "./app.js"

👉 Kyunki ESM multiple files me kaam karta hai  

---

# 🌐 3. Browser Setup

---

## index.html

    <script type="module" src="app.js"></script>

---

## 🧠 Why?

👉 Browser ko batana padta hai:

"Ye file module hai"

---

# 🚀 4. Namespace → ES Module Conversion

---

## ❌ Old (Namespace)

    namespace MathUtils {
      export function add() {}
    }

---

## ✅ New (ES Module)

    export class MathUtils {
      static add(a: number, b: number) {
        return a + b
      }
    }

---

# 🔥 5. Static Methods Kyu?

---

👉 Object create nahi karna padta

    MathUtils.add(2, 3)

---

# 📦 6. Import Syntax (IMPORTANT)

---

## ❗ MUST ADD `.js`

    import { MathUtils } from "./math-utils.js"

---

## 🧠 Why `.js`?

👉 Browser JS file load karta hai  
👉 TS compile hone ke baad `.js` banta hai  

---

# ⚠️ 7. Common Error

---

❌ Error:

    404 not found

---

## 🧠 Reason

👉 `.js` extension missing  

---

# 🧩 8. Importing Other Modules

---

## common-utils.ts

    export class CommonUtils {
      static log(msg: string) {
        console.log(msg)
      }
    }

---

## math-utils.ts

    import { CommonUtils } from "./common-utils.js"

    export class MathUtils {
      static add(a: number, b: number) {
        CommonUtils.log("Adding...")
        return a + b
      }
    }

---

# 🎯 9. Types bhi export/import hote hain

---

## Interface File

    export interface AddOutput {
      sum: number
      source: string
    }

---

## Import use

    import { AddOutput } from "./add-output.js"

---

## Usage

    static add(a: number, b: number): AddOutput {
      return {
        sum: a + b,
        source: "MathUtils"
      }
    }

---

# 💡 10. Default Export

---

    export default interface AddOutput {}

---

## Import

    import AddOutput from "./add-output.js"

---

# 🚀 11. Big Takeaway

---

👉 Types bhi modules ke through share hote hain  

👉 TypeScript = full modular system  

---

# 🔥 12. Node.js Modules (CJS)

---

## Old Style Export

    module.exports = printHello

---

## Old Style Import

    const printHello = require("./file")

---

# ❌ Problem in TypeScript

👉 Error: module not found  

---

# 🔧 13. Solution 1 (Without Node Types)

---

## Export

    export = printHello

---

## Import

    import printHello = require("./file")

---

# 🔧 14. Solution 2 (Recommended)

---

## Install Node Types

    npm install -D @types/node

---

## Then use normal Node syntax

    module.exports = printHello

    const printHello = require("./file")

---

# 🔥 15. CJS vs ESM Together (IMPORTANT)

---

👉 TypeScript allows BOTH together  

---

## Example

### CJS

    module.exports = printHello

---

### ESM

    export function add(a, b) {}

---

### In app.ts

    const printHello = require("./strings")
    import { add } from "./math.js"

---

## ✅ Both work together

---

# ⚙️ 16. Enable Interoperability

---

## tsconfig

    {
      "module": "NodeNext"
    }

---

## Options

✔ node16  
✔ nodenext  

---

# 🧠 What happens?

👉 TypeScript samajh jata hai:

✔ CJS  
✔ ESM  

---

# 🧪 17. Execution

---

    node dist/app.js

---

## Output

    Hello World
    7

---

# ⚔️ 18. CJS vs ESM (Clear Difference)

---

## CommonJS

✔ require  
✔ module.exports  
✔ synchronous  

---

## ES Modules

✔ import/export  
✔ async loading  
✔ browser support  

---

# 🚀 19. Real World Usage

---

👉 Frontend → ES Modules  
👉 Backend (Node) → Mixed  

---

# 💥 20. Final Summary

---

✔ TypeScript supports ESM  
✔ Browser can directly use modules  
✔ `.js` extension mandatory  
✔ Types bhi export/import hote hain  
✔ CJS + ESM dono coexist karte hain  
✔ NodeNext config se interoperability milti hai  

---

# 🔥 PRO LEVEL INSIGHT

---

👉 Namespace ❌  
👉 ES Modules ✅  

---

👉 Interview Question:

"Can TypeScript export types?"

Answer:

✔ Yes, using ES Modules  

---

👉 Agar ye samajh gaya...

💀 Tu TypeScript ka **real-world production level system samajh gaya**