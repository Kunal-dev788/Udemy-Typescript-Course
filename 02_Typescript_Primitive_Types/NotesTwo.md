# ❓ Null vs Undefined in TypeScript – Clear Difference 🚀

---

# 🎯 Lecture Goal

Is lecture me hum samjhenge:

- `undefined` kya hota hai  
- `null` kya hota hai  
- Dono me difference kya hai  
- TypeScript in dono ko kaise treat karta hai  

Bahut log yaha confuse ho jate hain 😅  
Aaj clarity aa jayegi 💪

---

# 🟡 1️⃣ Undefined Kya Hota Hai?

Agar tum variable declare karo aur value assign na karo 👇

```ts
let user;
```

Toh by default:

👉 `user` = `undefined`

---

## 🔎 Check Karke Dekhte Hain

```ts
console.log(user);
```

Output:

```
undefined
```

---

## 🔹 Explicit Undefined Type

Tum clearly define bhi kar sakte ho:

```ts
let user: undefined;
```

Matlab:
- Is variable ka type sirf undefined hai

---

# 🔵 2️⃣ Null Kya Hota Hai?

Null ka matlab hota hai:

👉 Intentionally no value  

Ye undefined se alag concept hai.

---

## 🔹 Null Type Example

```ts
let userRole: null;
```

Ab TypeScript samajhta hai:

- Ye variable undefined nahi ho sakta  
- Isko explicitly null assign karna padega  

---

## ❌ Agar Assign Na Kare

```ts
let userRole: null;
console.log(userRole);
```

TypeScript error dega:

> Variable is used before being assigned

Kyuki:

👉 Tumne bola tha type = null  
👉 Lekin value assign nahi ki

---

## ✅ Correct Way

```ts
let userRole: null = null;
```

Ab koi error nahi 👍

---

# 🚨 Important: Null ≠ Undefined

Chalo compare karke dekhte hain:

```ts
console.log(userRole === user);
```

Output:

```
false
```

👉 Null aur undefined equal nahi hain.

---

# 🤯 Confusion Kyun Hota Hai?

JavaScript me conditional checks me dono interchangeable lagte hain.

Example:

```ts
if (userRole == null) {
  console.log("Condition true");
}
```

Yaha `==` loose equality use ho raha hai  
Isme `null` aur `undefined` similar behave karte hain.

Isliye confusion hota hai 😬

---

# 🔥 Important Difference Table

| Feature | undefined | null |
|----------|------------|-------|
| Meaning | Value not assigned | Intentionally empty |
| Default behavior | Auto assign hota hai | Manually assign karna padta hai |
| TypeScript me type | Separate type | Separate type |
| Equal? | ❌ Not equal to null | ❌ Not equal to undefined |

---

# 🧠 TypeScript Strict Behavior

TypeScript clearly bolta hai:

- `undefined` alag type hai  
- `null` alag type hai  
- Dono ko mix nahi karna chahiye  

Ye strictness hi TypeScript ko powerful banati hai 💪

---

# 🔎 Practical Mental Model

## 🟡 undefined

> "Mujhe abhi tak value nahi mili"

## 🔵 null

> "Main intentionally empty hoon"

---

# 🏁 Final Understanding

✔ Undefined = No value assigned  
✔ Null = Intentionally empty  
✔ Dono alag types hain  
✔ TypeScript inhe strictly treat karta hai  
✔ Confusion mostly loose equality (`==`) ki wajah se hota hai  

---

# 🚀 Quick Revision Points

- Variable without value → undefined  
- Explicitly empty value → null  
- Null ≠ Undefined  
- TypeScript dono ko separate types treat karta hai  
- Strict typing confusion kam karta hai  

---

🎯 Final Line Yaad Rakho:

> Undefined accidental hota hai,  
> Null intentional hota hai.

Ab null vs undefined ka confusion khatam 🔥  
Next lecture me aur interesting TypeScript concepts dekhenge 🚀

---