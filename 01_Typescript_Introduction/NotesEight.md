# ⚔️ JavaScript vs TypeScript – Type System Comparison 🚀

---

# 🎯 Lecture Goal

Is lecture me hum compare karenge:

- JavaScript ka type system  
- TypeScript ka type system  
- Dono me major differences kya hain  
- Aur TypeScript safer kyun hai  

Yaha se tumhara mental model clear ho jayega 💪

---

# 🟢 1️⃣ Dynamic vs Static Typing

## 🟡 JavaScript → Dynamically Typed

Matlab:

- Types automatically assign hote hain
- Tumhe manually type define karne ki zarurat nahi
- JavaScript khud decide karta hai value ka type

Example:

```js
function addNumbers(a, b) {
  return a + b;
}
```

Yaha:
- `a` kya hai?
- `b` kya hai?

JavaScript ko pata nahi until runtime.

---

## 🔵 TypeScript → Statically Typed

Matlab:

- Tum explicitly type define karte ho
- Compiler pehle hi check karta hai
- Strict rules follow hote hain

Example:

```ts
function addNumbers(a: number, b: number) {
  return a + b;
}
```

Ab:
- `a` must be number
- `b` must be number

---

# 🧠 Example Se Difference Samjho

```ts
addNumbers(2, 3);        // ✅ OK
addNumbers("text", 3);   // ❌ Error in TypeScript
```

---

## 🟡 JavaScript Behavior

JavaScript karega:

```
"text" + 3
```

Output:
```
text3
```

JavaScript silently convert karega number ko string me 😬

---

## 🔵 TypeScript Behavior

TypeScript bolega:

> Argument of type 'string' is not assignable to parameter of type 'number'

Error mil jayega compile time pe 🔥

---

# 🟢 2️⃣ Automatic Type Conversion

## 🟡 JavaScript

- Automatically type convert karta hai
- Developer ko batata bhi nahi
- Runtime pe unexpected behavior ho sakta hai

Example:
```
"5" + 2 → "52"
```

---

## 🔵 TypeScript

- Automatically convert nahi karta
- Strictly check karta hai
- Wrong type allow nahi karta

---

# 🟢 3️⃣ When Are Types Checked?

## 🟡 JavaScript → Runtime

Type check hota hai jab code run hota hai.

Matlab:
- Error late milta hai
- Kabhi production me bhi mil sakta hai

---

## 🔵 TypeScript → Compile Time

Type check hota hai compile hone se pehle.

Matlab:
- Error IDE me hi mil jata hai
- Production tak bug nahi jata

---

# 🟢 4️⃣ When Do Errors Appear?

| JavaScript | TypeScript |
|------------|------------|
| Runtime pe | Compile time pe |
| Late detection | Early detection |
| Hard debugging | Easy debugging |

---

# 🧠 Mental Model Shift

JavaScript me:
> "Chalo run karke dekhte hain kya hota hai"

TypeScript me:
> "Pehle hi ensure karte hain sab sahi hai"

Ek baar strict typing ki aadat lag gayi 👇  
JavaScript pe wapas jaana mushkil lagta hai 😅

---

# 🔍 Important Concept: Type Inference

TypeScript me ek feature hota hai:

👉 **Type Inference**

Matlab:
- Kabhi kabhi tum type define nahi karte
- TypeScript khud infer kar leta hai

Lekin fir bhi:
- Wo statically typed system hai
- Strict checking karta hai

Isko detail me next lectures me cover karenge 🚀

---

# 📊 Summary Table – JS vs TS

| Feature | JavaScript | TypeScript |
|----------|------------|------------|
| Typing | Dynamic | Static |
| Type Definition | Automatic | Manual + Inference |
| Type Checking | Runtime | Compile Time |
| Error Detection | Late | Early |
| Safety | Less | More |

---

# 🏁 Final Understanding

✔ JavaScript dynamically typed hai  
✔ TypeScript statically typed hai  
✔ JavaScript runtime pe check karta hai  
✔ TypeScript compile time pe check karta hai  
✔ TypeScript bugs pehle hi pakad leta hai  
✔ TypeScript large applications ke liye safer hai  

---

# 🚀 Quick Revision Points

- JS → Dynamic typing  
- TS → Static typing  
- JS → Runtime errors  
- TS → Compile time errors  
- JS → Auto type conversion  
- TS → Strict type checking  

---

🎯 Final Line Yaad Rakho:

> TypeScript ka goal hai runtime bugs ko compile time pe pakadna.

Ab tum officially samajh chuke ho difference between JavaScript and TypeScript type system 💪🔥  

Next lecture me aur deep concepts explore karenge 🚀

---