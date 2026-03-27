# 🧠 Abstract Classes & Interfaces – Easy Hinglish Notes

---

# 🎯 Module Overview

Ye module pura focus karta hai:

- 🏗️ Abstract Classes  
- 🔌 Interfaces  
- ⚙️ Static Members  

👉 Ye sab Object-Oriented Programming (OOP) ke core concepts hain TypeScript me.

---

# 📚 Is Module Me Kya Seekhenge?

## 🔹 1. Static Members

- Static properties & methods
- Real-world JS examples
- Class ke bina object create kiye bhi access ho sakte hain

---

## 🔹 2. Abstract Classes

- Abstract class kya hoti hai
- Normal class se difference
- Inheritance ke saath use
- Child classes ka behaviour

---

## 🔹 3. Advanced Abstract Concepts

- Shared methods  
- Abstract methods  
- Method overriding  
- Constructors in abstract classes  

---

## 🔹 4. Interfaces

- Interface introduction  
- Multiple interfaces  
- Generics  
- Access modifiers  
- Real-world usage  

👉 Interfaces future me har jagah use honge 🚀

---

# ⚠️ Important Note

👉 Ye module thoda heavy hai  
But agar ye samajh liya → OOP strong ho jayega 💪

---

# 🏗️ Abstract Class – Introduction

## 🤔 Abstract Class Kya Hoti Hai?

- Special type ki class hoti hai  
- Isme abstract members ho sakte hain  
- Ye direct use (instantiate) nahi hoti ❌  

---

## 🚫 Key Rule

👉 Abstract class ka object nahi bana sakte

❌ Galat:
const dept = new Department() // Error

👉 TypeScript error:
"Cannot create an instance of an abstract class"

---

## 🎯 Purpose of Abstract Class

- Base / parent class create karna  
- Child classes ko force karna rules follow karne ke liye  
- Structure define karna  

---

# 🧱 Example – Department Class

## 🏢 Parent Class

abstract class Department {
  protected constructor(protected name: string) {}
}

---

## 🔍 Samjho Isko

- abstract → class ko abstract banata hai  
- protected name → child classes access kar sakti hain  
- protected constructor → sirf child classes use kar sakti hain  

---

## 🧠 Important Point

👉 Abstract class ka constructor public hone ka koi sense nahi  
Kyuki uska object ban hi nahi sakta

---

# 👶 Child Classes (Inheritance)

## 🖥️ IT Department

class ITDepartment extends Department {}

## 🗂️ Admin Department

class AdminDepartment extends Department {}

👉 Dono parent class se inherit kar rahe hain

---

# 🌴 Real World Analogy

| Parent Class | Child Classes |
|-------------|--------------|
| Department | IT, Admin |

👉 Parent → Rules define karta hai  
👉 Child → Implementation deta hai  

---

# 🎯 Problem Statement

Har department ke paas:

- Apni holidays list hogi 📅  
- IT aur Admin ki holidays different hongi  

👉 Isliye holidays parent me define nahi kar sakte directly

---

# 💡 Solution – Abstract Property

## 🧾 Step 1: Custom Type

type Holidays = {
  date: Date
  reason: string
}[]

---

## 🧱 Step 2: Abstract Property

abstract class Department {
  protected constructor(protected name: string) {}
  protected abstract holidays: Holidays
}

---

# ⚠️ TypeScript Error Samjho

Agar child class me holidays nahi likha:

👉 Error aayega:

"Class does not implement inherited abstract member"

---

# ✅ Fix – Child Classes Me Implement Karo

## IT Department

class ITDepartment extends Department {
  protected holidays: Holidays = []
}

## Admin Department

class AdminDepartment extends Department {
  protected holidays: Holidays = []
}

---

# 🎯 Abstract Members Kya Karte Hain?

👉 Force karte hain:

- Har child class ko implementation dena padega  
- Structure follow karna padega  

---

# 🧠 Important Concept

| Concept | Meaning |
|--------|--------|
| Abstract Property | Sirf declare hoti hai |
| Implementation | Child class me hoti hai |
| Parent | Rules define karta hai |
| Child | Rules implement karta hai |

---

# 🔥 Key Takeaways

✔ Abstract class ka object nahi bana sakte  
✔ Sirf inheritance ke liye hoti hai  
✔ Abstract members = force implementation  
✔ Child classes must implement them  
✔ Structure maintain hota hai across app  

---

# 🚀 Next Kya Aayega?

Next lectures me:

- Abstract methods  
- Method overriding  
- Advanced inheritance  
- Real-world use cases  

---

# 🏁 Final Summary

👉 Abstract Class = Rulebook 📘  
👉 Child Class = Implementation 👨‍💻  

👉 Parent bolta hai:  
"Ye cheez honi chahiye"  

👉 Child bolta hai:  
"Ok, mai ise aise implement karta hu" 😎  

---

Agar ye concept samajh gaya na…  
toh OOP ka next level unlock ho gaya 🔓🔥