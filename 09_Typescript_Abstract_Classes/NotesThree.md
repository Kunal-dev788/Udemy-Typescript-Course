# 🧠 Abstract Methods & Method Overriding – Easy Hinglish Notes

---

# 🎯 Goal (Is Lecture Ka)

👉 Console.log pura object print karne ke bajaye  
👉 Proper formatted holidays print karna  

---

# 🧱 Step 1 – PrintHolidays Method (Parent Class)

👉 Method parent class me banayenge taaki sab child classes use kar sake

---

## 🧾 Implementation

    printHolidays() {
      if (this.holidays.length === 0) {
        console.log("No holidays available")
        return
      }

      console.log("Here is the list of holidays:")

      this.holidays.forEach((holiday, index) => {
        console.log(`${index + 1}. ${holiday.reason} - ${holiday.date}`)
      })
    }

---

# 🔍 Step-by-Step Samjho

## 1️⃣ Check Empty

    if (this.holidays.length === 0)

👉 Agar holidays nahi hain → message print

---

## 2️⃣ Heading Print

    console.log("Here is the list of holidays:")

---

## 3️⃣ Loop

    this.holidays.forEach((holiday, index) => {})

👉 Har holiday iterate hota hai

---

## 4️⃣ Formatted Output

    ${index + 1}. reason - date

👉 Clean aur readable output milta hai

---

# 🧠 Key Idea

✔ Parent class method bana raha hai  
✔ Child classes automatically inherit kar rahi hain  

---

# 🧪 Usage

    itDept.printHolidays()
    adminDept.printHolidays()

---

# 🎯 Result

✔ Proper formatted holidays print ho rahe hain  
✔ Object dump karne ki zarurat nahi  

---

# 🔁 Method Overriding – Introduction

## 🤔 Problem

👉 Har department ka output thoda different chahiye  

Example:

❌ "Here is the list of holidays"  
✅ "Holidays for IT Department"

---

# 💡 Solution – Method Overriding

👉 Child class parent method ko override kar sakti hai  

---

# ⚠️ Rule

✔ Same method name hona chahiye  
✔ Same parameters hone chahiye  

---

# 🧱 Override Example (IT Department)

    class ITDepartment extends Department {
      printHolidays() {
        if (this.holidays.length === 0) {
          console.log("No holidays available")
          return
        }

        console.log(`Holidays for ${this.name}`)

        this.holidays.forEach((holiday, index) => {
          console.log(`${index + 1}. ${holiday.reason} - ${holiday.date}`)
        })
      }
    }

---

# 🧱 Override Example (Admin Department)

    class AdminDepartment extends Department {
      printHolidays() {
        if (this.holidays.length === 0) {
          console.log("No holidays available")
          return
        }

        console.log(`Holidays for ${this.name}`)

        this.holidays.forEach((holiday, index) => {
          console.log(`${index + 1}. ${holiday.reason} - ${holiday.date}`)
        })
      }
    }

---

# 🎯 Result

✔ IT → apna naam print karega  
✔ Admin → apna naam print karega  

👉 Same method, different behavior 🔥

---

# 🧠 Important Concept

| Concept | Meaning |
|--------|--------|
| Overriding | Parent method ko replace karna |
| Signature | Same rehna chahiye |
| Behavior | Change ho sakta hai |

---

# ⚠️ Problem (Code Duplication)

👉 Dono child classes me same code repeat ho raha hai 😬  

---

# 💡 Solution – Abstract Method

👉 Parent class me method ka sirf structure define karenge  
👉 Implementation child class karegi  

---

# 🧱 Convert to Abstract Method

## ❌ Remove Implementation

👉 Parent se pura method body hata do

---

## ✅ Abstract Method

    abstract printHolidays(): void

---

# 🧠 Samjho

- No body ❌  
- Sirf signature ✔  
- Return type → void  

---

# 🎯 Abstract Method Meaning

👉 Parent bol raha hai:

"Har child class me ye method hona chahiye"

---

# ⚠️ Error Demo

Agar child class me implement nahi kiya:

👉 TypeScript error:

"Class does not implement abstract member"

---

# 🔥 Force Implementation

✔ Har child class ko method likhna padega  
✔ Same signature follow karna padega  

---

# 🧠 Advanced Insight

👉 Abstract method = Contract 📜  

👉 Developer ko guide karta hai:

- Kya method banana hai  
- Kaise signature hona chahiye  

---

# 🏁 Final Summary

👉 Parent class:

- Abstract property → holidays  
- Abstract method → printHolidays  

👉 Child class:

- holidays implement karegi  
- printHolidays override karegi  

---

# 💡 Final Insight

👉 Abstract + Override = Clean Architecture 🔥  

✔ Flexibility  
✔ Control  
✔ No unnecessary duplication  

---

Agar ye concept clear ho gaya…  
toh tu proper scalable code likhne ke level pe aa gaya 🚀