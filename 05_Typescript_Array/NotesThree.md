# 🔒 Readonly Arrays & Readonly Tuples in TypeScript

Is lecture me hum dekhenge:

- Readonly array kya hota hai  
- Readonly tuple kya hota hai  
- Kaise declare karte hain  
- Different syntax options  
- Kaunsa use karna better hai  

---

# 📦 1️⃣ Readonly Array

Normal array:

```ts
let numbers: number[] = [1, 2, 3];
```

Isme tum:

- push kar sakte ho ✅
- pop kar sakte ho ✅
- value change kar sakte ho ✅

---

## 🔒 Readonly Version

```ts
let numbers: readonly number[] = [1, 2, 3];
```

Ab kya hoga?

❌ numbers.push(4) → Error  
❌ numbers.pop() → Error  
❌ numbers[0] = 10 → Error  

✔️ Sirf read kar sakte ho  
✔️ Modify nahi kar sakte  

---

# 🧠 Readonly Array Ka Matlab

> Array freeze ho gaya 🔐  
> Structure change nahi kar sakte

---

# 🧱 2️⃣ Readonly Tuple

Normal tuple:

```ts
type PersonTuple = [string, string, number];
```

Readonly tuple:

```ts
type ReadOnlyTuple = readonly [string, string, number];
```

---

## 🧪 Example

```ts
let person: ReadOnlyTuple = ["John", "Doe", 30];
```

Ab:

❌ person[0] = "Mark" → Error  
❌ person.push(40) → Error  

Readonly tuple bhi immutable ho gaya.

---

# 🔄 Alternative Syntax (Arrays)

Readonly declare karne ka ek aur tareeka 👇

## Method 1 – Readonly with Generics

```ts
type A = Readonly<string[]>;
```

Ye same hai:

```ts
readonly string[]
```

---

## Method 2 – ReadonlyArray

```ts
type B = ReadonlyArray<string>;
```

Ye bhi same kaam karta hai.

Agar union chahiye:

```ts
type B = ReadonlyArray<string | number>;
```

---

# 🔄 Alternative Syntax (Tuple)

```ts
type C = Readonly<[number, string, number]>;
```

Ye same hai:

```ts
readonly [number, string, number]
```

---

# 🧠 Summary of Syntax Options

| Syntax | Use Case |
|--------|----------|
| `readonly number[]` | Simple & clean |
| `Readonly<string[]>` | Generic style |
| `ReadonlyArray<string>` | Built-in helper |
| `readonly [string, number]` | Readonly tuple |
| `Readonly<[...]>` | Generic tuple style |

---

# 🎯 Best Practice

👉 Ek syntax choose karo aur consistently use karo  
👉 Most developers prefer:

```
readonly number[]
readonly [string, number]
```

Simple aur readable 👍

---

# 🔥 Real Use Cases

Readonly arrays useful hote hain jab:

- Data API se aa raha ho
- Config values ho
- Immutable state ho (React etc.)
- Data accidental modify nahi karna ho

---

# 🚀 Final Takeaway

✔️ Readonly arrays modify nahi ho sakte  
✔️ Readonly tuples bhi immutable hote hain  
✔️ Multiple syntax available hain  
✔️ Functionally sab same kaam karte hain  

Simple rule:

> Readonly lagao → mutation band 🔐  

Next lecture me aur advanced type features aayenge 💪🚀