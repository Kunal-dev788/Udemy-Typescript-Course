# 🔥 Functions in TypeScript – Strictly Typed Functions

Is section me hum TypeScript me **functions** seekhenge 💪  
Starting simple → phir gradually complex concepts.

Aaj ka focus:

- Function parameters ko strict type kaise karein  
- Function ka return type kaise define karein  
- Different ways to declare functions  

---

# 🟢 1️⃣ Normal (Named) Function

### ✅ Basic JavaScript Function

```ts
function intro(name, age) {
  return `My name is ${name} and I am ${age} years old`;
}
```

Problem 👉 `name` aur `age` implicitly `any` type hain.

TypeScript ko strict typing chahiye.

---

## 🎯 Strictly Typed Version

```ts
function intro(name: string, age: number): string {
  return `My name is ${name} and I am ${age} years old`;
}
```

### 🧠 Yaha kya kiya?

- `name: string` → parameter type define ki
- `age: number` → parameter type define ki
- `): string` → function ka return type define kiya

👉 Ab TypeScript sure hai ki ye function hamesha string return karega.

---

# 🟢 2️⃣ Function Expression

Function ko variable me store karna.

```ts
const intro2 = function(name: string, age: number): string {
  return `My name is ${name} and I am ${age} years old`;
};
```

Same rules apply:

✔ Parameters strictly typed  
✔ Return type strictly defined  

---

# 🟢 3️⃣ Arrow Function

Modern & clean syntax 🔥

```ts
const intro3 = (name: string, age: number): string => {
  return `My name is ${name} and I am ${age} years old`;
};
```

---

## 🚫 Wrong Example

```ts
const intro3 = (name: string, age: number): string => {
  return 10; // ❌ Error
};
```

TypeScript bolega:

> number is not assignable to type string

Kyuki humne bola tha function string return karega.

---

# 🔀 Return Type as Union

Agar function kabhi string aur kabhi number return kare:

```ts
const example = (value: number): string | number => {
  if (value > 10) return "Big";
  return value;
};
```

👉 Yaha union type use hua:
```
string | number
```

---

# 🎯 Important Rules

## ✅ 1. Always Type Parameters
Implicit `any` avoid karo.

## ✅ 2. Always Define Return Type (Recommended)
Especially jab function complex ho.

## ✅ 3. TypeScript Helps With:

- Wrong return values
- Wrong parameter types
- Safer code
- Better IntelliSense

---

# 🧠 Quick Comparison

| Type | Syntax |
|------|--------|
| Named Function | `function name()` |
| Function Expression | `const x = function()` |
| Arrow Function | `const x = () => {}` |

Sabko TypeScript me same tarah strictly type kar sakte ho.

---

# 🚀 Final Takeaway

TypeScript me function likhte waqt:

```
(parameter: type) : returnType
```

Ye golden formula yaad rakho 💡

Strict typing = safer functions = fewer bugs.

---

Next videos me:

👉 Optional parameters  
👉 Default parameters  
👉 Function overloading  
👉 Advanced function types  

Abhi ke liye basics strong karo 💪