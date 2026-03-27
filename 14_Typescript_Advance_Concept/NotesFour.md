# 🧠 Totality + Discriminated Unions (Hinglish Notes)

---

# 📌 Totality kya hota hai?

👉 Totality ka matlab:

✔ Function **har possible input handle kare**  
✔ Runtime pe **error na aaye**

---

# 🧩 Total Function Definition

👉 Ek function **total** tab hota hai jab:

✔ Sab cases handle ho  
✔ Har input pe valid output mile  

---

# ❌ Partial Function Example

    const getLength = (value: string | number): number => {
      if (typeof value === "string") {
        return value.length
      }
    }

---

# 🚨 Problem

👉 Sirf string handle ho raha hai  
👉 number case missing hai  

❌ Result → unsafe function  

---

# ✅ Total Function Fix

    const getLength = (value: string | number): number => {
      if (typeof value === "string") {
        return value.length
      } else {
        return value.toString().length
      }
    }

---

# 🧠 Insight

✔ Har case handled → total function  
✔ TypeScript bhi happy  

---

# 🔥 Discriminated Unions

👉 Powerful pattern jo **totality achieve karne me help karta hai**

---

# 🧩 Concept

👉 Multiple types + common property = discriminated union  

---

# 🎯 Example: Shapes

## Circle

    type Circle = {
      kind: "circle"
      radius: number
    }

---

## Square

    type Square = {
      kind: "square"
      side: number
    }

---

## Rectangle

    type Rectangle = {
      kind: "rectangle"
      length: number
      breadth: number
    }

---

# 🔗 Union

    type Shape = Circle | Square | Rectangle

---

# 🧠 Key Idea

👉 `kind` = discriminator  
👉 Isse pata chalta hai kaunsa type hai  

---

# ⚙️ Area Function

    const getArea = (shape: Shape): number => {
      switch (shape.kind) {

        case "circle":
          return Math.PI * shape.radius * shape.radius

        case "square":
          return shape.side * shape.side

        case "rectangle":
          return shape.length * shape.breadth

      }
    }

---

# 🧠 Insight

✔ kind ke basis pe type narrow hota hai  
✔ Har case clearly handle hota hai  

---

# 🚨 Problem (Missing Case)

👉 Agar rectangle add karein but handle na karein:

❌ TypeScript error  

---

# 🛡️ Exhaustive Checking

👉 Ensure karta hai sab cases cover hue hain  

---

## Add Default Case

    default:
      const _exhaustiveCheck: never = shape
      throw new Error("Unhandled shape type")

---

# 🧠 Insight

✔ never = impossible state  
✔ Agar koi case miss hua → error  

---

# 💥 Example Error

👉 Agar rectangle missing hai:

❌ "Type 'Rectangle' is not assignable to type 'never'"

---

# ✅ Fix

👉 Rectangle case add karo → error gone  

---

# 🧠 Final Understanding

---

## 🔹 Totality

✔ Har input handled  
✔ Safe function  

---

## 🔹 Discriminated Union

✔ Common property (kind)  
✔ Easy type narrowing  

---

## 🔹 Exhaustive Check

✔ Ensure no case is missed  
✔ Future-proof code  

---

# 🚀 Final Insight

👉 TypeScript ka real power:

✔ Type safety  
✔ Predictable behavior  
✔ Zero runtime surprises  

---

Agar yeh samajh gaya na…

👉 tu TypeScript ka **real-world pattern level concept crack kar chuka hai 🔥**