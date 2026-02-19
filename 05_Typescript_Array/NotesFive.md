# ⚡ Enums JavaScript Me Compile Hote Hain – Important Concept

Ye bahut important concept hai.

Normally:

- ✅ **Type aliases**
- ✅ **Interfaces**
- ❌ JavaScript me compile nahi hote

Lekin…

> 🔥 **Enums compile hote hain JavaScript me**

Isi wajah se hum runtime pe unki value access kar paate hain.

---

# 🧠 Proof – Enum Runtime Pe Available Hai

Example:

```ts
enum Roles {
  ADMIN = "admin",
  AUTHOR = "author"
}

const userRole = Roles.ADMIN;
console.log(userRole);
```

Output:
```
admin
```

Agar enum sirf type hota…

To JS me exist hi nahi karta.

But yaha value print ho rahi hai 👉 iska matlab enum object me convert hua hai.

---

# 🔍 JavaScript Me Enum Kaise Compile Hota Hai?

Normal enum:

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}
```

JS me convert hota hai approx aise:

```js
var Direction;
(function (Direction) {
  Direction[Direction["Up"] = 0] = "Up";
  Direction[Direction["Down"] = 1] = "Down";
  Direction[Direction["Left"] = 2] = "Left";
  Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
```

👉 Basically enum ek object ban jata hai.

---

# 🆚 Normal Enum vs Const Enum

## 1️⃣ Normal Enum

```ts
enum Direction {
  Up,
  Down
}

const d = Direction.Up;
```

✔ Entire enum object JS me generate hota hai  
✔ Runtime pe accessible hota hai  

---

## 2️⃣ Const Enum

```ts
const enum EDirection {
  Up,
  Down
}

const e = EDirection.Up;
```

Ab kya hota hai?

👉 Pura enum object JS me generate nahi hota  
👉 Sirf used value inline replace ho jati hai  

JS me approx output:

```js
const e = 0;
```

No object created.

---

# 🤔 Const Enum Kyu Use Karein?

Use karo jab:

- Enum bahut bada ho
- Unnecessary JS objects avoid karne ho
- Performance optimize karna ho
- Runtime pe enum object ki zarurat na ho

Most cases me:

> ✅ Normal enum sufficient hota hai

---

# 🧱 Enum vs Object As Const

Let’s compare.

## Object Version

```ts
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3
} as const;
```

`as const` lagane ke baad:

- Properties readonly ho jati hain
- Values literal types ban jati hain

Ab:

```ts
ODirection.Up = 10; // ❌ Error
```

Ye bhi enum jaisa behave karega.

---

# 📊 Comparison Table

| Feature | Enum | Const Enum | Object as const |
|----------|--------|------------|----------------|
| Compiled to JS object | ✅ Yes | ❌ No | ✅ Yes |
| Runtime available | ✅ | ❌ | ✅ |
| Readonly by default | ✅ | ✅ | With `as const` |
| Performance optimized | ❌ | ✅ | ❌ |
| Most common | ✅ | Rare | Common in modern TS |

---

# 🎯 Important Distinction

| Type Alias | Enum |
|------------|------|
| JS me compile nahi hota | JS me compile hota hai |
| Sirf TypeScript tak limited | Runtime pe exist karta hai |

Example:

```ts
type Person = { name: string }
```

👉 Ye JS me nahi dikhega.

But:

```ts
enum Role {
  ADMIN = "admin"
}
```

👉 Ye JS me object banega.

---

# 🚀 Final Understanding

✔ Enum = Type + Runtime Object  
✔ Const Enum = Type only (value inline ho jata hai)  
✔ Object `as const` = Modern enum alternative  
✔ Type aliases runtime pe exist nahi karte  
✔ Enums special case hain TypeScript me  

Simple yaad rakho:

> 💡 Baaki types sirf TypeScript ke liye hote hain  
> 💡 Enum runtime ke liye bhi hota hai  

Isi wajah se enums powerful hote hain 🔥