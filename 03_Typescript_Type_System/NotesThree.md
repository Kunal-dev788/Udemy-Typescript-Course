# 🏷️ Type Alias in TypeScript – Custom Types Banana 🚀

---

# 🎯 Lecture Goal

Is lecture me hum samjhenge:

- Type Alias kya hota hai  
- Kaise declare karte hain  
- Kaise use karte hain  
- Abhi simple lagega, but future me powerful banega 💪  

---

# 🟢 Type Alias Kya Hota Hai?

👉 Type Alias ek **custom type** hota hai  
👉 Jo hum khud define karte hain  
👉 Ye built-in type nahi hota  

Example:

- `string`, `number`, `boolean` → built-in types  
- `CustomString`, `UserId` → custom types (type alias)

---

# 🟢 Type Alias Ka Syntax

Type alias declare karne ke liye:

```ts
type CustomString = string;
```

📌 `type` keyword use hota hai  
📌 Naming convention: PascalCase (Upper Camel Case)

---

# 🔹 Simple Type Alias Examples

```ts
type CustomString = string;
type CustomNumber = number;
type CustomDate = Date;
type CustomSymbol = symbol;
```

Yaha:

- `CustomString` internally string hi hai  
- `CustomNumber` internally number hi hai  
- `CustomDate` JavaScript Date type hai  
- `CustomSymbol` JavaScript symbol type hai  

---

# 🟢 Type Alias Use Kaise Kare?

## 🔹 Custom String Example

```ts
type CustomString = string;

let firstName: CustomString = "Mark";
```

Hover karoge toh TypeScript bolega:

👉 `firstName` is of type `string`

---

# 🤯 Important Observation

TypeScript internally samajhta hai:

```
CustomString = string
```

Isliye wo automatically infer karega actual primitive type.

Ye ek intelligent type resolution hai 🔥

---

# 🔹 Custom Number Example

```ts
type CustomNumber = number;

let age: CustomNumber = 25;
```

Again:

👉 TypeScript infer karega `number`

---

# 🔹 Custom Date Example

```ts
type CustomDate = Date;

let today: CustomDate = new Date();
```

✔ Properly work karega

---

# 🔹 Custom Symbol Example

```ts
type CustomSymbol = symbol;

let unique: CustomSymbol = Symbol();
```

✔ Ye bhi perfectly valid hai

---

# 🧠 Important Concept

Abhi ye sab useless lag sakta hai 😅

Kyuki:

```
type CustomString = string;
```

Ka fayda kya hua?

But future me jab hum:

- Union types
- Intersection types
- Complex object types
- Function types

Banayenge…

Tab type alias extremely useful ho jayega 🔥

---

# ⚙️ Type Conversion Insight

Yaha ek subtle concept hai 👇

TypeScript kabhi kabhi automatically resolve karta hai:

- Custom type ko primitive type me
- Jisse hover karne pe actual primitive type dikhe

Isko loosely type resolution ya simplification bol sakte hain.

---

# 📊 Built-in vs Custom Type

| Built-in Type | Custom Type Alias |
|---------------|-------------------|
| string | type Name = string |
| number | type Age = number |
| boolean | type IsAdmin = boolean |
| Date | type CustomDate = Date |

---

# 🏁 Final Understanding

✔ Type alias custom type banane ka tarika hai  
✔ `type` keyword use hota hai  
✔ Naming PascalCase me hoti hai  
✔ Internally primitive type hi use hota hai  
✔ Future me complex types ke liye bahut powerful hoga  

---

# 🚀 Quick Revision Points

- `type CustomString = string`
- `type CustomNumber = number`
- Type alias = custom naming
- Built-in types ko wrap kar sakte ho
- Complex types ke liye groundwork hai

---

🎯 Final Line Yaad Rakho:

> Type Alias simple naam se start hota hai,  
> Lekin future me complex type system ka foundation banta hai 🔥

Next lecture me hum aur advanced type manipulation dekhenge 🚀