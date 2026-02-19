# 🧩 Primitive Types in TypeScript – String, Number, Boolean 🚀

---

# 🎯 Lecture Goal

Is lecture me hum TypeScript ke 3 basic primitive types samjhenge:

- 🧵 `string`
- 🔢 `number`
- ✅ `boolean`

Saath me samjhenge:

- Type annotation kya hota hai  
- Type inference kya hota hai  
- `var`, `let`, `const` ka behavior  
- Literal types kya hote hain  

---

# 🧵 1️⃣ String Type

## 🔹 Simple String Variable

```ts
let firstName: string = "John";
```

👉 `: string` ko bolte hain **type annotation**  
👉 Hum manually bata rahe hain ki ye variable string hoga

---

## ❌ Galat Reassignment

```ts
firstName = 123;
```

Error:

> Type 'number' is not assignable to type 'string'

✔ Ek baar string define kar diya  
❌ Ab number assign nahi kar sakte

---

## 🔹 Annotation Without Mentioning Type (Inference)

```ts
let automobile = "BMW";
```

Yaha humne type mention nahi kiya  
Phir bhi TypeScript infer karega:

👉 `automobile` is of type `string`

Isko bolte hain **Type Inference**

---

# 🏷️ Annotation vs Inference

| Concept | Meaning |
|----------|----------|
| Annotation | Manually type define karna |
| Inference | TypeScript khud guess kare |

Example:

```ts
let name: string = "John";   // Annotation
let city = "Delhi";          // Inference
```

---

# 🔒 const + Primitive = Literal Type

```ts
const city = "New York";
```

Ab TypeScript kya infer karega?

👉 Type = `"New York"` (exact literal)

Kyuki:

- `const` reassign nahi ho sakta
- Value permanently fix hai

Isliye iska type generic string nahi  
Balki exact `"New York"` hai 🔥

---

# 🔢 2️⃣ Number Type

## 🔹 Simple Number Example

```ts
let age: number = 25;
```

✔ Valid number  
❌ String assign karoge toh error

---

## 🔹 let vs var

```ts
var year: number = 2024;
let marks: number = 90;
```

Type behavior same rahega  
Bas scope difference hota hai (JS concept)

---

## 🔒 const Number → Literal Type

```ts
const members = 61;
```

TypeScript infer karega:

👉 Type = `61` (literal type)

---

## 🔄 Expression That Returns Number

```ts
let stringToNumber = parseInt("1985");
```

`parseInt` string ko number me convert karta hai  

TypeScript correctly infer karega:

👉 `stringToNumber` is of type `number`

Even bina annotation ke bhi.

---

# 🧠 Important Question

Agar inference ho hi raha hai  
Toh annotation ki kya zarurat?

👉 Ye hum detail me baad me cover karenge  
(Advanced scenarios me annotation important hota hai)

---

# ✅ 3️⃣ Boolean Type

Boolean ke sirf 2 values hote hain:

- `true`
- `false`

---

## 🔹 Simple Boolean

```ts
let isStudent: boolean = true;
```

✔ True assign kar sakte ho  
✔ False assign kar sakte ho  
❌ 0 ya 1 assign nahi kar sakte  

TypeScript strictly boolean follow karta hai 💪

---

## 🔒 const Boolean → Literal

```ts
const alwaysStudent = true;
```

TypeScript infer karega:

👉 Type = `true` (literal type)

Ye generic boolean nahi hai  
Ye permanently `true` hai

---

## 🔄 Expression That Returns Boolean

```ts
let minimumAge = age >= 6 ? true : false;
```

Ye expression:

- True return karega ya
- False return karega

TypeScript infer karega:

👉 `minimumAge` is of type `boolean`

---

# 📊 Summary Table

| Type | Example | Notes |
|------|----------|-------|
| string | `"John"` | Text values |
| number | `25` | Numeric values |
| boolean | `true` / `false` | Logical values |

---

# 🔥 Literal Types Recap

| Keyword | Type Behavior |
|----------|--------------|
| let | General type (string, number, boolean) |
| var | General type |
| const | Literal type (exact value) |

Example:

```ts
let name = "John";      // string
const city = "Delhi";   // "Delhi"
```

---

# 🏁 Final Understanding

✔ Type annotation `:` se hoti hai  
✔ Type inference automatic guessing hai  
✔ Primitive types immutable hote hain  
✔ `const` literal type bana deta hai  
✔ Expressions ka final result type decide karta hai  

---

# 🚀 Quick Revision Points

- `string` → Text values  
- `number` → Numeric values  
- `boolean` → true / false  
- Annotation = Manual typing  
- Inference = Auto typing  
- const = Literal type  
- Primitive types immutable hote hain  

---

🎯 Ye the TypeScript ke 3 simplest primitive types.

Ab foundation strong ho chuki hai 💪  
Next lectures me aur advanced types explore karenge 🚀

---