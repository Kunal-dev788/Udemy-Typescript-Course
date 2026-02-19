# 🧩 First TypeScript Program – Strict Typing in Action 🚀

---

# 🎯 Lecture Goal

Is lecture me hum:

- Simple JavaScript function likhenge  
- Dekhenge kaise bug create hota hai  
- Phir usko TypeScript me convert karenge  
- Samjhenge strict typing ka power 💪  

Yaha se tum real TypeScript feel karna start karoge 🔥

---

# 🟢 Step 1: Simple JavaScript Function

Chalo ek basic function likhte hain jo 2 numbers add kare 👇

```ts
function addNumbers(a, b) {
  return a + b;
}
```

⚠️ Abhi ye pure JavaScript style hai.  
TypeScript types use nahi kiye.

---

# 🟢 Step 2: Function Call Karein

```ts
console.log(addNumbers(2, 3));
console.log(addNumbers("text", 3));
```

Yaha 2 calls hain:

1️⃣ `addNumbers(2, 3)` → valid  
2️⃣ `addNumbers("text", 3)` → string + number  

---

# ▶️ Output Kya Milega? (Node se Run Karne Par)

```bash
node index.js
```

Output:

```
5
text3
```

---

# 🚨 Problem Kya Hai?

Function ka purpose kya tha?

👉 2 numbers add karna  

Lekin JavaScript ne kya kiya?

- `"text" + 3` ko concatenate kar diya  
- Result diya: `text3`

Ye logical bug hai ❌  
Lekin JavaScript ne koi error nahi diya.

---

# 💡 Yahi Par TypeScript Entry Leta Hai

Ab hum `@ts-ignore` comment hata dete hain  
Aur TypeScript error check karne dete hain.

TypeScript bolta hai:

> Parameter implicitly has an 'any' type.

Matlab:
- `a` kuch bhi ho sakta hai  
- `b` kuch bhi ho sakta hai  

Ye dangerous hai 😬

---

# 🟢 Step 3: Add Strict Types (Real TypeScript)

Type define karne ke liye:

👉 Colon `:` use karte hain

```ts
function addNumbers(a: number, b: number) {
  return a + b;
}
```

Ab:

- `a` must be number  
- `b` must be number  

---

# 🚨 Ab Kya Hoga?

Ab ye line error degi:

```ts
console.log(addNumbers("text", 3));
```

Error:

> Argument of type 'string' is not assignable to parameter of type 'number'

---

# 🔥 TypeScript Ne Kya Kiya?

✔ IDE me red squiggly line  
✔ Terminal me compile error  
✔ Line number mention  
✔ Clear message diya  

Bug production me jane se pehle hi pakad liya 💪

---

# 🖥️ Error 2 Jagah Dikhega

## 1️⃣ IDE (VS Code)

- Red underline
- Hover karne par detailed message

## 2️⃣ Terminal (Watch Mode)

```
Argument of type 'string' is not assignable to parameter of type 'number'
```

---

# ⚙️ Default Behavior

By default:

✔ TypeScript errors hone ke baad bhi JS file compile karega  

Lekin:

Later hum `tsconfig.json` me setting change kar sakte hain  
Taaki errors hone par compile hi na ho 🚀

---

# 🟢 Error Fix Kaise Kare?

Galat line comment kar do:

```ts
// console.log(addNumbers("text", 3));
```

Ab sirf valid call bachega:

```ts
console.log(addNumbers(2, 3));
```

Run karo:

```bash
node index.js
```

Output:

```
5
```

---

# 🧠 Important Concept: `any` Type

Jab TypeScript bolta hai:

> Parameter implicitly has an 'any' type

Matlab:
- Wo sure nahi hai value ka type kya hai
- Ye unsafe situation hai
- Isliye hume explicitly type define karna chahiye

---

# 📊 JavaScript vs TypeScript (Is Example Me)

| JavaScript | TypeScript |
|------------|------------|
| "text" + 3 allowed | Error throw karega |
| Runtime bug | Compile time error |
| Late debugging | Early detection |
| Unsafe | Safe |

---

# 🏁 Final Understanding

✔ TypeScript strict typing introduce karta hai  
✔ Function parameters ka type define kar sakte hain  
✔ Wrong argument pass karoge toh error milega  
✔ IDE + Terminal dono me error dikhega  
✔ Bugs pehle hi detect ho jate hain  

---

# 🚀 Quick Revision Summary

- JS function likha
- String + number pass kiya
- JS ne concatenate kar diya
- TypeScript me types define kiye
- String pass karne par error mila
- Strict typing = Better code quality 🔥

---

🎉 Ye tumhara pehla real TypeScript program tha!

Ab tum officially dynamically typed world se strictly typed world me enter kar chuke ho 🚀  
Next lecture me aur deep concepts dekhenge 💪

---