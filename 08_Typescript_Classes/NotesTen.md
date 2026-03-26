# 🚀 Getters (Accessors) + Static Members – Easy Hinglish Notes

---

# 🔁 Recap – Setter Problem

Humne setter banaya tha:

    set age(value: number)

Setter se:

✔ Validation ho raha tha  
✔ Private `_age` set ho raha tha  

But problem 😬

    console.log(john.age)

Undefined mil raha tha.

Kyuki:

✔ Setter tha  
❌ Getter nahi tha  

Setter sirf value set karta hai.  
Value read karne ke liye getter chahiye.

---

# 🔍 Getter (Accessor) Kya Hota Hai?

Getter ek special function hota hai:

👉 Jo property ko read karne ke liye use hota hai  
👉 Function jaisa likhte hain  
👉 Property jaisa access karte hain  

---

# 🛠️ Getter Syntax

    public get age(): number {
      if (this._age === undefined) {
        throw new Error("Age property not defined")
      }
      return this._age
    }

Important:

✔ `get` keyword use hota hai  
✔ Same property name hona chahiye  
✔ Koi parameter nahi hota  
✔ Return type define karte hain  

---

# 🧠 Why Validation in Getter?

Kyuki `_age` optional hai:

    private _age?: number

Agar kisi ne age set hi nahi ki:

    const john = new Person("John", "Doe")

To:

    john.age

Error throw hona chahiye.

Getter validation allow karta hai clean handling.

---

# 🚀 Getter Use Kaise Kare?

Setter:

    john.age = 45

Getter:

    console.log(john.age)

Notice:

❌ john.age() nahi  
✔ john.age  

Property jaisa behave karta hai  
But internally function run hota hai 🔥

---

# 🧩 Setter + Getter Together

✔ Setter → value set kare  
✔ Getter → value read kare  

Dono milke controlled access provide karte hain.

---

# 💡 Full Name Problem Solve with Getter

Pehle method tha:

    fullName() {
      return `${this.firstName} ${this.lastName}`
    }

Use karte the:

    john.fullName()

But ideally:

    john.fullName

Property jaisa feel hona chahiye.

Solution:

    public get fullName(): string {
      return `${this.firstName} ${this.lastName}`
    }

Ab:

    console.log(john.fullName)

✔ Function invoke nahi karna  
✔ Property jaisa behave karta hai  
✔ Logic internally process ho raha hai  

---

# 🎯 Important Understanding

Getter:

✔ Computed property create karta hai  
✔ Class me actual property defined nahi hoti  
✔ Fir bhi property jaisa accessible hoti hai  

Encapsulation + Clean API design 💪

---

# 📌 Getter/Setter Rules

✔ Setter → exactly 1 parameter  
✔ Getter → no parameters  
✔ Same property name hona chahiye  
✔ Often private variable ke saath use hote hain  
✔ But public properties ke saath bhi use kar sakte hain  

---

# 🚀 Static Members – New Concept

Ab ek naya concept: **static members**

Till now:

Properties & methods → instance ke through access hote the.

Static ka matlab:

👉 Member class ka hota hai  
👉 Instance ka nahi hota  

---

# 🛠️ Example – Counter Class

    class Counter {
      static count: number = 0

      static increment() {
        Counter.count++
      }
    }

Yaha:

✔ count → static property  
✔ increment → static method  

---

# 🧠 Static Member Ka Behavior

Use karne ke liye:

    Counter.increment()
    console.log(Counter.count)

Output:

1

Notice:

❌ new Counter() ki zarurat nahi  
✔ Direct class ke through access  

---

# ❌ Instance Se Access?

    const counter = new Counter()
    console.log(counter.count)

Error:

Property does not exist on instance

Kyuki:

✔ Static member class ka hai  
❌ Instance ka nahi  

---

# 🔥 Static Inside Method

Static method me:

❌ this.count (avoid confusion)  
✔ Counter.count (clear reference)

Better readability ke liye class name use karo.

---

# 🎯 Static Members Kab Use Kare?

✔ Utility functions  
✔ Global counters  
✔ Shared configuration  
✔ Methods jo instance-specific nahi hain  

Example:

- Math-like utilities  
- Global config  
- Logging helper  

---

# 🧠 Final Big Picture

Getter → Controlled read  
Setter → Controlled write  
Static → Class-level member  

Getter/Setter = Encapsulation  
Static = Shared behavior  

---

# 🏆 Final Takeaways

✔ Setter validation ke liye  
✔ Getter computed property ke liye  
✔ Getter/Setter property jaisa behave karte hain  
✔ Static members instance ke bina accessible hote hain  
✔ Static members class ke hote hain  

TypeScript ab sirf simple class nahi raha 😄  
Ab tum proper OOP patterns use kar rahe ho 🚀🔥