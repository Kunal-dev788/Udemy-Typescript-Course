# 🎭 Type Casting in TypeScript – Forcing a Type 🚀

---

# 🎯 Lecture Goal

Is lecture me hum samjhenge:

- Type casting kya hota hai  
- Kaise ek type ko doosre type me cast karte hain  
- `as` keyword ka use  
- Real-world use case (API response example)  

Type casting powerful hai, lekin carefully use karna chahiye ⚠️

---

# 🟢 Type Casting Kya Hota Hai?

Simple definition:

> Jab tum TypeScript ko forcefully bolte ho  
> "Is value ko is type ki tarah treat karo"

Matlab:

- TypeScript kuch infer kar raha hai
- Lekin tum usse override kar rahe ho

---

# 🔹 Basic Example

```ts
let firstName = "Mark";
```

TypeScript infer karega:

👉 `string`

---

## 🔄 Forcefully Cast Karna (Angle Bracket Syntax)

```ts
let firstName = <any>"Mark";
```

Ab:

👉 TypeScript isko `any` treat karega

Ye hai **type casting**

---

# 🟢 Recommended Syntax – `as` Keyword

Angle bracket syntax avoid karo (especially React me issue hota hai)

Better way:

```ts
let lastName = "Smith" as any;
```

Ab:

👉 `lastName` ka type = `any`

---

# 🧠 Important

Type casting ka matlab ye nahi ki value change ho gayi  
Sirf TypeScript ka understanding change hota hai

---

# 🔥 Practical Example – API Response

Imagine karo:

Ek API hai jo user object return karti hai 👇

```ts
{
  name: "Mark",
  email: "mark@email.com"
}
```

---

# 🟢 Step 1: Fetch Function

```ts
function fetchUser() {
  const userFromAPI = {
    name: "Mark",
    email: "mark@email.com"
  };

  return userFromAPI;
}
```

---

# 🟢 Step 2: Result Check

```ts
const fetchedUser = fetchUser();
```

TypeScript infer karega:

👉 `{ name: string; email: string }`

Yaha inference correct hai kyuki object directly defined hai.

---

# 🤯 Real World Problem

Real API call me:

- Response generic hota hai
- TypeScript ko exact shape pata nahi hota
- Often type `any` ya `unknown` milta hai

Lekin tum as developer jaante ho exact structure kya hai 💡

---

# 🟢 Step 3: Create Custom Type

```ts
type User = {
  name: string;
  email: string;
};
```

Ye hai **type declaration**

---

# 🟢 Step 4: Cast API Response

```ts
function fetchUser() {
  const userFromAPI = {
    name: "Mark",
    email: "mark@email.com"
  };

  return userFromAPI as User;
}
```

Ab:

👉 TypeScript samjhega return type = `User`

---

# 🎯 Final Result

```ts
const fetchedUser = fetchUser();
```

Hover karoge toh:

👉 `fetchedUser` is of type `User`

---

# ⚠️ Important Warning

Type casting:

- Type checking bypass karta hai
- Agar galat cast kiya → runtime error aa sakta hai

Isliye:

👉 Sirf tab use karo jab 100% sure ho

---

# ⚔️ Type Casting vs Type Inference

| Concept | Meaning |
|----------|----------|
| Inference | TypeScript khud guess karta hai |
| Casting | Tum TypeScript ko force karte ho |
| Safe? | Mostly safe | Risky if wrong |

---

# 🏁 Final Understanding

✔ Type casting = forceful type override  
✔ 2 syntax: `<Type>` aur `as Type`  
✔ `as` syntax recommended  
✔ Mostly API responses me use hota hai  
✔ Galat cast dangerous ho sakta hai  

---

# 🚀 Quick Revision Points

- `"value" as any`
- `return data as User`
- TypeScript ka understanding change hota hai
- Value change nahi hoti
- Carefully use karo ⚠️

---

🎯 Final Line Yaad Rakho:

> Type casting tab karo jab tum TypeScript se zyada sure ho 🔥

Next lecture me aur advanced type system features explore karenge 🚀