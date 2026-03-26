# 🚀 Accessors & Mutators (Setters Context) – Easy Hinglish Notes

---

# 🎯 Real World Problem Setup

Real-world app me class ko:

✔ Validation chahiye  
✔ Controlled data handling chahiye  
✔ Clean interface chahiye  

Normal public properties se ye sab handle karna messy ho sakta hai.

Isliye TypeScript deta hai:

👉 Accessors (Getters)  
👉 Mutators (Setters)  

Is video me focus: **Context + Setter (Mutator)**

---

# 👤 Example – Person Class

    class Person {
      constructor(
        public firstName: string,
        public lastName: string,
        public age: number
      ) {}
    }

Object create karte hain:

    const john = new Person("John", "Doe", 210)
    const mark = new Person("Mark", "Doe", -10)

Problem 😬

- 210 years age allowed
- -10 age bhi allowed

❌ No validation

---

# 🛠️ Constructor Me Validation (Old Way)

Constructor me condition daal sakte hain:

    if (age > 200 || age < 0) {
      throw new Error("Age must be between 0 and 200")
    }

Works ✔  
But:

❌ Constructor cluttered ho jata hai  
❌ Logic mixed ho jata hai  
❌ Clean design nahi lagta  

---

# 🤔 Dusra Problem – Full Name

Full name generate karna ho:

Method approach:

    public fullName(): string {
      return `${this.firstName} ${this.lastName}`
    }

Use karna padega:

    john.fullName()

But ideally:

👉 john.fullName ek property jaisa behave kare  
👉 Function jaisa call na karna pade  

Constructor me property bana ke bhi kar sakte hain  
But fir aur assignment logic add karna padega.

Messy again ❌

---

# 💡 Solution – Mutator (Setter)

Setter use karte hain jab:

✔ Value ko set karne se pehle process/validate karna ho  

---

# 🔥 Setter Syntax

    public set age(value: number) {
      if (value > 200 || value < 0) {
        throw new Error("Age must be between 0 and 200")
      }
      this._age = value
    }

Important:

- `set` keyword use hota hai  
- Name same hona chahiye property jaisa  
- Setter ek parameter leta hai  

---

# 🧠 Internal Private Variable

Age directly public nahi rakhenge.

Instead:

    private _age?: number

Convention:

- Underscore `_age`
- Usually private hota hai
- Outside class access nahi hota

---

# 🛠️ Updated Class Structure

    class Person {
      private _age?: number

      constructor(
        public firstName: string,
        public lastName: string
      ) {}

      public set age(value: number) {
        if (value > 200 || value < 0) {
          throw new Error("Age must be between 0 and 200")
        }
        this._age = value
      }
    }

Notice:

✔ Age constructor se hata diya  
✔ Setter handle karega setting  

---

# 🚀 Setter Use Kaise Kare?

    const john = new Person("John", "Doe")
    john.age = 45

Important:

👉 john.age = 45  
Function call nahi kar rahe  
Fir bhi setter execute hota hai  

TypeScript internally:

john.age = 45  
→ set age(45) call karta hai  

---

# ❌ Invalid Value Try Kare?

    john.age = 500

Error throw hoga:

"Age must be between 0 and 200"

Validation properly working 💪

---

# ⚠️ Important Behavior

Agar try kare:

    console.log(john.age)

Output:

undefined 😮

Kyun?

Kyuki:

✔ Setter hai  
❌ Getter nahi hai  

Setter sirf value set karta hai  
Value read karne ke liye getter chahiye.

---

# 🎯 Why Setter Useful?

✔ Validation separate ho gaya constructor se  
✔ Cleaner class design  
✔ Encapsulation improve hui  
✔ Controlled property update  

---

# 🧠 Big Picture Understanding

Direct public property:

❌ Koi bhi kuch bhi set kar dega  

Setter use karke:

✔ Har value check hogi  
✔ Rule enforce hoga  
✔ Data safe rahega  

---

# 🏆 Key Takeaways

✔ Setter = Mutator  
✔ Value set karne se pehle processing possible  
✔ Private internal variable use karte hain  
✔ Setter property jaisa behave karta hai (function jaisa call nahi karte)  
✔ Getter required hota hai value read karne ke liye  

---

Next step 🚀  
Getter (Accessor) seekhenge  
Jo property ko function jaisa logic dega  
But use karne me property jaisa feel dega 🔥