# 🧠 Interface Inheritance + Multiple Inheritance + Generics – Easy Hinglish Notes

---

# 🔁 Recap

👉 Interface = Contract  
👉 Structure define karta hai  

---

# 🧬 Interface Inheritance

## 🤔 Problem

👉 Hume kuch users ke liye extra property (address) chahiye  
👉 But sab users ke liye nahi  

---

## ❌ Wrong Approach (Duplication)

    interface User {
      name: string
      email: string
      phone: string
    }

    interface UserWithAddress {
      name: string
      email: string
      phone: string
      address: string
    }

---

# ⚠️ Issue

❌ Code repeat ho raha hai  
❌ Maintain karna mushkil  

---

# 💡 Solution – extends

👉 Interface inheritance use karo  

---

## ✅ Correct Approach

    interface User {
      name: string
      email: string
      phone: string
      gender: string
    }

    interface UserWithAddress extends User {
      address: string
    }

---

# 🧠 Samjho

👉 UserWithAddress me automatically aayega:

- name  
- email  
- phone  
- gender  
- + address  

---

# 🧪 Example Objects

## 👤 Normal User

    const user: User = {
      name: "Kunal",
      email: "kunal@email.com",
      phone: "123456",
      gender: "male"
    }

---

## 🏠 User With Address

    const userWithAddress: UserWithAddress = {
      name: "Kunal",
      email: "kunal@email.com",
      phone: "123456",
      gender: "male",
      address: "Delhi"
    }

---

# 🎯 Key Insight

✔ extends → reuse  
✔ No duplication  
✔ Clean code  

---

# 🧬 Multiple Interface Inheritance

## 🤔 Problem

👉 Admin user ko chahiye:

- Basic user details  
- Role  
- Permissions  

---

# 🧱 Step 1 – Roles Enum

    enum Roles {
      ADMIN,
      AUTHOR,
      EDITOR
    }

---

# 🧱 Step 2 – Role Interface

    interface Role {
      role: Roles
    }

---

# 🧱 Step 3 – Permissions Enum

    enum PermissionsList {
      READ,
      WRITE,
      EXECUTE
    }

---

# 🧱 Step 4 – Permissions Interface

    interface UserPermissions {
      permissions: PermissionsList[]
    }

---

# 🧱 Step 5 – Admin Interface

    interface AdminUser extends User, Role, UserPermissions {
      numberOfUsersReporting: number
    }

---

# 🧠 Samjho

👉 AdminUser inherit karta hai:

- User → basic info  
- Role → role  
- UserPermissions → permissions  
- + apni property  

---

# 🧪 Admin Object

    const admin: AdminUser = {
      name: "Rob",
      email: "rob@email.com",
      phone: "999999",
      gender: "male",
      role: Roles.ADMIN,
      permissions: [
        PermissionsList.READ,
        PermissionsList.WRITE,
        PermissionsList.EXECUTE
      ],
      numberOfUsersReporting: 5
    }

---

# 🎯 Result

✔ All properties required  
✔ TypeScript ensures correctness  

---

# ⚠️ Error Case

👉 Agar koi property missing:

❌ TypeScript error  

---

# 🧠 Key Concept

👉 Interface = strict contract  

✔ Missing → error  
✔ Wrong type → error  

---

# 🔥 Biggest Advantage

👉 Multiple inheritance allowed  

✔ Ek interface → multiple extend kar sakta hai  
✔ No limit  

---

# 🧬 Interfaces + Generics (Intro)

## 🤔 Problem

👉 Interface bohot generic ho sakta hai  

---

## 🧱 Example

    interface Automobile {
      type: string
      brand: string
      colors: string[]
      description: string
    }

---

# ⚠️ Issue

❌ type me kuch bhi string aa sakta hai  
❌ brand me kuch bhi likh sakte ho  

👉 No strict control  

---

# 💡 Need

👉 Strict typing + flexibility  

---

# 🧠 Solution

👉 Generics use karenge (next lecture)  

---

# 🎯 Goal

👉 Define karna:

- type = specific values (car, bike etc)  
- brand = specific brands  
- colors = valid colors  

---

# 🏁 Final Summary

👉 Interface Inheritance:

✔ extends keyword  
✔ code reuse  

---

👉 Multiple Inheritance:

✔ multiple interfaces combine kar sakte hain  

---

👉 Generics (intro):

✔ flexibility + strict typing  

---

# 💡 Final Insight

👉 Interfaces = scalable system ka base 🏗️  

✔ Clean architecture  
✔ Reusable code  
✔ Strong type safety  

---

Agar ye samajh gaya…  
toh tu enterprise level code likhne ke zone me enter kar gaya 🚀🔥