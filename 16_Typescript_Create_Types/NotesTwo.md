# 🧠 typeof, Index Access & Mapped Types (Hinglish Notes)

---

# 🔍 typeof Operator (Type Extraction)

---

## 🎯 Concept

👉 Object se directly type bana sakte ho  

---

## Example

    const user = {
      id: 1,
      name: "Alice",
      age: 30
    }

---

## Create Type from Object

    type UserType = typeof user

---

## 🧠 Result

✔ id → number  
✔ name → string  
✔ age → number  

---

## Use New Type

    const newUser: UserType = {
      id: 2,
      name: "Bob",
      age: 25
    }

---

# 💡 Insight

👉 Object → Type conversion  
👉 No need to manually define types  

---

# ⚡ typeof + ReturnType

---

## Function

    const getUser = () => {
      return {
        id: 1,
        name: "Alice",
        age: 30
      }
    }

---

## Extract Return Type

    type ReturnUserType = ReturnType<typeof getUser>

---

## 🧠 Benefit

✔ Function return → automatic type  
✔ No duplication  

---

# 📌 Index Access Types

---

## 🎯 Concept

👉 Type ke andar se specific property ka type nikalna  

---

## Example

    type User = {
      id: number
      name: string
      age: number
    }

---

## Extract Name Type

    type UserNameType = User["name"]

---

## Result

👉 string  

---

## Extract ID Type

    type UserIdType = User["id"]

---

## Result

👉 number  

---

# 💡 Real Usage

    const userName: User["name"] = "Alice"

---

# 🧠 Insight

✔ Reuse existing types  
✔ Avoid hardcoding  

---

# 🔄 Mapped Types

---

## 🎯 Concept

👉 Type ke har property pe loop lagana  

---

## Example Type

    type User = {
      id: number
      name: string
      age: number
    }

---

# 🧩 Create Partial Type (Manual)

---

## Goal

👉 Sab properties optional banaani  

---

## Solution

    type PartialUser = {
      [K in keyof User]?: User[K]
    }

---

# 🧠 Breakdown

✔ K → each property  
✔ keyof User → all keys  
✔ User[K] → value type  
✔ ? → optional  

---

## Result

    {
      id?: number
      name?: string
      age?: number
    }

---

# 💡 Insight

👉 Ye internally same kaam karta hai jo:

    Partial<User>

---

# 🚀 Summary

---

## 🔹 typeof

✔ Object se type extract  

---

## 🔹 ReturnType

✔ Function return ka type  

---

## 🔹 Index Access

✔ Property ka type nikalna  

---

## 🔹 Mapped Types

✔ Loop over properties  
✔ Modify structure  

---

# 🧠 Final Insight

👉 TypeScript = DRY + Smart typing  

---

Agar yeh samajh aa gaya…

👉 tu ab **Type creation & transformation ka advanced level hit kar chuka hai 🔥🚀**