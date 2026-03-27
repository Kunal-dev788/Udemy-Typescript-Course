# 🧠 Abstract Classes Continued – Easy Hinglish Notes

---

# 🔁 Recap (Previous Lecture)

- Abstract class → Department  
- Child classes → ITDepartment, AdminDepartment  
- Abstract property → holidays  

👉 Har child class me holidays property implement ki gayi hai

---

# 🎯 Problem

Abhi tak:

❌ Holidays add karne ka koi proper method nahi hai  
❌ Har class ko alag method likhna padega  

👉 Code duplication ho jayega

---

# 💡 Solution – Shared Method (Inheritance Power)

👉 Parent class me ek method bana dete hain  
👉 Sab child classes automatically inherit kar lenge  

---

# 🧱 AddHolidays Method (Parent Class)

    addHolidays(holidays: Holidays) {
      if (Array.isArray(holidays)) {
        for (const holiday of holidays) {
          this.holidays.push(holiday)
        }
      }
    }

---

# 🔍 Step-by-Step Samjho

## 1️⃣ Parameter

- holidays → type Holidays (array of objects)

---

## 2️⃣ Validation

    Array.isArray(holidays)

👉 Check karta hai ki input array hai ya nahi

---

## 3️⃣ Loop

    for (const holiday of holidays)

👉 Har holiday ko loop karega

---

## 4️⃣ Push Data

    this.holidays.push(holiday)

👉 Parent ke abstract property me data push ho raha hai

---

# 🧠 Important Concept

👉 Parent class me holidays implement nahi hai (sirf abstract hai)

Phir bhi ye kaam kar raha hai kyunki:

✔ TypeScript jaanta hai ki child classes me ye property zaroor hogi  
✔ Isliye safe hai use karna  

---

# 🔥 Key Takeaway

✔ Abstract property → guarantee deta hai  
✔ Child class → implementation deta hai  
✔ Parent method → directly use kar sakta hai  

---

# 🚫 Abstract Class Reminder

👉 Abstract class kabhi instantiate nahi hoti  
👉 Sirf inherit hoti hai  

---

# 🏗️ Protected Constructor – Deep Understanding

## 🤔 Protected Constructor Kyu?

    protected constructor(protected name: string) {}

👉 Sirf child classes access kar sakti hain  
👉 Bahar se object create nahi kar sakte

---

# ❌ Problem with Public Constructor

Agar constructor public ho:

    const it = new ITDepartment("IT Department")

👉 Ye allowed ho jayega  

---

## ⚠️ Issue

    const accounts = new ITDepartment("Accounts Department")

👉 Galat cheez ho rahi hai 😬  
👉 ITDepartment se Accounts department bana diya  

---

# 💡 Solution – Protected Constructor

👉 Parent constructor protected rakho  

✔ Bahar se access band  
✔ Sirf child class control karegi naming  

---

# 🧱 Child Class Constructor + super()

## IT Department

    class ITDepartment extends Department {
      constructor() {
        super("IT Department")
      }
    }

---

## Admin Department

    class AdminDepartment extends Department {
      constructor() {
        super("Admin Department")
      }
    }

---

# 🧠 super() Kya Karta Hai?

👉 Parent constructor ko call karta hai  
👉 Required values pass karta hai  

---

# 🔒 Benefit

✔ Name fixed ho gaya  
✔ Galat naming possible nahi  
✔ Control child class ke paas  

---

# 🎯 Next – Holidays Add Karna

## 🧾 IT Holidays

    const itHolidays: Holidays = [
      { date: new Date(), reason: "Christmas" },
      { date: new Date(), reason: "IT Department Day" }
    ]

---

## 🧾 Admin Holidays

    const adminHolidays: Holidays = [
      { date: new Date(), reason: "Christmas" },
      { date: new Date(), reason: "Admin Department Day" }
    ]

---

# 🏗️ Instances Create Karna

    const itDept = new ITDepartment()
    const adminDept = new AdminDepartment()

---

# ➕ Holidays Add Karna

    itDept.addHolidays(itHolidays)
    adminDept.addHolidays(adminHolidays)

---

# 🖥️ Output Check

    console.log(itDept)
    console.log(adminDept)

---

# 🎯 Result

✔ Dono departments ke paas:

- Correct name  
- Apni holidays list  

✔ IT aur Admin ki holidays alag hain  

---

# 🧠 Important Observations

- addHolidays method → parent se aaya  
- holidays data → child me store ho raha hai  
- abstraction + inheritance perfectly work kar rahe hain  

---

# 🔥 Refactor Tip

👉 Naming clean rakho:

- adminDepart ❌  
- adminDepartment ✅  
- adminHolidays ✅  

---

# 🚀 Next Kya Aayega?

Next lecture me:

👉 Holidays print karne ka method banayenge  

---

# 🏁 Final Summary

👉 Parent class:

- Rules define karti hai  
- Shared methods deti hai  

👉 Child class:

- Data implement karti hai  
- Specific behavior deti hai  

---

# 💡 Final Insight

👉 Abstract + Inheritance combo = powerful architecture 💪  

👉 Code reuse + control + scalability 🔥  
