# 🔑 `keyof` Operator in TypeScript – Complete Hinglish Notes

Aaj hum samjhenge **`keyof` operator** kya karta hai aur kaise generics ke saath milke powerful types banata hai 🔥

---

# 🟢 `keyof` Kya Karta Hai?

`keyof` operator:

> Kisi object type ke saare keys ka **union type** bana deta hai.

---

# 🧩 Example 1 – Basic Object

```ts
type Events = {
  id: number;
  date: Date;
  type: "indoor" | "outdoor";
};
```

Agar hume chahiye:

```
"id" | "date" | "type"
```

Toh hum likhenge:

```ts
type UnionOfKeys = keyof Events;
```

---

## 🧠 TypeScript Internally Banata Hai:

```ts
type UnionOfKeys = "id" | "date" | "type";
```

---

# 🟢 Practical Test

```ts
let eventKey: UnionOfKeys = "id";      // ✅ valid
eventKey = "date";                     // ✅ valid
eventKey = "something";                // ❌ error
```

Kyuki `"something"` Events type ka key nahi hai.

---

# 🟢 Important Rule

⚠ `keyof` sirf **object types** ke saath kaam karta hai.

---

# 🔢 Index Signatures + `keyof`

Ab interesting part aata hai.

---

# 🟢 Case 1 – Numeric Index Signature

```ts
type Numeric = {
  [key: number]: string;
};
```

Ab agar hum likhen:

```ts
type NumericKey = keyof Numeric;
```

### 🧠 TypeScript Inference:

```
type NumericKey = number
```

Kyuki sab keys number hain.

---

# 🟢 Case 2 – String Index Signature

```ts
type NumberAndString = {
  [key: string]: string;
};
```

Ab agar likhen:

```ts
type NumberAndStringKey = keyof NumberAndString;
```

### 🧠 Result:

```
string | number
```

---

# 🤯 Yeh `string | number` Kyun?

JavaScript mein:

👉 Object keys internally **string mein convert ho jaate hain**

Example:

```ts
const obj = {
  0: "first",
  "1": "second"
};
```

Yeh dono actually string keys ban jaate hain.

Isliye TypeScript:

```
string index → keyof = string | number
```

---

# 🧪 Proof

```ts
const stringObject: NumberAndString = {
  0: "first",
  1: "second"
};

console.log(stringObject[0]);   // works
```

Number `0` internally `"0"` ban jaata hai.

---

# 🚀 Generics + `keyof` Together

Ab sabse powerful part 🔥

---

# 🟢 Person Type

```ts
type Person = {
  name: string;
  age: string;
  address: string;
};
```

Sab properties mandatory hain.

---

# 🎯 Problem

Hume ek **PartialPerson** type banana hai jisme:

- Koi bhi property ho sakti hai
- Sab optional ho
- Type safe ho

---

# 🟢 Generic + keyof Magic

```ts
type PartialPerson = {
  [K in keyof Person]?: Person[K] | null;
};
```

---

# 🧠 Breakdown

### 1️⃣ `keyof Person`

```
"name" | "age" | "address"
```

### 2️⃣ `[K in keyof Person]`

Har key pe loop lag raha hai.

### 3️⃣ `Person[K]`

Original type ko access kar raha hai.

---

# 🟢 Result Type

```ts
type PartialPerson = {
  name?: string | null;
  age?: string | null;
  address?: string | null;
};
```

---

# 🟢 Usage Example

```ts
const partial: PartialPerson = {
  name: "John"
};
```

✔ Valid  
✔ Age aur address optional  

---

# 🟢 Agar Null Nahi Chahiye

```ts
type PartialPerson = {
  [K in keyof Person]?: Person[K];
};
```

Ab property:

```
string | undefined
```

---

# 🧠 Yeh Concept Kya Kehlata Hai?

Isko kehte hain:

> Mapped Types

Aur TypeScript ke andar already built-in hota hai:

```ts
Partial<Person>
```

---

# 🏁 Final Summary

## 🔑 `keyof`

```
keyof Type
```

✔ Object keys ka union banata hai  
✔ Sirf object types ke saath kaam karta hai  

---

## 🔢 Index Signatures

| Signature | keyof Result |
|-----------|--------------|
| [key: number] | number |
| [key: string] | string \| number |

---

## 🔥 Generics + keyof

```ts
[K in keyof Type]
```

✔ Har property pe iterate karta hai  
✔ Powerful mapped types banata hai  

---

## 🚀 Real Power

`keyof` + Generics milke bana sakte hain:

- Partial types
- Readonly types
- Pick types
- Record types
- Complex transformations

---

Ab tum officially TypeScript ke advanced zone mein enter kar chuke ho 😎🔥