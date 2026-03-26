# 🔒 Required & Readonly Utility Types – TypeScript (Easy Hinglish Notes)

Aaj hum do simple but important utility types dekhenge:

1️⃣ **Required**  
2️⃣ **Readonly**

Dono samajhna easy hai kyunki ye Partial ke opposite ya simple extension jaisa kaam karte hain 👌

---

# 🟢 Required Utility Type

---

## 🧠 Required Kya Hota Hai?

`Required<Type>` ka matlab:

> ✅ Is type ki saari properties mandatory bana do

Agar original type me kuch properties optional (`?`) hain,  
to Required use karne ke baad sab required ho jayengi.

---

## 📌 Basic Syntax

Required<OriginalType>

---

## 📝 Example – Optional User Interface

Maan lo humare paas ek User interface hai jisme sab optional hai:

interface User {
  name?: string;
  email?: string;
  age?: number;
  password?: string;
}

Yaha:
- name optional
- email optional
- age optional
- password optional

---

## 🎯 Real Situation – User Registration

User ko register karne ke liye hume minimum chahiye:

- ✅ email
- ✅ password

Baaki fields optional ho sakti hain.

To hume ek naya type banana hai jisme:

- Sirf email aur password ho
- Aur dono required ho

---

## 🚀 Required + Pick Combine Karna

type RegisterUser = Required<Pick<User, "email" | "password">>;

Yaha kya ho raha hai?

Step 1️⃣ → Pick  
User se sirf:
- email
- password

Step 2️⃣ → Required  
In dono ko required bana diya

---

## 🔍 Final Type Banega

type RegisterUser = {
  email: string;
  password: string;
}

Ab dono required hain ✅

Agar email ya password missing hua to:
❌ TypeScript error dega

---

## 🔥 Required Ka Main Kaam

- Optional properties ko mandatory banana
- Special forms ya API requirements me use hota hai
- Pick ke saath combine karna common pattern hai

---

# 🔵 Readonly Utility Type

Ab aate hain sabse simple utility type par 👇

---

## 🧠 Readonly Kya Hota Hai?

`Readonly<Type>` ka matlab:

> ✅ Is type ki saari properties read-only bana do

Matlab:

- Object create ho sakta hai
- But baad me modify nahi kar sakte ❌

---

## 📌 Basic Syntax

Readonly<OriginalType>

---

## 📝 Example – Simple User

interface User {
  name: string;
  age: number;
}

Ab object banate hain:

const user: User = {
  name: "John",
  age: 32
};

Abhi hum easily change kar sakte hain:

user.name = "Mike"; ✅ Allowed

---

## 🚀 Ab Readonly Use Karte Hain

type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = {
  name: "John",
  age: 32
};

Ab agar try karein:

user.name = "Mike";

❌ TypeScript error dega

Kyun?

Kyuki property read-only hai.

---

## 🔍 Internally Ye Banega

type ReadonlyUser = {
  readonly name: string;
  readonly age: number;
}

Sab properties ke aage `readonly` lag gaya.

---

# 📌 Required vs Partial vs Readonly (Quick Comparison)

| Utility | Kaam |
|----------|------|
| Partial | Sab optional bana do 🧩 |
| Required | Sab mandatory bana do 🔐 |
| Readonly | Sab read-only bana do 🔒 |

---

# 🏁 Final One-Liners

Partial<Type>  
= "Sab optional bana do"

Required<Type>  
= "Sab required bana do"

Readonly<Type>  
= "Sab read-only bana do"

---

Utility types ka real power tab aata hai jab tum inhe combine karte ho 💪  
Jaise:

Required + Pick  
Readonly + Pick  
Partial + Omit  

Practice karte raho 🚀 TypeScript ka confidence level next level ho jayega.