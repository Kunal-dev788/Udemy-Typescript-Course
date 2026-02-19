# 🔢 BigInt in TypeScript – Handling Very Large Numbers 🚀

---

# 🎯 Lecture Goal

Is lecture me hum samjhenge:

- BigInt kya hota hai  
- Ye kyun introduce kiya gaya  
- Kaise declare karte hain  
- `number` aur `bigint` me difference kya hai  
- BigInt ki limitations kya hain  

Ye concept large number handling ke liye important hai 💪

---

# 🟢 Problem Before BigInt

JavaScript me ek limit hoti thi:

👉 **Maximum Safe Integer**

```ts
const safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt);
```

Output kuch aisa hoga:

```
9007199254740991
```

Ye maximum safe integer value hai.

---

## ❌ Issue Kya Tha?

Agar tum isme 1 ya 2 add karo 👇

```ts
const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;

console.log(safeIntPlusOne);
console.log(safeIntPlusTwo);
```

JavaScript correct calculation nahi karega 😬

Kyuki number type ki precision limit hoti hai.

👉 Is problem ko solve karne ke liye **BigInt introduce hua**

---

# 🔵 What is BigInt?

BigInt ek primitive type hai jo:

- Very large integers handle karta hai  
- Number ki limit se bahar ke values support karta hai  

---

# ⚙️ Important: tsconfig Target Update

BigInt ES2020 me introduce hua tha.

Agar tumhara `tsconfig.json` me:

```json
"target": "ES2016"
```

Toh error aayega ❌

Change karo:

```json
"target": "ES2020"
```

Phir TypeScript BigInt recognize karega.

---

# 🟢 BigInt Declare Karne Ke 2 Tarike

## 🔹 Method 1: BigInt Constructor

```ts
let bigIntOne: bigint = BigInt(9007199254740991);
```

👉 `BigInt()` constructor use kiya

---

## 🔹 Method 2: Literal Syntax (Recommended)

```ts
let bigIntTwo: bigint = 9007199254740991n;
```

📌 Last me `n` lagana zaruri hai  
Ye BigInt literal syntax hai

---

# 🖥️ Output Kaise Dikhega?

```ts
console.log(bigIntOne);
```

Output:

```
9007199254740991n
```

👉 `n` suffix indicate karta hai ye BigInt hai

---

# 🔄 BigInt Expressions

Agar tum BigInt ke saath operations karo:

```ts
let difference = bigIntOne - bigIntTwo;
```

👉 Result bhi `bigint` type hoga

TypeScript automatically infer karega.

---

# 🚨 Important Rule

## ❌ BigInt Floating Point Support Nahi Karta

Galat:

```ts
let value: bigint = 10.5n;
```

Error ❌

✔ BigInt sirf integers support karta hai  
❌ Decimal numbers allowed nahi hain

---

# 🚨 BigInt vs Number – No Mixing Allowed

BigInt aur number completely separate types hain.

Example:

```ts
Math.log(bigIntOne);
```

Error:

> Argument of type 'bigint' is not assignable to parameter of type 'number'

👉 `Math.log()` number expect karta hai  
👉 BigInt pass nahi kar sakte

---

# ⚔️ BigInt vs Number Difference

| Feature | number | bigint |
|----------|---------|---------|
| Max limit | Limited | Unlimited (practically) |
| Decimal support | Yes | No |
| Mix allowed? | N/A | ❌ Cannot mix with number |
| Introduced in | ES1 | ES2020 |

---

# 🧠 Important Understanding

✔ BigInt ek separate primitive type hai  
✔ Ye number ka extension nahi hai  
✔ Number aur BigInt interchangeable nahi hain  
✔ Functions jo number expect karte hain, unme BigInt use nahi kar sakte  

---

# 🏁 Final Understanding

- `Number.MAX_SAFE_INTEGER` ki limit hoti hai  
- Uske baad calculation unsafe ho jati hai  
- BigInt large integers handle karta hai  
- `n` suffix se BigInt literal banate hain  
- Decimal numbers allowed nahi  
- Number aur BigInt mix nahi kar sakte  

---

# 🚀 Quick Revision Points

- BigInt introduced in ES2020  
- `900n` → BigInt  
- `BigInt(900)` → Constructor method  
- No floating values  
- No mixing with number  
- Separate primitive type  

---

🎯 Final Line Yaad Rakho:

> Jab numbers ki limit cross ho jaye,  
> Tab BigInt ka use karo.

Next lecture me aur advanced primitive types explore karenge 🚀🔥

---