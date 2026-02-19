# 🧩 Optional & Readonly Properties in TypeScript Objects 🚀

---

# 🎯 Lecture Goal

Is lecture me hum samjhenge:

- JavaScript vs TypeScript object behavior  
- Mandatory properties kya hoti hain  
- Optional properties kaise banate hain  
- Readonly properties kaise use karte hain  

Ye concepts object modeling me bahut important hain 💪

---

# 🟢 JavaScript vs TypeScript Difference

## 🔹 JavaScript

- Objects dynamic hote hain  
- Koi bhi property add/remove kar sakte ho  
- Sab properties optional jaisi behave karti hain  

## 🔹 TypeScript

- Agar type define kiya hai  
- Toh har object ko us structure ko follow karna padega  

---

# 🧱 Example – Post Type

```ts
type Post = {
  title: string;
  content: string;
  date: Date;
};
```

Yaha:

👉 Ye 3 properties **mandatory** hain

---

# ❌ Missing Property Error

```ts id="e5pqxo"
let post2: Post = {
  title: "Second Post",
  date: new Date()
};
```

Error aayega ❌

> Property 'content' is missing

Kyuki content mandatory hai.

---

# 🟢 Optional Property Kaise Banaye?

Agar hum chahte hain:

- `category` ho sakti hai
- Ya na bhi ho

Toh `?` use karte hain 👇

```ts id="4rj8ly"
type Post = {
  title: string;
  content: string;
  date: Date;
  category?: string;
};
```

📌 Question mark `?` property name ke baad lagta hai.

---

# 🔥 Ab Behavior Dekho

Valid:

```ts id="njp3rz"
let post1: Post = {
  title: "First",
  content: "Content",
  date: new Date(),
  category: "JavaScript"
};
```

Also valid:

```ts id="kflw92"
let post2: Post = {
  title: "Second",
  content: "Content",
  date: new Date()
};
```

✔ Category optional hai.

---

# 🧠 Optional Property Summary

| Without `?` | With `?` |
|-------------|----------|
| Mandatory | Optional |
| Must exist | May or may not exist |
| Error if missing | No error |

---

# 🔐 Readonly Properties

Kabhi kabhi kuch properties change nahi honi chahiye.

Example: Author ka type

---

## 🔹 Author Type

```ts id="v3pqrx"
type Author = {
  name: string;
  age: number;
  email: string;
  readonly type: "human" | "AI";
};
```

Yaha:

- `type` property readonly hai  
- Sirf "human" ya "AI" ho sakta hai (union type)

---

# 🟢 Object Create Karna

```ts id="i6wpld"
let author: Author = {
  name: "John",
  age: 30,
  email: "john@email.com",
  type: "human"
};
```

✔ Valid

---

# ❌ Change Karne Ki Koshish

```ts id="l3v9op"
author.type = "AI";
```

Error ❌

> Cannot assign to 'type' because it is a read-only property

---

# 🧠 Readonly Property Summary

| Feature | Behavior |
|----------|----------|
| `readonly` | Value change nahi ho sakti |
| Initial assignment | Allowed |
| Reassignment | Not allowed |
| Useful for | IDs, types, constants |

---

# 🏁 Final Understanding

✔ TypeScript me properties default mandatory hoti hain  
✔ `?` use karke optional bana sakte hain  
✔ `readonly` use karke immutable bana sakte hain  
✔ Optional flexibility deta hai  
✔ Readonly safety deta hai  

---

# 🚀 Quick Revision Points

- `property?: type` → optional  
- `readonly property: type` → immutable  
- Default behavior → mandatory  
- Union types readonly ke saath use ho sakte hain  
- TypeScript strict object structure enforce karta hai  

---

🎯 Final Line Yaad Rakho:

> `?` flexibility deta hai,  
> `readonly` protection deta hai 🔥  

Next lecture me aur advanced object manipulation dekhenge 🚀