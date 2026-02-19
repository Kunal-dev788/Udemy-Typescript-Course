# 🦆 Duck Typing + Declaration vs Annotation vs Inference 🚀

---

# 🎯 Lecture Goal

Is lecture me hum 4 important concepts samjhenge:

- 🦆 Duck Typing  
- 📦 Declaration  
- 🏷️ Annotation  
- 🤖 Inference  

Ye concepts TypeScript ka foundation clear kar dete hain 💪

---

# 🦆 Duck Typing – Kya Hota Hai?

Definition yaad rakhne ka simple rule:

> If it looks like a duck and quacks like a duck, it’s a duck 🦆

Matlab:

Agar koi cheez duck jaisi behave karti hai  
Toh usko duck treat karo.

---

## 🔍 TypeScript Me Duck Typing

Example:

```ts
type CustomString = string;

let firstName: CustomString = "Mark";
```

Yaha:

- Humne type alias use kiya `CustomString`
- Lekin TypeScript samajhta hai ki ye ultimately `string` hi hai

Toh hover karne par:

👉 Type = `string`

Ye hi duck typing hai 🔥

---

# 📦 Declaration Kya Hota Hai?

Declaration ka matlab:

👉 Jab tum apna khud ka type create karte ho

Example:

```ts
type CustomNumber = number;
```

Yaha:

- Hum ek naya type declare kar rahe hain
- Ye hai **type declaration**

---

# 🏷️ Annotation Kya Hota Hai?

Annotation ka matlab:

👉 Jab tum kisi variable ko type assign karte ho

Example:

```ts
let firstName: string = "Mark";
```

Yaha:

- `: string` = annotation
- Hum variable ko type assign kar rahe hain

---

# 🤖 Inference Kya Hota Hai?

Inference ka matlab:

👉 Jab TypeScript khud type guess karta hai

Example:

```ts
let age = 25;
```

Yaha humne type nahi likha  
Phir bhi TypeScript infer karega:

👉 `age` is `number`

---

# 🔎 Inference Example with Function

```ts
function addNumbers(a: number, b: number) {
  return a + b;
}

let finalResult = addNumbers(10, 15);
```

Hover over `finalResult`:

👉 TypeScript infer karega → `number`

Kyuki:
- Function number return karta hai
- Toh result bhi number hi hoga

Ye hi inference ka power hai 💪

---

# 📊 Difference Between 3 Terms

| Term | Meaning |
|------|----------|
| Declaration | Apna custom type banana |
| Annotation | Variable ko type assign karna |
| Inference | TypeScript ka automatic guessing |

---

# 🧠 Kab Kya Use Kare?

## 🟢 Complex Types?

👉 Declare karo (Type Alias use karo)

## 🟢 Simple Types?

👉 Annotate karo

Example:

```ts
let name: string = "John";
```

Type alias banane ki zarurat nahi.

---

## 🟢 Kab Inference Allow Kare?

Sirf tab jab:

- Tum 100% sure ho type clear hai
- Example: function return value

```ts
let total = addNumbers(5, 5);
```

Yaha dobara `: number` likhne ki zarurat nahi.

---

# ⚠️ Important Rule of Thumb

- Complex type → Declare  
- Simple type → Annotate  
- Obvious case → Infer hone do  

---

# 🏁 Final Understanding

✔ Duck typing = behavior based typing  
✔ Declaration = type banana  
✔ Annotation = type assign karna  
✔ Inference = automatic type guessing  
✔ Har jagah inference pe depend mat karo  
✔ Clean code = balanced use of all three  

---

# 🚀 Quick Revision Points

- 🦆 Duck typing: looks like X → treat as X  
- `type X = Y` → Declaration  
- `let x: Y` → Annotation  
- `let x = value` → Inference  
- Complex types declare karo  
- Simple types annotate karo  
- Obvious cases me inference allow karo  

---

🎯 Final Line Yaad Rakho:

> Smart TypeScript code wahi hai jaha  
> declaration, annotation aur inference ka sahi balance ho 🔥

Next lecture me aur advanced type system concepts explore karenge 🚀