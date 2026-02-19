# ⚡ Async Functions in TypeScript (Strict Typing)

Is lecture me hum samjhenge:

- Async functions ka return type kaise define karte hain
- Promise ko strictly kaise type karte hain
- Primitive vs Object return type
- Arrow async functions ka syntax

---

# 🟢 Basic Concept

👉 JavaScript me **har async function always Promise return karta hai**

```ts
async function example() {}
```

Ye automatically Promise return karega.

---

# 🟢 Named Async Function – Basic Syntax

```ts
async function fetchFromDatabase(id: number): Promise<any> {
}
```

### Breakdown:

- `async` → async function
- `id: number` → parameter annotation
- `: Promise<any>` → return type annotation

---

## 🧠 Important Rule

Async function ka return type hamesha:

```
Promise<SomeType>
```

Hoga.

---

# 🟢 Arrow Async Function

```ts
const fetchData = async (id: number): Promise<any> => {
};
```

Same rule apply hota hai:

- `async` before function
- `: Promise<Type>` after parameters

---

# 🟢 Returning a Strict Promise (String Example)

```ts
async function returnString(id: number): Promise<string> {
  return Promise.resolve("Hello");
}
```

### Kya ho raha hai?

- Function Promise return kar raha hai
- Promise resolve ho raha hai string me
- Isliye type hai `Promise<string>`

---

## ❌ Galat Case

Agar function string return kare but type `Promise<string>` ho:

```ts
async function returnString(id: number): Promise<string> {
  return 10;  // ❌ Error
}
```

TypeScript error dega.

---

# 🟢 Promise with Object Type (Real World Example)

Usually async functions primitive type nahi, **object return karte hain**.

---

## Step 1 – User Type Define Karein

```ts
type User = {
  name: string;
  age: number;
};
```

---

## Step 2 – Async Function That Returns User

```ts
async function fetchUser(id: number): Promise<User> {
  return Promise.resolve({
    name: "John",
    age: 20
  });
}
```

---

### 🔥 Important

Return type:

```
Promise<User>
```

Matlab promise resolve hone ke baad ek `User` object milega.

---

## ❌ Agar Property Missing Ho

```ts
return Promise.resolve({
  name: "John"
});
```

TypeScript error dega:

> age property missing

Kyuki promise ko `User` type ka object return karna hi padega.

---

# 🟢 Real-World Mental Model

```
async function → Promise return karega
Promise<T> → T type ka data resolve karega
```

Example:

| Function Type | Final Resolved Value |
|---------------|---------------------|
| Promise<string> | string |
| Promise<number> | number |
| Promise<User> | User object |

---

# 🟢 Why This Is Important?

Strict typing ensures:

✔ Correct API response handling  
✔ No missing properties  
✔ Better auto-completion  
✔ Compile-time error checking  

---

# 🧠 Final Summary

✅ Async function hamesha Promise return karta hai  
✅ Return type likhna hoga → `Promise<Type>`  
✅ Type primitive bhi ho sakta hai  
✅ Type alias bhi ho sakta hai  
✅ Object shape mismatch hoga to TypeScript error dega  

---

TypeScript me async functions ko strictly type karna production-level code ke liye extremely important hai 💪