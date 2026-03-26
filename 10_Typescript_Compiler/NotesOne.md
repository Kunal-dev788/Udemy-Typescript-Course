# ⚙️ TypeScript Tsconfig – Easy Hinglish Notes (Complete Guide)

Ab se hum `tsconfig.json` file ke important options samjhenge 🚀  
Ye file decide karti hai ki TypeScript compiler kaise behave karega.

---

# 📁 1️⃣ exclude Property

### 🧠 Kya karta hai?
`exclude` ek array hota hai jisme tum wo files/folders daalte ho  
jo TypeScript compile nahi karega.

Example idea:

exclude: ["app2.ts"]

👉 Iska matlab app2.ts compile nahi hoga.

---

### 📦 Folder Exclude Karna

exclude: ["node_modules"]

⚠ Important Rule:

- Agar tum `exclude` define nahi karte → node_modules automatically exclude hota hai  
- Agar tum `exclude` manually define kar dete ho → fir tumhe node_modules explicitly likhna padega  

---

### ⭐ Wildcards (Pattern Matching)

Single star:

exclude: ["*.exclude.ts"]

👉 Jitni bhi files `.exclude.ts` se end hoti hain, wo compile nahi hongi.

Double star:

exclude: ["**/*.exclude.ts"]

👉 Kisi bhi folder ya subfolder me agar `.exclude.ts` file mile → compile nahi hogi.

---

# 📂 2️⃣ include Property

### 🧠 Kya karta hai?
`include` batata hai ki kaunsi files compile hongi.

include: ["src"]

👉 Sirf src folder ke andar wali files compile hongi.

Rule yaad rakho:

Compilation = include − exclude  

Jo include me nahi hai → wo compile hi nahi hoga.

---

# 📦 3️⃣ rootDir (Root Directory)

### 🧠 Purpose:
Batata hai source TypeScript files kahan rakhi hui hain.

Example idea:

rootDir: "src"

👉 Ab TypeScript sirf src folder ke andar TS files dhundega.

Agar file src ke bahar hui → error aayega.

Best Practice:

Large projects me hamesha ek `src` folder use karo  
taaki code organized rahe.

---

# 📤 4️⃣ outDir (Output Directory)

### 🧠 Purpose:
Batata hai compiled JavaScript files kahan jayengi.

Example idea:

outDir: "dist"

👉 Saari compiled JS files dist folder me generate hongi.

Important:

Folder structure preserve hota hai.

Agar src me:

src/functions/username.ts

To dist me milega:

dist/functions/username.js

Clean structure maintain hota hai ✅

---

# 🎯 5️⃣ target Property

### 🧠 Kya karta hai?
Define karta hai ki TypeScript kaunsa JavaScript version me convert hoga.

Example:

target: "ES2016"

Possible values:
ES3, ES5, ES6, ES2016, ES2022, ESNext etc.

---

### 🤔 Kaunsa Target Choose Karein?

Depends on:

- Browser project hai?
- React project hai?
- Node backend hai?

Example:

React projects → Often ES5  
Node 17+ → ES2022  

Most frameworks already correct config provide karte hain.

---

# 📚 6️⃣ lib Property

### 🧠 Ye kya hota hai?
Libraries define karta hai jo TypeScript automatically include karega.

Example:

lib: ["DOM", "ESNext"]

---

### ❓ Document Object Error Kyu Aata Hai?

Agar lib empty kar do:

lib: []

To TypeScript ko DOM ka idea nahi hoga.

👉 document undefined error dega.

Kyuki DOM library remove ho gayi.

---

### 🔥 target aur lib ka Relation

Target decide karta hai:

- Kaunsi JS features available hongi
- Kaunsi default libraries include hongi

Example:

ES6 target → Map, Set available  
Node environment → DOM ki zarurat nahi  
React app → DOM required  

---

# 🏗 Best Practice Structure

Project structure ideal:

src → TypeScript files  
dist → Compiled JavaScript  

tsconfig:

rootDir: "src"  
outDir: "dist"  

Ye industry standard structure hai 🚀

---

# 🎯 Final Summary

## exclude
Jo compile nahi karna

## include
Jo compile karna hai

## rootDir
Source TS files ka folder

## outDir
Compiled JS files ka folder

## target
JS version jisme compile hoga

## lib
Kaunsi built-in libraries include hongi

---

🧠 Real Tip:

Zyada cases me:

- Framework ka tsconfig use karo
- Sirf rootDir, outDir aur target samajhna enough hai
- Advanced settings tab chhedo jab zarurat ho

Tsconfig samajh liya to TypeScript compiler pe full control mil jata hai 🔥