# 📌 Tuples in TypeScript – Fixed Shape Arrays 🔒

Is lecture me hum ek special TypeScript feature samjhenge:

> 🔥 **Tuples**

Tuples JavaScript me nahi hote.  
Ye sirf TypeScript ka feature hai.

---

# 🤔 Tuple Kya Hota Hai?

Tuple = **Fixed length + Fixed order array**

Normal array:
- Length flexible
- Order flexible
- Types flexible

Tuple:
- Length fixed
- Order fixed
- Har position ka type fixed

---

# 🧪 Normal Array Problem

```ts
let person: (string | number)[] = ["John", "Doe", 30];
```

Problem ❌:

- Tum extra element add kar sakte ho
- Order change kar sakte ho
- Structure enforce nahi hota

Example:

```ts
person.push("extra");
```

Ye allow ho jayega 😬

Lekin hume exactly chahiye:

```
[string, string, number]
```

---

# ✅ Tuple Syntax

```ts
let person: [string, string, number] = ["John", "Doe", 30];
```

Ab:

- 1st element → string
- 2nd element → string
- 3rd element → number
- 4th element ❌ allowed nahi

Agar extra value add karoge → TypeScript error 🚨

---

# 🧠 Kaise Pehchane Tuple?

Tuple:

```
[string, number]
```

Array:

```
string[]
```

Difference yaad rakho 👆

---

# 🏗 Tuple Using Type Alias

```ts
type User = [string, string, number];
```

Use karna:

```ts
let user: User = ["Mark", "Doe", 25];
```

---

# ⭐ Optional Tuple Element

Jaise objects me optional property hoti hai,  
waise tuple me bhi optional element ho sakta hai.

```ts
type User = [string, string, number, string?];
```

Meaning:

1. First name → string  
2. Last name → string  
3. Age → number  
4. Email → optional string  

Use:

```ts
let user1: User = ["Mark", "Doe", 25];

let user2: User = ["Mark", "Doe", 25, "mark@gmail.com"];
```

Dono valid ✅

---

# 🚀 Rest Operator in Tuple

Kabhi-kabhi first few values fixed hoti hain,  
baaki multiple values same type ki hoti hain.

Example:

```ts
type ListOfStudents = [number, boolean, ...string[]];
```

Meaning:

- 1st → number (total students)
- 2nd → boolean (passing/failing)
- Baaki sab → string (student names)

Use:

```ts
let passingStudents: ListOfStudents = [
  3,
  true,
  "John",
  "Stella",
  "Mark"
];
```

---

# ⚠️ Important Rule

- Sirf **one rest operator** allowed
- Multiple `...` use nahi kar sakte ❌

---

# 📍 Rest Operator Anywhere Use Kar Sakte Ho

## Example 1

```ts
type StringBooleansNumber = [string, ...boolean[], number];
```

Structure:

- Start → string
- Middle → many booleans
- End → number

Example:

```ts
let example1: StringBooleansNumber = [
  "Start",
  true,
  false,
  true,
  100
];
```

---

## Example 2

```ts
type BooleansStringNumber = [...boolean[], string, number];
```

Structure:

- Start → many booleans
- Then → string
- End → number

Example:

```ts
let example2: BooleansStringNumber = [
  true,
  false,
  "Hello",
  50
];
```

---

# 🎯 Key Points Recap

✔ Tuple = Fixed structure  
✔ Order matter karta hai  
✔ Length fixed hoti hai  
✔ Optional elements possible  
✔ Rest operator se variable length possible  
✔ Sirf ek rest operator allowed  

---

# 🧠 Simple Difference

| Array | Tuple |
|--------|--------|
| Flexible | Strict |
| Unknown length | Fixed length |
| Same type usually | Different types allowed in order |

---

# 🔥 Final Takeaway

Tuples tab use karo jab:

- Data ka exact structure pata ho
- Order important ho
- Fixed length chahiye
- Strong typing chahiye

Example:
- User credentials
- Coordinates (x, y)
- Database row structure
- API response with fixed format

---

Tuples powerful hain jab tumhe **strict control** chahiye structure pe 💪

Next lecture me aur advanced types aayenge 🚀