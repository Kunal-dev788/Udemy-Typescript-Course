# 🔀 Conditional Types in TypeScript – Intro 🚀

---

# 🎯 Lecture Goal

Is lecture me hum:

- Conditional types ka basic idea samjhenge  
- Kaise ternary operator type level pe use hota hai  
- `extends` keyword ka role dekhenge  

⚠️ Ye sirf introduction hai.  
Aage course me isko deep dive me cover kiya jayega.

---

# 🧠 Conditional Type Kya Hota Hai?

Simple words me:

> Agar type A, type B ko extend karta hai → toh ek type  
> Warna → doosra type  

Ye bilkul JavaScript ke ternary operator jaisa hai 👇

```js
condition ? value1 : value2
```

Lekin yaha values nahi, **types assign hote hain** 🔥

---

# 🟢 Step 1: Base Types Declare Karein

```ts
type CustomDate = Date;
type CustomString = string;
```

Ab hum inpe condition lagayenge.

---

# 🔹 Example 1 – True / False Type

```ts
type TrueString = CustomString extends string ? true : false;
```

Samjho isko 👇

- Kya `CustomString`, `string` ko extend karta hai?  
- Haan ✔  

Toh result kya hoga?

👉 `TrueString` = `true`

⚠️ Ye boolean value nahi hai  
Ye literal type `true` hai

---

# 🔹 Example 2 – Number ya String

```ts
type ConditionalNumber =
  CustomDate extends Date ? number : string;
```

Check ho raha hai:

- Kya `CustomDate`, `Date` ko extend karta hai?  
- Haan ✔  

Toh:

👉 `ConditionalNumber` = `number`

---

# 🔹 Example 3 – Date ya Undefined

```ts
type DateAssignment =
  CustomDate extends Date ? Date : undefined;
```

Again condition true hai ✔  

Toh:

👉 `DateAssignment` = `Date`

---

# 🧠 Important Keyword – `extends`

Conditional types me:

```ts
A extends B ? X : Y
```

Matlab:

- Agar A, B ka subtype hai → X  
- Warna → Y  

Ye inheritance jaisa lagta hai, lekin yaha type comparison ho raha hai.

---

# ⚙️ Conditional Type Structure

General syntax:

```ts
type ResultType = ConditionType extends CheckType
  ? TrueType
  : FalseType;
```

---

# 📊 Real Meaning

| Part | Meaning |
|------|----------|
| extends | Type comparison |
| ? | True branch |
| : | False branch |
| Result | Final resolved type |

---

# 🧠 Key Understanding

- Conditional types runtime pe nahi chalte  
- Ye compile-time pe resolve hote hain  
- Ye type-level logic hai  
- Values assign nahi hote, types assign hote hain  

---

# 🔥 Why Important?

Conditional types future me use honge:

- Advanced generics
- Utility types
- Type transformations
- Complex type logic

Abhi simple lag raha hai 😄  
Lekin baad me powerful tool banega.

---

# 🏁 Final Understanding

✔ Conditional types = type-level ternary operator  
✔ `extends` se comparison hota hai  
✔ Result type compile time pe decide hota hai  
✔ True ya False branch choose hoti hai  
✔ Ye runtime logic nahi hai  

---

# 🚀 Quick Revision Points

- `A extends B ? X : Y`
- Ternary operator jaisa syntax
- Types assign hote hain, values nahi
- Compile-time evaluation
- Future me advanced usage dekhenge

---

🎯 Final Line Yaad Rakho:

> Conditional types TypeScript ko smart banate hain  
> Aur type system ko programmable bana dete hain 🔥

Next lecture me type hierarchy samjhenge 🚀