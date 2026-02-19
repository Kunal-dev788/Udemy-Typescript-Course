# 🧩 Nested Objects in TypeScript – Strict Typing 🚀

---

# 🎯 Lecture Goal

Is lecture me hum samjhenge:

- Nested object kya hota hai  
- Usko strictly type kaise karte hain  
- Inline nested typing vs separate type alias  
- Best practice kya hai  

Nested objects real-world apps me bahut common hote hain 💪

---

# 🟢 Step 1: Base Post Type

Maan lo humare paas ek `Post` type already hai:

```ts
type Post = {
  title: string;
  content: string;
  date: Date;
};
```

Aur hum ek post object bana rahe hain:

```ts
let post: Post = {
  title: "My Blog",
  content: "Blog content",
  date: new Date()
};
```

---

# 🔹 Ab Add Karein Nested Object – Author

Hum chahte hain:

```ts
let post: Post = {
  title: "My Blog",
  content: "Blog content",
  date: new Date(),
  author: {
    name: "John",
    age: 30,
    email: "john@email.com"
  }
};
```

❌ Error aayega:

> Property 'author' does not exist in type 'Post'

Kyuki Post type me author define hi nahi hai.

---

# 🟡 Method 1 – Inline Nested Object Typing

Post type ke andar nested object define karo:

```ts id="c0l9hs"
type Post = {
  title: string;
  content: string;
  date: Date;
  author: {
    name: string;
    age: number;
    email: string;
  };
};
```

Ab error chala jayega ✔

TypeScript ab jaanta hai:

👉 author ek object hai  
👉 Usme 3 properties honi chahiye  

---

# ❗ Problem with Inline Nested Typing

Agar:

- Author object bada ho  
- Ya multiple jagah reuse karna ho  

Toh inline typing messy ho sakti hai 😬

---

# 🟢 Method 2 (Better Way) – Separate Type Alias

Step 1: Author ka alag type banao

```ts id="n8f7dr"
type Author = {
  name: string;
  age: number;
  email: string;
};
```

---

# Step 2: Post me Author Use Karo

```ts id="f3l4qa"
type Post = {
  title: string;
  content: string;
  date: Date;
  author: Author;
};
```

---

# 🔥 Ab Kya Benefit Hai?

- Author reusable ho gaya  
- Clean code  
- Readable  
- Maintainable  

Agar kahin aur bhi author use karna ho:

```ts id="t4mp90"
let writer: Author = {
  name: "Alice",
  age: 28,
  email: "alice@email.com"
};
```

Same structure reuse ho jayega ✔

---

# 🧠 Strict Checking Example

Agar author me koi property missing ho:

```ts id="qk3p0m"
author: {
  name: "John",
  age: 30
}
```

❌ Error aayega

Kyuki `email` missing hai.

TypeScript nested structure bhi strictly check karta hai 🔥

---

# 📊 Inline vs Separate Type Alias

| Feature | Inline Nested | Separate Type |
|----------|--------------|--------------|
| Readability | ❌ Complex | ✅ Clean |
| Reusability | ❌ No | ✅ Yes |
| Scalability | ❌ Hard | ✅ Easy |
| Recommended | ❌ Small objects only | ✅ Best Practice |

---

# 🧠 Important Understanding

- Nested objects common hote hain  
- Inline typing possible hai  
- Lekin separate type alias better hai  
- Type aliases modular structure create karte hain  

---

# 🏁 Final Understanding

✔ Nested objects ko strictly type kar sakte hain  
✔ Inline object literal syntax use hota hai  
✔ Better approach = separate type alias  
✔ Reusability + clean code  
✔ TypeScript deeply nested properties check karta hai  

---

# 🚀 Quick Revision Points

- Nested object inside type  
- `author: { ... }` → inline  
- `type Author = { ... }` → best way  
- Post me use karo: `author: Author`  
- Strict validation automatic  

---

🎯 Final Line Yaad Rakho:

> Complex objects ko tod ke alag types banao,  
> Aur unhe smart tareeke se reuse karo 🔥

Next lecture me aur advanced object patterns explore karenge 🚀