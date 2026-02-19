# 🛠️ Installing & Running TypeScript – Complete Setup Notes 🚀

---

# 🎯 Lecture Goal

Is lecture ka main focus hai:

- ✅ TypeScript install karna (Global + Local)
- ✅ `.ts` file ko `.js` me convert karna
- ✅ tsconfig generate karna
- ✅ Watch mode samajhna
- ✅ npm scripts setup karna

Ab hum proper TypeScript project setup karenge 🔥

---

# 🌍 Step 1: Install TypeScript Globally

Sabse pehle hum TypeScript globally install karenge.

## 🔹 Global Install Command

```bash
npm install -g typescript
```

📌 `-g` ka matlab hai **global install**

Iske baad tum `tsc` command kahin bhi use kar sakte ho.

---

## 📦 Important Points

- Ye latest version install karega
- Version 5+ safe hai
- Latest version use karna recommended hai
- Older features (like decorators) bhi use kiye ja sakte hain

---

# 📁 Step 2: Create TypeScript File

Project folder open karo (example: `TypeScript Masterclass`)

New file create karo:

```
index.ts
```

📌 Important:
- TypeScript files ki extension hoti hai **.ts**
- JavaScript ki extension hoti hai **.js**

---

## ✍️ Simple Hello World Example

```ts
console.log("Hello World");
```

---

# 🔄 Step 3: Compile TypeScript into JavaScript

## 🔹 Using tsc Command

```bash
tsc index.ts
```

Ye command:

- `index.ts` ko convert karega
- Ek new file banayega → `index.js`

---

## ▶️ Run JavaScript File

Node se run karo:

```bash
node index.js
```

Output:
```
Hello World
```

---

# ⚡ Alternative: Using npx with tsc

```bash
npx tsc index.ts
```

⚠️ Important Difference:

1️⃣ Ye npm ka latest TypeScript version use karega  
2️⃣ Ye local `tsconfig.json` ko respect nahi karega  

📌 Is wajah se students confuse hote hain.

Recommendation:
👉 Normally `tsc` use karo (without npx)

---

# ⚙️ Step 4: Generate TypeScript Config File

TypeScript configuration generate karne ke liye:

```bash
tsc --init
```

Ye create karega:

```
tsconfig.json
```

---

## 📌 tsconfig.json Kya Karta Hai?

- Compiler behavior control karta hai
- Output folder decide karta hai
- Strict rules apply karta hai
- Version control karta hai

Future lectures me detail me cover hoga 🔥

---

# 🧠 Important Feature of tsc

Agar tum sirf ye run karo:

```bash
tsc
```

Toh TypeScript:

- Current directory ke saare `.ts` files find karega
- Sabko automatically `.js` me convert karega

Matlab:
Har baar file name dene ki zarurat nahi 🔥

---

# 👀 Watch Mode (Auto Compilation)

Development me baar baar `tsc` run karna annoying hota hai 😅

Isliye use karo Watch mode:

```bash
tsc -w
```

📌 `-w` = watch

Ye kya karega?

- Files me changes detect karega
- Automatically recompile karega
- Save karte hi JS update ho jayega

Development ke liye best option 🚀

---

# 📦 Step 5: Initialize npm Project

Ab project ko proper npm project banate hain.

```bash
npm init
```

Questions aayenge:
- Project name
- Version
- Entry point (yaha `index.ts` use kar sakte ho)
- License (MIT recommended)

Ye create karega:

```
package.json
```

---

# 📌 Global vs Local TypeScript

Ab tak hum TypeScript globally use kar rahe the.

Ab hum local install karenge 👇

## 🔹 Local Install as Dev Dependency

```bash
npm install -D typescript
```

📌 `-D` = development dependency

TypeScript sirf development me chahiye  
Production me nahi chahiye.

---

## 🎯 Local Install Ka Benefit

- Har project ka apna TypeScript version
- Global version pe depend nahi rehna
- Better version control

Example:
Project A → TS 5.x  
Project B → TS 4.x  

---

# 🚀 Step 6: Add npm Script for Watch Mode

`package.json` me scripts section me add karo:

```json
"scripts": {
  "start:dev": "tsc -w"
}
```

---

## ▶️ Run Development Script

```bash
npm run start:dev
```

Ab:

- TypeScript watch mode me chalega
- Changes detect karega
- Automatically JS file generate karega

Har development session me ye command run karo 🔥

---

# 🔁 Example of Auto Compilation

`index.ts` me change karo:

```ts
console.log("Hello World!");
```

Save karo 💾

Automatically:
`index.js` update ho jayega.

---

# ▶️ Run Compiled File

```bash
node index.js
```

Output:
```
Hello World!
```

---

# 🧠 Important Concepts Recap

| Concept | Meaning |
|----------|----------|
| tsc | TypeScript Compiler |
| tsconfig.json | Compiler settings file |
| -w | Watch mode |
| -g | Global install |
| -D | Dev dependency |
| npm run | Script execution |

---

# 🎯 Final Workflow (Professional Setup)

1️⃣ Install TypeScript locally  
2️⃣ Generate tsconfig  
3️⃣ Add watch script  
4️⃣ Run:

```bash
npm run start:dev
```

5️⃣ Write TypeScript  
6️⃣ Auto JS generate hoga  
7️⃣ Node se run karo  

---

# 🏁 Final Understanding

✔ TypeScript pehle JavaScript me convert hota hai  
✔ Node se JS run hota hai  
✔ Watch mode development fast karta hai  
✔ Local TypeScript version best practice hai  
✔ tsconfig project behavior control karta hai  

---

# 🚀 Quick Revision Summary

- `npm install -g typescript`
- `tsc index.ts`
- `node index.js`
- `tsc --init`
- `tsc -w`
- `npm init`
- `npm install -D typescript`
- `npm run start:dev`

---

Ab tumhara complete TypeScript project setup ready hai 🔥  
Next lecture me hum actual TypeScript concepts deeply samjhenge 🚀

---