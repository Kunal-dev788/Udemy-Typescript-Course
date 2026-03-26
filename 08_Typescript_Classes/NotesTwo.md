# 🚀 TypeScript Class – Complete Easy Hinglish Notes

---

# 🏗️ Class Kya Hoti Hai?

- `class` ek blueprint hoti hai 📐  
- Blueprint ka kaam hota hai objects banana  
- Class khud object nahi hoti  
- Class se jo object banta hai usko instance kehte hain  

Simple samjho:  
Class = Design  
Object = Us design se bana hua real cheez  

---

# 👤 User Class Banana

Hume ek User class banani hai jisme:

- 🧑 name  
- 📧 email  
- 🙋 greet() method  

---

# 📝 Basic Class Syntax

    class User {
    }

- class keyword use karte hain  
- Fir class ka naam likhte hain (PascalCase best practice ✅)

---

# 🏷️ Fields vs Properties

- Object ke andar → properties  
- Class ke andar → fields  
- Dono milke → members of class  

Example:

    class User {
      name = "John"
      email = "john@email.com"
    }

Yaha:

- name → field  
- email → field  

Abhi ye values static hain (har baar same rahengi)

---

# 🙋 Method Kaise Add Kare?

Class ke andar method add karte waqt:

- function keyword use nahi karte ❌  
- Direct method likhte hain ✅  

    class User {
      name = "John"
      email = "john@email.com"

      greet() {
        return "Hello John"
      }
    }

greet() ek method hai jo "Hello John" return karega.

---

# 📦 Object Ka Shape Kaisa Hoga?

Is class se jo object banega usme hoga:

- name = "John"  
- email = "john@email.com"  
- greet() method  

---

# 🆕 Class Se Object Kaise Banate Hain?

Is process ko kehte hain:

👉 Instantiating a class  

Object ko kehte hain:

👉 Instance of class  

Example:

    const user = new User()

Important:

- new keyword use karna mandatory hai  
- Fir class ka naam call karte hain  

---

# 🖥️ Console Me Print Karna

    console.log(user)

Output me dikhega:

- name
- email

Note:  
greet() direct object me nahi dikhega, wo prototype me hota hai.

Lekin fir bhi hum use call kar sakte hain:

    user.greet()

Output:
Hello John

---

# ⚠️ Problem – Class Static Hai

Agar hum doosra user banaye:

    const user2 = new User()

Toh:

- user aur user2 dono same honge  
- Dono ka name = John  
- Dono ka email = john@email.com  

Yani class dynamic nahi hai.

Har baar same user create ho raha hai ❌

---

# 🔥 Solution – Constructor Function

Dynamic values dene ke liye use karte hain:

👉 constructor()

Constructor ek special function hota hai:

- Ye automatically run hota hai jab new instance banta hai  
- Ye class ke andar hi hota hai  
- constructor ek reserved keyword hai  

Example:

    class User {
      name = "John"
      email = "john@email.com"

      constructor(name: string, email: string) {
        console.log(name)
        console.log(email)
      }

      greet() {
        return "Hello John"
      }
    }

---

# ❗ TypeScript Error Kyu Aata Hai?

Agar constructor me parameters hain:

    constructor(name: string, email: string)

Toh jab hum object banayenge:

    const user = new User()

TypeScript bolega:

Expected 2 arguments but got 0 ❌

Kyuki constructor 2 arguments expect kar raha hai.

---

# ✅ Sahi Tarika

    const user1 = new User("John", "john@email.com")
    const user2 = new User("Mark", "mark@email.com")

Ab constructor run hoga har baar.

Pehle print hoga:
John  
john@email.com  

Phir print hoga:
Mark  
mark@email.com  

---

# 📌 Important Samajhne Wali Baat

Abhi tak:

- Class ke andar name aur email still static hain  
- Constructor sirf parameters receive kar raha hai  
- Abhi tak humne un parameters ko fields me assign nahi kiya  

Isliye agar:

    console.log(user1)

Toh still dikhega:

- name = "John"
- email = "john@email.com"

Kyuki fields update nahi hui hain.

---

# 🎯 Next Step Kya Hoga?

Next concept me hum seekhenge:

- Constructor ke andar aaye hue parameters  
- Unhe kaise class fields ko assign karte hain  
- Taaki class fully dynamic ban sake  

---

# 🧠 Quick Revision

✔ Class = Blueprint  
✔ Object = Instance  
✔ Fields = Class ke variables  
✔ Methods = Class ke functions  
✔ new keyword = Object banane ke liye  
✔ constructor() = Dynamic values lene ke liye  

---

Yeh tha complete concept of:

- First Class Creation  
- Static Fields  
- Method  
- Instantiation  
- Constructor Introduction  

🚀 Ab next step hoga dynamic assignment.