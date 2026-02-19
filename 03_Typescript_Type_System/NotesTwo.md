# ❓ `unknown` Type in TypeScript – Safer than `any` 🚀

---

# 🎯 Lecture Goal

Is lecture me hum samjhenge:

- `unknown` type kya hota hai  
- Ye `any` se better kyun hai  
- Kaise use karte hain  
- Type narrowing ka basic idea  

Ye concept TypeScript safety ko aur strong banata hai 💪

---

# 🟡 1️⃣ Problem with `any`

Example:

```ts
function multiplyByTwo(number: any) {
  return number * 2;
}
```

Yaha:

- `number` kuch bhi ho sakta hai
- String, array, object, null… kuch bhi

TypeScript allow karega 😬

Agar koi string pass kare:

```ts
multiplyByTwo("hello");
```

Unexpected result milega ❌  
Aur TypeScript kuch nahi bolega.

---

# 🔵 Enter `unknown` Type

Ab same function ko `unknown` ke saath likhte hain:

```ts
function multiplyByTwo(number: unknown) {
  return number * 2;
}
```

Ab TypeScript error dega 🔥

> Object is of type 'unknown'

---

# 🧠 Why Error Aaya?

Kyuki:

- TypeScript ko nahi pata `number` ka actual type kya hai
- Wo assume nahi karega
- Pehle tumhe check karna padega

👉 Ye hi reason hai `unknown` is safer than `any`

---

# 🟢 Fix Using Type Check (Type Narrowing)

```ts
function multiplyByTwo(number: unknown) {
  if (typeof number === "number") {
    return number * 2;
  }

  return "Please provide a valid number";
}
```

Ab:

✔ Agar number pass hua → multiply karega  
✔ Agar string pass hua → error message dega  

---

# 🖥️ Example Calls

```ts
console.log(multiplyByTwo(4));       // 8
console.log(multiplyByTwo("hello")); // Please provide a valid number
```

---

# 🔍 Important Concept: Type Narrowing

Ye line:

```ts
if (typeof number === "number")
```

Isko bolte hain **type narrowing**

Matlab:
- Pehle broad type tha (`unknown`)
- Check ke baad specific type ban gaya (`number`)

---

# ⚔️ `any` vs `unknown`

| Feature | any | unknown |
|----------|------|----------|
| Safety | ❌ Unsafe | ✅ Safe |
| Type checking | Nahi karta | Force karta |
| Direct usage allowed? | Yes | No |
| Narrowing required? | No | Yes |

---

# 🧠 Mental Model

`any` bolta hai:

> "Jo marzi karo"

`unknown` bolta hai:

> "Pehle check karo, phir use karo"

---

# 🔥 When to Use `unknown`?

Use `unknown` jab:

- Abhi type pata nahi hai
- Future me decide hoga
- External data aa raha ho (API, user input)

Avoid `any` unless absolutely necessary ⚠️

---

# 🏁 Final Understanding

✔ `unknown` safer alternative hai `any` ka  
✔ Direct operations allow nahi karta  
✔ Type check karna mandatory hai  
✔ Better type safety deta hai  
✔ Type narrowing important concept hai  

---

# 🚀 Quick Revision Points

- `any` = No type safety  
- `unknown` = Type safe but strict  
- Direct operation on unknown ❌  
- `typeof` use karke narrow karo  
- `unknown` recommended over `any`  

---

🎯 Final Line Yaad Rakho:

> Agar type pata nahi hai, toh `unknown` use karo — `any` nahi 🔥

Next lecture me aur advanced type concepts explore karenge 🚀