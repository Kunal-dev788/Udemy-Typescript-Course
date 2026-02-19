# 🚦 Enums in TypeScript – Complete Guide 🔥

Is lecture me hum ek powerful TypeScript feature dekhenge:

> ✨ **Enums**

Enums JavaScript me nahi hote.  
Ye sirf TypeScript ka feature hai.

---

# 🤔 Enums Ki Zarurat Kyu?

JavaScript me often hum aise constants banate hain:

```ts
const STATUS_LOADING = "loading";
const STATUS_STOPPED = "stopped";
```

Ye approach:

- Values change nahi hoti ✅
- Constants safe hote hain ✅

Lekin:

- Har value ke liye alag constant banana padta hai ❌
- Structure grouped nahi hota ❌

👉 Yahi problem solve karta hai **enum**

---

# 🧱 Basic Enum Declaration

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}
```

⚠️ Important:
- `=` use nahi hota
- Direct curly braces use hote hain

---

# 🧠 Behind The Scenes Kya Hota Hai?

TypeScript automatically numbers assign karta hai:

| Enum Member | Value |
|------------|-------|
| Up | 0 |
| Down | 1 |
| Left | 2 |
| Right | 3 |

Example:

```ts
console.log(Direction.Up);
```

Output:
```
0
```

---

# 🔒 Enum Properties Readonly Hote Hain

```ts
Direction.Left = 10; // ❌ Error
```

Enum members constant jaise behave karte hain.

---

# 🔢 Custom Starting Value

```ts
enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right
}
```

Ab:

| Member | Value |
|--------|-------|
| Up | 1 |
| Down | 2 |
| Left | 3 |
| Right | 4 |

Auto increment 1 se start hoga.

---

# 📝 String Enums (Recommended ⭐)

Best practice: string values use karo.

```ts
enum Roles {
  ADMIN = "admin",
  AUTHOR = "author",
  EDITOR = "editor"
}
```

Ab:

```ts
console.log(Roles.ADMIN);
```

Output:
```
admin
```

👉 Ye zyada readable hota hai  
👉 Database sync ke liye perfect hai  
👉 Debugging easy hoti hai  

---

# 👤 Practical Example

```ts
type Person = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};
```

Use:

```ts
const person: Person = {
  name: "John",
  email: "john@email.com",
  password: "123456",
  role: Roles.ADMIN
};
```

✔ Role sirf 3 values ho sakti hain  
❌ Random string assign nahi kar sakte  

TypeScript enforce karega.

---

# 🔀 Heterogeneous Enum (Mixed Types)

Enum number + string dono ho sakta hai:

```ts
enum Direction3 {
  Up = 1,
  Down = "DOWN",
  Left = 3,
  Right = "RIGHT"
}
```

⚠️ Allowed hai  
❌ Recommended nahi hai  

Consistency better hoti hai.

---

# 🧠 Numeric vs String Enum

| Numeric Enum | String Enum |
|--------------|-------------|
| Auto increment hota hai | Manual assign karte ho |
| Less readable | More readable |
| Debugging tough | Debugging easy |
| Mostly internal use | Recommended |

---

# 🎯 When To Use Enums?

Use enums jab:

- Fixed set of values ho
- Roles ho
- Status ho
- Directions ho
- Database identifiers ho
- Constant identifiers ho

---

# 🚀 Final Takeaway

✔ Enum = Structured constants  
✔ Auto increment support  
✔ Readonly by default  
✔ String enums most practical  
✔ Safe & predictable values  

Simple yaad rakho:

> JavaScript me constants  
> TypeScript me enums 🔥  

Enums real projects me bahut kaam aate hain — especially backend + frontend integration me 💪🚀