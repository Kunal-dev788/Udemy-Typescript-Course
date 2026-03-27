# 🧠 Interfaces + Classes (Advanced) – Easy Hinglish Notes

---

# 🔁 Recap

👉 Car class banayi thi  
👉 Automobile interface implement kiya tha  

---

# 🧱 New Example – Truck Class

👉 Same interface use karke new class bana sakte hain  

---

## 🚚 Truck Class

    class Truck implements Automobile<string, AutomobileBrands, AutomobileColors> {
      public type: string = "truck"

      constructor(
        public brand: AutomobileBrands,
        public colors: AutomobileColors[],
        public description: string
      ) {}
    }

---

# 🧠 Insight

👉 Same interface  
👉 Different implementation  

✔ Car → type = "car"  
✔ Truck → type = "truck"  

---

# 🧪 Toyota Truck Example

    const toyotaTruck = new Truck(
      AutomobileBrands.TOYOTA,
      [AutomobileColors.BLACK, AutomobileColors.BLUE],
      "This is a Toyota truck"
    )

---

# 🎯 Result

✔ Object create ho gaya  
✔ Interface contract follow hua  

---

# 🔥 Key Concept

👉 Interface = blueprint  
👉 Class = implementation  

---

# 🧬 Multiple Interfaces in Class

## 🤔 Problem

👉 Truck ek commercial vehicle bhi hai  

👉 Extra properties chahiye:

- capacity  
- license renewal date  

---

# 🧱 Commercial Vehicle Interface

    interface CommercialVehicle {
      capacity: string
      licenseRenewalDate: Date
    }

---

# 🧱 Truck Implements Multiple Interfaces

    class Truck implements 
      Automobile<string, AutomobileBrands, AutomobileColors>,
      CommercialVehicle {

      public type: string = "truck"

      constructor(
        public brand: AutomobileBrands,
        public colors: AutomobileColors[],
        public description: string,
        public capacity: string,
        public licenseRenewalDate: Date
      ) {}
    }

---

# 🧠 Samjho

👉 Truck ab:

✔ Automobile bhi hai  
✔ CommercialVehicle bhi hai  

---

# ⚠️ Important

👉 Missing property → TypeScript error  

✔ Force karta hai implement karne ko  

---

# 🧪 Updated Object

    const toyotaTruck = new Truck(
      AutomobileBrands.TOYOTA,
      [AutomobileColors.BLACK],
      "This is a Toyota truck",
      "15 tons",
      new Date()
    )

---

# 🎯 Result

✔ Automobile properties  
✔ CommercialVehicle properties  

---

# 🔥 Big Concept

👉 Class multiple interfaces implement kar sakti hai  

✔ No limit 🚀  

---

# 🚫 Important Rule

👉 Class multiple classes extend nahi kar sakti ❌  

---

## ❌ Wrong

    class RegisteredUser extends User, Password {}

👉 Error: Only one class allowed  

---

# ✅ Solution

👉 Interfaces use karo  

✔ Multiple inheritance possible  

---

# 🧠 Comparison

| Feature | Class | Interface |
|--------|------|----------|
| Extend | 1 only ❌ | Multiple ✔ |
| Implement | — | Unlimited ✔ |

---

# 🔐 Access Modifiers + Interfaces

## 🤔 Important Rule

👉 Interface = public contract  

---

# ❌ Wrong Example

    class Truck implements Automobile {
      private brand: AutomobileBrands
    }

👉 Error aayega  

---

# 🧠 Reason

👉 Interface object structure define karta hai  
👉 Object me private/protected nahi hota  

---

# ✅ Correct

    public brand: AutomobileBrands

---

# 🧠 Important Insight

✔ Interface properties → always public  
✔ Class extra private members rakh sakti hai  

---

# 🧪 Example

    class Truck {
      private driverName: string = "John"
    }

✔ Allowed ✅  

---

# 🎯 Final Concepts

👉 Interface:

✔ Public structure define karta hai  

---

👉 Class:

✔ Interface follow karta hai  
✔ Extra private/protected members rakh sakta hai  

---

# 🏁 Final Summary

👉 Interface = Contract 📜  
👉 Class = Implementation 🏗️  

---

👉 Multiple Interfaces:

✔ Allowed  
✔ Powerful  

---

👉 Multiple Class Inheritance:

❌ Not allowed  

---

👉 Access Modifiers:

✔ Interface → public only  
✔ Class → flexible  

---

# 💡 Final Insight

👉 Interfaces = scalability ka backbone 🔥  

✔ Clean architecture  
✔ Reusable components  
✔ Strong typing  

---

Agar ye part samajh gaya…  
toh tu TypeScript OOP ka **pro level touch kar raha hai 🚀🔥**