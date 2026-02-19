# ⚡ Void & Never in TypeScript Functions

Is lecture me hum 2 special return types samjhenge:

1️⃣ `void`  
2️⃣ `never`  

Dono functions ke context me use hote hain — but dono same nahi hote.

---

# 🟢 Part 1 – void Type

## 🎯 Problem

Agar function string return kare to:

```ts
function greet(): string {}
```

Lekin agar function kuch return hi nahi karta ho to?

---

## 🟢 Example – writeToDatabase

```ts
function writeToDatabase(value: string): void {
  console.log("Writing to database:", value);
}
```

### Important Points:

- Ye function kuch return nahi karta
- Sirf console.log karta hai
- Execution complete ho jati hai

👉 Aise functions ke liye hum `void` use karte hain.

---

## 🧠 void Ka Meaning

- Function execution complete hoti hai
- But return value nahi hoti

Real-world example:
- Database write
- Logging
- Sending email
- Analytics tracking

---

# 🟢 Part 2 – never Type

Ab dekhte hain `never`.

## 🎯 never Kab Use Hota Hai?

Jab function:

- Kabhi complete nahi hota
- Ya hamesha error throw karta hai

---

## 🟢 Example – throwError

```ts
function throwError(error: string): never {
  throw new Error(error);
}
```

### Kya ho raha hai?

- Function error throw karta hai
- Execution yahi ruk jati hai
- Function kabhi finish nahi hota

👉 Isliye return type `never` hoga.

---

# 🟢 Difference Between void & never

| Feature | void | never |
|----------|-------|--------|
| Execution complete hoti hai? | ✅ Yes | ❌ No |
| Value return hoti hai? | ❌ No | ❌ No |
| Error throw karta hai? | ❌ Not required | ✅ Usually yes |
| Strictness | Less strict | Most strict |

---

# 🟢 Important Hierarchy Concept

Type hierarchy me:

```
never → void
```

Matlab:

- `never` extends `void`
- But `void` does NOT extend `never`

---

## 🟢 Proof Example

```ts
type Check = never extends void ? true : false;
// true
```

```ts
type Check2 = void extends never ? true : false;
// false
```

---

# 🟢 Very Important Rule

## ❌ Galat

```ts
function writeToDatabase(): never {
  console.log("Done");
}
```

Ye galat hai.

Kyuki function complete ho raha hai.

---

## ✅ Sahi

- Agar function complete hota hai → `void`
- Agar function kabhi complete nahi hota → `never`

---

# 🟢 When to Use What?

### Use `void` When:
- Function return nahi karta
- But normally finish hota hai

Examples:
- Logging
- Database write
- Side effects

---

### Use `never` When:
- Function error throw karta hai
- Infinite loop hai
- Execution kabhi complete nahi hoti

Example:

```ts
function infiniteLoop(): never {
  while (true) {}
}
```

---

# 🧠 Final Understanding

✔ `void` = Function completes but returns nothing  
✔ `never` = Function never completes  
✔ `never` is more strict than `void`  
✔ Galat jagah `never` use karoge to TypeScript error dega  

---

Agar hierarchy ya type safety strong karni hai,  
to void aur never ka difference clear hona bahut zaroori hai 💪