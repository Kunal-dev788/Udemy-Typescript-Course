# 🎯 TypeScript Decorators – Introduction (Stage 3 vs Stage 2)  

Yeh naya section hai aur yeh pura focus karega **Decorators** pe 🔥  
Decorators TypeScript ka ek powerful feature hai jo JS me directly nahi milta (proposal stage me hai).

---

# 🟢 Decorator Kya Hota Hai?

👉 Decorator ek **special function** hota hai  
👉 Jo modify kar sakta hai:

- Class
- Class ke methods
- Class ki properties
- (Stage 2 me) Method parameters bhi

⚠ Important:
Decorator **sirf class aur uske members** ke saath use hota hai.  
Normal function ya object ke saath use nahi hota.

---

# 🟢 Decorator Ka Basic Structure

Decorator ek simple function hota hai:

```ts
function doSomething(target: any) {
  console.log("Decorator called");
}
```

Use karte kaise hain?

```ts
@doSomething
class User {
}
```

👉 `@` symbol lagake decorator apply karte hain  
👉 Class declare hone se pehle decorator run hota hai  

---

# 🟢 Decorators Kahan Kahan Use Ho Sakte Hain?

## 1️⃣ Class Decorator

```ts
@doSomething
class User {}
```

---

## 2️⃣ Property Decorator

```ts
class User {
  @doSomething
  name: string;
}
```

---

## 3️⃣ Method Decorator

```ts
class User {
  @doSomething
  signIn() {}
}
```

---

## 4️⃣ Getter / Setter Decorator

```ts
class User {
  @doSomething
  get fullName() {
    return "John";
  }
}
```

---

# 🚨 Important Rule

Decorator sirf:

- Class
- Method
- Property
- Getter
- Setter

Par hi lag sakta hai.

❌ Normal function pe nahi  
❌ Object literal pe nahi  

---

# 🟢 TypeScript Me 2 Types Ke Decorators

Ab sabse important confusion wali baat 👇

## 1️⃣ Stage 2 Decorators (Old – TS 4.x)

- Experimental decorators
- Parameter decorators supported
- Reflection metadata supported
- Angular, NestJS heavily use karte hain

---

## 2️⃣ Stage 3 Decorators (New – TS 5.x)

- ECMAScript standard ke aligned
- Parameters pe decorator allowed nahi
- Reflection metadata default me nahi
- Completely new behavior

---

# 🟢 Stage 2 vs Stage 3 Difference

| Feature | Stage 2 (TS 4) | Stage 3 (TS 5) |
|----------|----------------|----------------|
| Parameter decorators | ✅ Yes | ❌ No |
| Reflection metadata | ✅ Yes | ❌ No |
| Angular support | ✅ Yes | ⚠ Needs flags |
| Standard aligned | ❌ No | ✅ Yes |

---

# ⚠️ Sabse Important Confusion Point

Agar aap TypeScript 5 use kar rahe ho  
Lekin `tsconfig.json` me yeh dono true hain:

```json
"experimentalDecorators": true,
"emitDecoratorMetadata": true
```

Toh aap still **Stage 2 decorators** hi use kar rahe ho 😵

Version matter nahi karega.

---

# 🟢 Stage 3 Decorators Use Karne Ke Liye

`tsconfig.json` me yeh ensure karo:

```json
// "experimentalDecorators": true,
```

Commented ho ya false ho

```json
// "emitDecoratorMetadata": true,
```

Commented ho ya false ho

Tabhi Stage 3 decorators ka behavior milega.

---

# 🟢 Stage 2 Me Kya Extra Tha?

Stage 2 me aap:

- Constructor parameters pe decorator laga sakte the
- Method parameters pe decorator laga sakte the

Example (Stage 2 only):

```ts
class User {
  constructor(@inject service: any) {}
}
```

⚠ Stage 3 me yeh allowed nahi hai.

---

# 🟢 Setup in VS Code

1. `.ts` file create karo (example: `app.ts`)
2. HTML file me `dist/app.js` load karo
3. Live Server use karo
4. Console open karke output dekho

Flow:

```
app.ts  →  TypeScript compile  →  dist/app.js  →  Browser
```

---

# 🧠 Big Picture Samajh Lo

Decorators:

- Functions hote hain
- Metadata access kar sakte hain
- Class ko modify kar sakte hain
- Behavior inject kar sakte hain

Frameworks me use hote hain for:

- Dependency Injection
- Validation
- Logging
- Routing
- Metadata tagging

---

# 🏁 Summary

✔ Decorator = special function  
✔ Sirf class aur class members pe lagta hai  
✔ `@` symbol se use hota hai  
✔ TS me Stage 2 aur Stage 3 versions hain  
✔ TS 5 me by default Stage 3  
✔ Agar flags true hain → Stage 2 hi chalega  

---

Ab next videos me hum:

- Real decorator likhenge  
- Class decorator modify karenge  
- Methods ko intercept karenge  
- Deep dive karenge Stage 3 behavior me  

Ready ho jao 🔥