# 🏷️ Field Decorators in TypeScript (Stage 3)

Ab tak hum method decorators pe kaafi kaam kar chuke hain 💪  
Ab samjhte hain:

> Field decorators kya hote hain?

Field decorators wo hote hain jo **class ki properties** par lagte hain.

---

# 🟢 Step 1 — Basic Setup

Maan lo hum ek blogging platform bana rahe hain.

Humare paas ek `Author` class hai.

```ts
class Author {
  constructor(public name: string) {}

  public posts: Post[] = [];
}
```

---

# 🟢 Step 2 — Post Type Banate Hain

Har author ke paas posts honge.

Toh pehle ek `Post` type bana lete hain:

```ts
type Post = {
  title: string;
  content: string;
};
```

Ab `posts` property strictly typed hai:

```ts
public posts: Post[] = [];
```

Default me empty array hai.

---

# 🟢 Ab Problem Samjho

Agar hum new author banayein:

```ts
const author = new Author("Mark");
console.log(author.posts);
```

Output kya milega?

```
[]
```

Empty array ❌

---

# 🎯 Goal

Hum ek decorator banana chahte hain:

```
@addDefaultPost
```

Jo automatically ek default post add kare.

---

# 🟢 Important Rule (Field Decorator)

⚠️ Stage 3 me:

> Field decorators ka **target always `undefined` hota hai**

Kyuki field property na function hai  
Na constructor

---

# 🟢 Step 3 — Field Decorator Banana

```ts
function addDefaultPost<
  This,
  Value extends Post[]
>(
  target: undefined,
  context: ClassFieldDecoratorContext<This, Value>
) {
```

---

## 🧠 Samjho Generics

| Generic | Meaning |
|----------|----------|
| `This` | Class type (Author) |
| `Value` | Property type (Post[]) |

Aur humne restrict kar diya:

```
Value extends Post[]
```

Iska matlab:

Ye decorator sirf `Post[]` property pe lag sakta hai.

---

# 🟢 Step 4 — Return Function

Field decorator me hume ek function return karna hota hai.

Ye function receive karta hai:

```
initialValue
```

```ts
return function (initialValue: Value) {
```

Ye `initialValue` hota hai property ka default value.

Hamare case me:

```
[]
```

---

# 🟢 Step 5 — Default Post Add Karo

```ts
initialValue.push({
  title: "Default Title",
  content: "Default Content"
});
```

Ab array me ek post add ho gaya.

---

# 🟢 Step 6 — Return Modified Value

```ts
return initialValue;
```

Full decorator structure:

```ts
function addDefaultPost<
  This,
  Value extends Post[]
>(
  target: undefined,
  context: ClassFieldDecoratorContext<This, Value>
) {

  return function (initialValue: Value) {

    initialValue.push({
      title: "Default Title",
      content: "Default Content"
    });

    return initialValue;
  };
}
```

---

# 🟢 Step 7 — Decorator Use Karo

```ts
class Author {

  constructor(public name: string) {}

  @addDefaultPost<Author, Post[]>
  public posts: Post[] = [];
}
```

---

# 🟢 Ab Output Dekho

```ts
const author = new Author("Mark");
console.log(author.posts);
```

Output:

```
[
  {
    title: "Default Title",
    content: "Default Content"
  }
]
```

🔥 Array ab empty nahi hai.

---

# 🧠 Important Concepts Clear Karo

### 1️⃣ Field Decorator me target kya hota hai?
Always `undefined`

---

### 2️⃣ Context type kya hota hai?
```
ClassFieldDecoratorContext
```

Ye 2 generics leta hai:

```
<This, Value>
```

---

### 3️⃣ Return kya karna hota hai?

Ek function jo:

- initial value receive kare
- modify kare
- return kare

---

# 🟢 Strict Typing Ka Fayda

Ab ye decorator:

❌ Kisi random property pe nahi lag sakta  
❌ String property pe nahi lagega  
❌ Number pe nahi lagega  

Sirf `Post[]` pe lagega ✅

---

# 🧠 Flow Samjho

```
Decorator lagta hai →
initialValue milta hai →
Hum modify karte hain →
Return karte hain →
Property updated ho jaati hai
```

---

# 🎯 Final Understanding

| Method Decorator | Field Decorator |
|------------------|-----------------|
| target = function | target = undefined |
| replace method | modify property value |
| args milte hain | initial value milti hai |

---

# 🚀 Final Takeaway

Field decorators use karo jab:

- Default values inject karni ho
- Property transform karni ho
- Validation add karni ho
- Metadata attach karna ho

---

Ab tak tumne:

✔ Method decorators  
✔ Strict typing  
✔ Generics  
✔ Field decorators  

sab cover kar liya 😄

Next level decorators aur bhi powerful honge 🚀