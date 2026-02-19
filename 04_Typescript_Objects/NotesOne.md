# 🧱 Objects in TypeScript – Basics & Strict Typing 🚀

---

# 🎯 Lecture Goal

Is lecture me hum samjhenge:

- Object inference kya hota hai  
- Object ko annotate kaise kare  
- `object` type kyun unsafe hai  
- Strict object typing ka correct tarika  

Ab hum TypeScript me objects properly handle karna start kar rahe hain 💪

---

# 🟢 Step 1: Simple Object (Inference)

```ts
let person = {
  name: "Mark",
  age: 32
};
```

Agar tum `person` pe hover karo:

👉 TypeScript infer karega:

```ts
{
  name: string;
  age: number;
}
```

Ye hai **object inference**

---

# ⚠️ Problem – Loose Object Type

Chalo ek aur object banate hain:

```ts
let car = {
  brand: "BMW",
  color: "Black"
};
```

Ab agar hum isko annotate karein as:

```ts
let car: object = {
  brand: "BMW",
  color: "Black"
};
```

TypeScript accept karega ✔

---

# ❌ But Ye Dangerous Hai

Kyuki `object` type ka matlab:

👉 Koi bhi object allowed hai  

Isme:

- Array ✔
- Function ✔
- Constructor ✔

Sab allowed hai 😬

Example:

```ts
car = [];        // ❌ Should not be allowed
car = function() {};  // ❌ Should not be allowed
```

Lekin TypeScript complain nahi karega.

---

# 🧠 Why?

Kyuki JavaScript me:

> Functions aur arrays bhi objects hote hain

Toh `object` type bahut broad hai.

---

# 🔹 Object Literal Type (Still Not Enough)

```ts
let newCar: {} = {
  brand: "BMW",
  color: "Black"
};
```

Ye bhi similar hi behavior dega.

Still:

```ts
newCar = [];  // ❌ Still allowed
```

Problem solve nahi hua.

---

# ✅ Correct Way – Strict Object Typing

Ab hum properly define karte hain object ka shape:

```ts id="83jd9w"
let newCar: {
  brand: string;
  color: string;
} = {
  brand: "BMW",
  color: "Black"
};
```

⚠️ Important:

- Properties ke baad **semicolon (;)** use hota hai
- Comma nahi (ye type definition hai, object literal nahi)

---

# 🟢 Ab Behavior Dekho

Agar try karo:

```ts
newCar = [];
```

❌ Error aayega

Kyuki:

👉 TypeScript jaanta hai newCar ko 2 properties chahiye:
- brand
- color

---

# 🔍 Difference Summary

| Method | Safe? | Problem |
|--------|--------|----------|
| Inference | Sometimes | No control |
| `object` type | ❌ Unsafe | Too broad |
| `{}` type | ❌ Unsafe | Still broad |
| Strict literal type | ✅ Safe | Best approach |

---

# 🧠 Important Understanding

Object typing me:

- `object` = generic container  
- `{}` = empty object type  
- `{ property: type }` = strict object shape  

Hume third approach use karna chahiye 💪

---

# 🏁 Final Understanding

✔ Object inference automatic hota hai  
✔ `object` type use karna avoid karo  
✔ Arrays aur functions bhi objects hote hain  
✔ Strict object shape define karna best practice hai  
✔ Type definition me semicolon use hota hai  

---

# 🚀 Quick Revision Points

- `let obj = {}` → inference  
- `let obj: object` → unsafe  
- Strict typing:

```ts
{
  prop1: string;
  prop2: number;
}
```

- Arrays & functions bhi objects hote hain  
- Strict typing hi TypeScript ka goal hai  

---

🎯 Final Line Yaad Rakho:

> Generic object mat use karo,  
> Object ka exact shape define karo 🔥

Next lecture me hum aur complex object typing dekhenge 🚀