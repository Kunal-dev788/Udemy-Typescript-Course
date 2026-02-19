# 🔥 Generics with Objects – Complete Hinglish Notes

Ab tak humne generics use kiye:

- ✔ Functions ke saath  
- ✔ Arrays ke saath  

Ab time hai generics ko **objects ke saath use karne ka** 🚀

---

# 🟢 Basic Problem

Maan lo humare paas 2 objects hain:

### 1️⃣ String + Number Pair

```ts
const stringNumberPair = {
  key: "age",
  value: 30
};
```

### 2️⃣ Number + Array Pair

```ts
const numberArrayPair = {
  key: 1234,
  value: ["A", "B"]
};
```

---

# 🎯 Observation

Dono objects:

✔ Same properties rakhte hain → `key` & `value`  
❌ Lekin types different hain  

| Object | Key Type | Value Type |
|--------|----------|------------|
| stringNumberPair | string | number |
| numberArrayPair | number | string[] |

---

# ❌ Wrong Solution

```ts
type KeyValuePair = {
  key: any;
  value: any;
}
```

Problem?

- Type safety khatam ❌  
- Operations karte waqt type pata nahi chalega  

---

# ✅ Correct Solution – Generics

```ts
type KeyValuePair<K, V> = {
  key: K;
  value: V;
}
```

Yaha:

- `K` → key ka type  
- `V` → value ka type  

---

# 🟢 Ab Use Kaise Karen?

### ✔ String + Number Pair

```ts
const stringNumberPair: KeyValuePair<string, number> = {
  key: "age",
  value: 30
};
```

---

### ✔ Number + Array Pair

```ts
const numberArrayPair: KeyValuePair<number, string[]> = {
  key: 1234,
  value: ["A", "B"]
};
```

---

# 🧠 Important Concept

Generics yaha kya kar rahe hain?

- Structure same rakha
- Types flexible bana diye
- Type safety maintain rakhi 🔥

---

# 🔥 Generics with Objects + Constraints

Ab ek aur example dekhte hain.

---

# 🟢 Problem

Ek function banana hai:

```ts
function printId(obj) {
  console.log(obj.id);
}
```

Ye sirf un objects ke saath kaam kare jo:

✔ `id` property rakhte ho  

---

# 🟢 Step 1 – Constraint Type Banate Hain

```ts
type HasId = {
  id: number;
};
```

---

# 🟢 Step 2 – Generic Constraint Lagate Hain

```ts
function printId<T extends HasId>(obj: T): void {
  console.log(obj.id);
}
```

---

# 🧠 Meaning of This

```
T extends HasId
```

Matlab:

> T koi bhi type ho sakta hai  
> Lekin usme id property hona zaroori hai  

---

# 🟢 Valid Example

```ts
const user = {
  id: 1,
  name: "John"
};

printId(user);   // ✅ Works
```

---

# ❌ Invalid Example

```ts
const product = {
  name: "Laptop"
};

printId(product);   // ❌ Error
```

Error kyun?

Kyuki product me `id` property nahi hai.

---

# 🟢 Fix

```ts
const product = {
  id: 10,
  name: "Laptop"
};

printId(product);   // ✅ Now works
```

---

# 🧠 Key Concept

Generics + Constraints ka combo powerful hota hai.

```
<T extends SomeType>
```

Matlab:

- Flexible type
- But condition ke andar

---

# 🚀 Why This Is Powerful?

Without generics:

- Alag alag types ke liye alag interfaces banane padte

With generics:

- Ek reusable structure
- Full type safety
- Clean scalable code

---

# 🏁 Final Summary

## Generics with Objects

```ts
type KeyValuePair<K, V> = {
  key: K;
  value: V;
}
```

✔ Structure reusable  
✔ Types flexible  
✔ Strong type safety  

---

## Generics + Constraints

```ts
<T extends SomeType>
```

✔ Specific property guarantee  
✔ Runtime bugs reduce  
✔ Clean reusable APIs  

---

Generics ka real power tab dikhta hai jab:

- Functions
- Arrays
- Objects
- Constraints

Sab combine hote hain 💪🔥

Agla level: Aur advanced generic patterns 🚀