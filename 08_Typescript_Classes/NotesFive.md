# 🚀 TypeScript Inheritance + super() – Easy Hinglish Notes

---

# 🧬 Inheritance Kya Hota Hai?

Inheritance ka matlab:

👉 Ek class dusri class ke properties aur methods inherit karti hai.

Terminology:

- 👨 Parent Class → Jisse inherit kiya jaata hai  
- 👶 Child Class → Jo inherit karti hai  

Important Rule in TypeScript:

❌ Multiple inheritance nahi hota  
✔ Ek class sirf ek hi class ko extend kar sakti hai  

---

# 🏗️ Real Example – User & Admin

Hamare paas already:

    class User {
      name: string
      email: string
      lastName?: string

      constructor(name: string, email: string, lastName?: string) {
        this.name = name
        this.email = email
        this.lastName = lastName
      }
    }

Ab suppose application me different types ke users hain:

- Normal User  
- Admin User  

Admin ko bhi:

✔ name chahiye  
✔ email chahiye  
✔ lastName chahiye  

Plus ek extra property bhi ho sakti hai.

---

# ❌ Galat Approach

Admin class bana kar saari properties copy-paste kar dena:

    class Admin {
      name: string
      email: string
      ...
    }

Problem:

- Code repetition ❌
- Future bug risk ❌
- Maintain karna mushkil ❌

---

# ✅ Correct Approach – extends Keyword

Inheritance create karne ke liye:

    class Admin extends User {
    }

`extends` ka matlab:

👉 Admin class, User class ko inherit karegi  
👉 User ke saare properties & methods Admin me aa jayenge  

No copy paste needed 🔥

---

# ➕ Admin Ki Apni Extra Property

Example:

    class Admin extends User {
      isAdmin: boolean = true
    }

Ab:

- Admin ke paas User ke saare properties hain  
- Plus ek extra `isAdmin` property bhi hai  

---

# 🧪 Object Create Karna

    const user = new User("John", "john@email.com")
    const admin = new Admin("Mark", "mark@email.com")

Console me:

- user → instance of User  
- admin → instance of Admin  

Admin ke paas:

✔ name  
✔ email  
✔ lastName  
✔ isAdmin  

Inheritance power 💪

---

# ❗ Constructor Rules in Inheritance

Agar child class me constructor add karte ho:

    class Admin extends User {
      usersReporting: number

      constructor(usersReporting: number) {
        this.usersReporting = usersReporting
      }
    }

TypeScript error dega:

❌ Constructors for derived classes must contain a super call

---

# 🔥 super() Kya Hota Hai?

`super()`:

👉 Parent class ka constructor call karta hai  

Rule:

✔ Child constructor me pehle `super()` call karna mandatory hai  

Kyun?

Kyuki:

- Parent class ke fields pehle initialize hone chahiye  
- Tabhi child properly kaam karega  

---

# 🛠️ Proper Admin Constructor

    class Admin extends User {
      usersReporting: number

      constructor(
        name: string,
        email: string,
        usersReporting: number,
        lastName?: string
      ) {
        super(name, email, lastName)
        this.usersReporting = usersReporting
      }
    }

Yaha kya ho raha hai:

1️⃣ super(name, email, lastName)  
   → Parent constructor call ho raha hai  

2️⃣ this.usersReporting assign ho raha hai  

---

# 📌 Parameter Order Rule

Important:

- Mandatory parameters pehle  
- Optional parameters baad me  

Isliye:

name, email, usersReporting (mandatory)  
lastName? (optional)

---

# 🧠 super() Smart Hai

super() ko bas:

✔ Correct number of arguments chahiye  

Ye care nahi karta:

- Value kaha se aa rahi hai  
- Literal hai ya variable  

Example:

    super("John", "admin@email.com", "Admin")

Ye bhi valid hai 😄

---

# 🧪 Final Usage

    const admin = new Admin(
      "Mark",
      "mark@email.com",
      11
    )

Result:

- name = Mark  
- email = mark@email.com  
- usersReporting = 11  
- isAdmin = true  

---

# 🎯 Key Takeaways

✔ Inheritance = Code reuse  
✔ extends keyword use hota hai  
✔ Child class sirf ek parent extend kar sakti hai  
✔ Child constructor me super() mandatory hai  
✔ super() parent constructor call karta hai  
✔ Pehle super(), phir this use kar sakte ho  

---

# 🧠 Final Understanding

User = Base blueprint  

Admin = Specialized blueprint  

Inheritance = Base blueprint ko reuse karna  

super() = Parent ko activate karna before child  

Ye concept large applications me bohot powerful hota hai 🚀