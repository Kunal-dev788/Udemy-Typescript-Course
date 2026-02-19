# 🔑 Symbol in TypeScript – Unique & Private Keys 🚀

---

# 🎯 Lecture Goal

Is lecture me hum samjhenge:

- `symbol` kya hota hai  
- Ye kyun use hota hai  
- Kaise declare karte hain  
- Object me private property jaisa kaise behave karta hai  

Symbol thoda advanced concept hai, but bahut powerful hai 💪

---

# 🟢 Symbol Kya Hota Hai?

👉 Symbol ek primitive type hai  
👉 Iska main kaam hai **unique value generate karna**

Har symbol:

- Unique hota hai  
- Even agar same value pass karo  
- Fir bhi alag symbol generate hoga  

---

# ⚙️ Important Requirement

Symbol ES2020 me properly supported hai.

`tsconfig.json` me ensure karo:

```json
"target": "ES2020"
```

---

# 🟢 Symbol Kaise Declare Kare?

## 🔹 Basic Symbol

```ts
let id: symbol = Symbol();
```

👉 `Symbol()` constructor use kiya  
👉 Ye ek unique symbol generate karega  

---

## 🔹 Symbol with Description

```ts
let alphabeticId: symbol = Symbol("ABC");
```

📌 `"ABC"` sirf description hai  
📌 Ye uniqueness affect nahi karta  

Even agar same description do:

```ts
Symbol("ABC") !== Symbol("ABC")
```

Always unique 🔥

---

# 🧠 Symbols Ka Main Use

Symbols mostly use hote hain:

- Object ke property keys ke liye  
- Private-like behavior create karne ke liye  

---

# 🟢 Symbol as Object Key

Chalo ek example dekhte hain 👇

```ts
const id: symbol = Symbol("userId");

const user = {
  name: "Mark",
  [id]: "1234"
};
```

📌 Important syntax:

```ts
[id]: "1234"
```

Bracket notation use karna zaruri hai.

---

# 🔍 Access Normal Property

```ts
console.log(user.name);
```

✔ Output: `Mark`

---

# ❌ Access Symbol Property Directly?

```ts
console.log(user.id);
```

❌ Ye kaam nahi karega

Kyuki:

- Key `"id"` nahi hai
- Key ek unique symbol hai

---

# 🖨️ Symbol Print Karke Dekho

```ts
console.log(id);
```

Output something like:

```
Symbol(userId)
```

Ye actual key nahi hai  
Ye unique symbol reference hai

---

# 🔐 Private Property Illusion

JavaScript me:

- Proper private access modifiers nahi hote (basic objects me)
- Symbol use karke hum property ko "hidden" bana sakte hain

Normal access se property visible nahi hoti 💡

---

# 🟢 Symbol Value Access Kaise Kare?

Agar hume symbol property access karni hai:

Toh method bana sakte hain 👇

```ts
const user = {
  name: "Mark",
  [id]: "1234",
  getId() {
    return this[id];
  }
};
```

---

## 🔹 Ab Access Karein

```ts
console.log(user.getId());
```

✔ Output: `1234`

---

# ⚔️ Symbol vs Normal Property

| Feature | Normal Property | Symbol Property |
|----------|----------------|----------------|
| Access | `user.name` | `user[id]` |
| Visible in object keys | Yes | No (by default hidden) |
| Unique | No | Always unique |
| Private-like behavior | No | Yes |

---

# 🧠 Important Understanding

✔ Symbol ek primitive type hai  
✔ Har symbol unique hota hai  
✔ Mostly object keys ke liye use hota hai  
✔ Private property jaisa behavior create karta hai  
✔ Bracket notation zaruri hai  

---

# 🚀 Quick Revision Points

- `Symbol()` → unique value generate karta hai  
- `let x: symbol = Symbol()`  
- `[symbol]` syntax object me use hota hai  
- Direct access possible nahi  
- Method ke through access kar sakte hain  
- ES2020 target required  

---

# 🏁 Final Line Yaad Rakho

> Symbol ka kaam hai uniqueness aur hidden keys provide karna.

Ye ek powerful primitive type hai jo object design me help karta hai 🔥  

Next lecture me aur interesting TypeScript concepts explore karenge 🚀

---