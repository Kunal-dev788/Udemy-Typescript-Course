# 🗂️ Index Signatures in TypeScript – Dynamic Object Keys 🚀

---

# 🎯 Lecture Goal

Is lecture me hum samjhenge:

- Jab object ke property names fixed nahi hote tab kya karein  
- Index signature kya hota hai  
- Kaise strictly type kare dynamic keys ko  
- Kaise types ko aur clean banaye  

Ye concept real-world apps me bahut useful hai 💪

---

# 🟢 Problem Scenario – Dynamic Object Properties

Maan lo humare `Post` type me ek property hai:

```ts
awards
```

Aur awards ka structure kuch aisa ho sakta hai:

```ts
awards: {
  webAward: {
    name: "Web Awards",
    date: new Date()
  },
  web3: {
    name: "Web3 Award",
    date: new Date()
  }
}
```

Problem 👇

- `webAward`
- `web3`
- `anythingElse`

Inke names fixed nahi hain ❗  
Lekin hume pata hai:

✔ Har key string hogi  
✔ Har value ek object hogi jisme `name` aur `date` hoga  

---

# ❌ Simple Object Type Enough Nahi Hai

Agar hum likhe:

```ts
awards: {}
```

Toh:

- Too loose ❌  
- Koi strict checking nahi  

---

# 🟢 Solution – Index Signature

Index signature ka syntax:

```ts
[key: string]: ValueType
```

Matlab:

> Object me koi bhi property ho sakti hai  
> Bas key string honi chahiye  
> Aur value ek specific type ki hogi  

---

# 🔹 Step 1 – Inline Index Signature

```ts id="k3m7qx"
type Post = {
  title: string;
  content: string;
  date: Date;
  awards: {
    [key: string]: {
      name: string;
      date: Date;
    };
  };
};
```

Yaha:

- `[key: string]` → koi bhi string property allowed  
- Har property ka value → object with name & date  

---

# 🔥 Ab Strict Validation Milega

Agar award object me koi property missing ho:

```ts
awards: {
  webAward: {
    name: "Web Awards"
  }
}
```

❌ Error aayega

Kyuki `date` missing hai.

---

# 🧠 Important Rule

✔ Ek object me sirf **one index signature** allowed hota hai  
✔ Key type `string` ya `number` ho sakta hai  
✔ Multiple index signatures allowed nahi  

---

# 🟢 Step 2 – Clean Approach (Separate Types)

Better readability ke liye hum types separate kar sakte hain.

---

## 🔹 AwardDetails Type

```ts id="z4p8tm"
type AwardDetails = {
  name: string;
  date: Date;
};
```

---

## 🔹 Awards Type (Index Signature)

```ts id="r1n5qs"
type Awards = {
  [key: string]: AwardDetails;
};
```

---

## 🔹 Final Post Type

```ts id="u8c2vl"
type Post = {
  title: string;
  content: string;
  date: Date;
  awards: Awards;
};
```

✔ Clean  
✔ Reusable  
✔ Maintainable  

---

# 📊 Structure Overview

| Type | Purpose |
|------|----------|
| AwardDetails | Single award ka structure |
| Awards | Dynamic keys wala object |
| Post | Main blog post type |

---

# 🧠 Why Index Signature Important?

Use when:

- Property names dynamic hain  
- Pattern known hai  
- Strict typing chahiye  
- API responses unpredictable keys dete hain  

---

# 🏁 Final Understanding

✔ Index signature dynamic keys handle karta hai  
✔ `[key: string]: Type` syntax use hota hai  
✔ Strict typing maintain hoti hai  
✔ Clean structure ke liye separate type aliases use karo  
✔ Ek object me sirf ek index signature allowed  

---

# 🚀 Quick Revision Points

- Dynamic keys → Index signature  
- `[key: string]: ValueType`  
- Use `AwardDetails` type  
- Use `Awards` type  
- Reusable and scalable approach  

---

🎯 Final Line Yaad Rakho:

> Jab property names unknown ho,  
> Tab index signature use karo 🔥  

Next lecture me aur advanced object typing patterns explore karenge 🚀