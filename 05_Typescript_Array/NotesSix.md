# ⚙️ Computed Values Inside Enums

Ab tak humne enums me:

- 🔢 Auto-incremented numbers (0,1,2…)
- 📝 Literal strings ("admin", "author")

Use kiye the.

Lekin TypeScript me **computed values** bhi possible hain.

---

## 🛡 Example: Access Permissions

```ts
enum AccessPermissions {
  None = 0,
  Read = 1,
  Write = 2,
  ReadWrite = Read + Write,
  Delete = 4,
  All = ReadWrite + Delete
}
```

### 🧠 Yaha kya ho raha hai?

| Permission | Value |
|------------|--------|
| None | 0 |
| Read | 1 |
| Write | 2 |
| ReadWrite | 3 |
| Delete | 4 |
| All | 7 |

`ReadWrite = Read + Write`  
👉 1 + 2 = 3  

`All = ReadWrite + Delete`  
👉 3 + 4 = 7  

TypeScript automatically calculation kar deta hai.

---

## 🖨 Output Check

```ts
console.log(AccessPermissions.ReadWrite); // 3
console.log(AccessPermissions.All);       // 7
```

---

### 💡 Important Note

Yeh especially useful hota hai jab:

- Permissions combine karni ho
- Flags system banana ho
- Bitmask style operations use karne ho

---

# 🧩 Enum as Types

Enums sirf values nahi hote…

> 🔥 Enums types ki tarah bhi behave karte hain.

Let’s see.

---

## 🔷 Step 1: Declare Enum

```ts
enum ShapeKind {
  Circle = "circle",
  Square = "square"
}
```

---

## 🔵 Step 2: Create Circle Type

```ts
type Circle = {
  kind: ShapeKind.Circle;
  radius: number;
};
```

Yaha:

`kind` ki type strictly `ShapeKind.Circle` hai.

Iska matlab:

👉 Ye kabhi square nahi ho sakta  
👉 Type safety mil rahi hai  

---

## 🟥 Step 3: Create Square Type

```ts
type Square = {
  kind: ShapeKind.Square;
  sideLength: number;
};
```

---

## 🚫 Invalid Example

```ts
const myCircle: Circle = {
  kind: ShapeKind.Square, // ❌ Error
  radius: 100
};
```

TypeScript bolega:

> Circle ka kind sirf Circle hi ho sakta hai.

Ye enum ka power hai 🔥

---

# 🔀 Enum Becomes a Union

Jab tum enum ko type ke roop me use karte ho:

```ts
function printShape(shape: ShapeKind) {
  console.log(shape);
}
```

Yeh internally treat hota hai as:

```
ShapeKind.Circle | ShapeKind.Square
```

Matlab enum automatically apne members ka union ban jata hai.

---

## ✅ Valid Calls

```ts
printShape(ShapeKind.Circle);
printShape(ShapeKind.Square);
```

---

## ❌ Invalid

```ts
printShape(ShapeKind); // Error
```

Kyuki:

Function ko specific member chahiye  
Poora enum object nahi.

---

# 🎯 Two Big Takeaways

## 1️⃣ Computed Enums Possible

- Enum values math operations se calculate ho sakte hain
- Clean syntax milta hai
- Explicit intention show hota hai

---

## 2️⃣ Enums Behave As:

✔ Types  
✔ Unions of their members  
✔ Runtime objects  

---

# 📌 Final Understanding

| Feature | Enum |
|----------|------|
| Auto values | ✅ |
| String values | ✅ |
| Computed values | ✅ |
| Acts as type | ✅ |
| Acts as union | ✅ |
| Runtime object | ✅ |

---

Simple yaad rakho:

> 🔥 Enum = Constant system + Type safety + Runtime object  
> 🔥 Enum members automatically union ban jaate hain  

Yehi enum ka real power hai TypeScript me.