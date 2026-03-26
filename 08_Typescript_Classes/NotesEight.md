# 🎯 Which Access Modifier Use Kare? + Method Overriding + Shorthand Constructor (Easy Hinglish Notes)

---

# 🔐 Which Access Modifier Use Kare?

Ye sabse common doubt hota hai 🤔

Answer simple hai:

### 🧠 Start Conservative

1️⃣ Pehle socho → Kya ye property bahar se access karni zaroori hai?  
   ❌ Nahi? → Make it **private**

2️⃣ Kya child class ko chahiye?  
   ✔ Haan? → Make it **protected**

3️⃣ Kya final object (instance) me access chahiye?  
   ✔ Haan? → Make it **public**

---

## 🔥 Recommended Thought Process

Private → Default thinking 🔒  
Protected → Jab inheritance me need ho 🧬  
Public → Jab external access required ho 🚀  

Rule:

👉 Expose only what is necessary  
👉 Baaki sab private rakho  

---

# 🔁 Method Overriding in Child Class

Inheritance me:

Child class parent ke methods inherit karti hai.

Lekin:

👉 Child class method ko override bhi kar sakti hai.

---

## 🛠️ Example – Parent Class

    class User {
      public name: string

      constructor(name: string) {
        this.name = name
      }

      public greet(): string {
        return "Hello " + this.name
      }
    }

---

## 👶 Child Class – Override greet()

    class Admin extends User {
      public greet(): string {
        return "Hello " + this.name + " I am Admin"
      }
    }

---

# ⚠️ Important Rule – Same Method Signature

Override karte waqt:

✔ Same method name  
✔ Same parameters  
✔ Same return type  

Agar mismatch hua:

❌ TypeScript error dega

Example mistake:

    greet(number: number): string

❌ Allowed nahi hoga

Signature same rehni chahiye.

---

# 🧪 Result

    const user = new User("John")
    const admin = new Admin("Mark")

    user.greet()   → Hello John
    admin.greet()  → Hello Mark I am Admin

Same method name  
Different behavior  
Ye hota hai overriding 🔥

---

# 🚀 Shorthand Constructor Syntax

Ab ek powerful TypeScript feature.

Normal way (3-step process):

1️⃣ Property declare  
2️⃣ Constructor me parameter lo  
3️⃣ this.property = parameter assign karo  

Example:

    class User {
      public name: string

      constructor(name: string) {
        this.name = name
      }
    }

Ye thoda tedious lagta hai.

---

# ⚡ Shorthand Syntax

Agar constructor parameter ke aage access modifier laga do:

    class User {
      constructor(public name: string) {
      }
    }

Ye ek line:

✔ Property declare karega  
✔ Parameter accept karega  
✔ Automatically assign karega  

3 kaam ek saath 🎉

---

# 🔥 Multiple Properties Example

    class User {
      constructor(
        public name: string,
        public readonly email: string,
        private phone: number,
        public lastName?: string
      ) {
      }
    }

Yaha:

- name → public property  
- email → public + readonly  
- phone → private  
- lastName → optional  

Sab automatically create & assign ho jayenge.

---

# 👶 Child Class Me Shorthand

    class Admin extends User {
      constructor(
        name: string,
        email: string,
        phone: number,
        public usersReporting: number,
        lastName?: string
      ) {
        super(name, email, phone, lastName)
      }
    }

Yaha:

✔ usersReporting automatically create + assign ho gaya  
✔ super() parent constructor call kar raha hai  

---

# 📌 Kab Shorthand Use Kare?

Agar:

✔ Property constructor se hi initialize hoti hai  
✔ Parameter required hai instantiation ke time  

To shorthand best hai.

Agar:

✔ Property static hai  
✔ Ya constructor se related nahi hai  

To normal declaration use karo.

Example:

    public isAdmin: boolean = true

Ye constructor me lene ki zarurat nahi.

---

# 🏆 Final Takeaways

🔐 Access Modifier Rule  
Private → Default  
Protected → Child ko chahiye  
Public → External access chahiye  

🔁 Overriding  
Same signature maintain karna mandatory  

⚡ Shorthand Constructor  
Access modifier + parameter = auto property + auto assignment  

TypeScript ka ye feature code ko:

✔ Clean banata hai  
✔ Short banata hai  
✔ Maintainable banata hai  

---

Ab tum TypeScript classes me:

✔ Proper encapsulation  
✔ Inheritance  
✔ Method overriding  
✔ Clean constructor pattern  

Confidently use kar sakte ho 🚀🔥