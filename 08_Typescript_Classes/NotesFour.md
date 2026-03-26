# 🚀 TypeScript Classes as Types + Optional & Readonly (Easy Hinglish Notes)

---

# 🧬 Classes Also Act As Types

Ab hamari `User` class:

- Dynamic objects bana rahi hai ✅
- Har object same blueprint follow karta hai ✅

Har `User` object me hoga:

- 🧑 name  
- 📧 email  
- 🙋 greet()  

Yani:

👉 Class sirf blueprint nahi hai  
👉 Class ek **type definition** bhi hai  

---

# 🧠 TypeScript Ka Smart Behavior (Type Inference)

Agar hum likhen:

    const user = new User("John", "john@email.com")

Aur mouse hover kare `user` par 👆

TypeScript automatically samajh jata hai:

👉 user ka type = User

Humne manually koi `type User = {}` nahi likha  
Phir bhi TypeScript class ko type ki tarah treat kar raha hai 🔥

---

# ✍️ Explicit Type Annotation

Chahe toh hum clearly bhi likh sakte hain:

    const user: User = new User("John", "john@email.com")

TypeScript ko koi problem nahi hogi ✅

Same for:

    const user2: User = new User("Mark", "mark@email.com")

✔ Classes can be used as types  
✔ TypeScript un types ko strictly follow bhi karta hai  

---

# 🚫 Extra Property Add Karne Par Kya Hoga?

Agar try karo:

    user.lastName = "Doe"

TypeScript bolega:

❌ Property 'lastName' does not exist on type 'User'

Kyuki:

- User class me `lastName` defined hi nahi tha
- Blueprint me nahi hai
- Isliye allow nahi karega

TypeScript strict hai 😄

---

# 🚫 Wrong Data Type Assign Karoge Toh?

Agar:

    user.name = 123

Error milega:

❌ Type number is not assignable to type string

Kyuki:

    name: string

Defined hai class me.

TypeScript blueprint ke rules todne nahi deta 💪

---

# 🌟 Optional Properties in Class

Bilkul objects ki tarah, class me bhi optional property bana sakte hain.

Syntax:

    lastName?: string

Example:

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

---

# 🧠 Optional Property Ka Behavior

`lastName?: string` ka matlab:

- Ye string ho sakti hai  
- Ya undefined ho sakti hai  

Isliye:

- Initialize karna zaroori nahi  
- TypeScript complain nahi karega  

---

# 👥 Different Users Example

    const user1 = new User("John", "john@email.com")
    const user2 = new User("Mark", "mark@email.com")
    const user3 = new User("Alice", "alice@gmail.com", "Doe")

Result:

- user1 → no lastName  
- user2 → no lastName  
- user3 → lastName = "Doe"  

Optional property flexible banati hai class ko 🎯

---

# 🔐 Readonly Properties in Class

Agar hum chahte hain ki koi property change na ho baad me:

Use `readonly` keyword.

Example:

    class User {
      name: string
      readonly email: string

      constructor(name: string, email: string) {
        this.name = name
        this.email = email
      }
    }

---

# 🚫 Readonly Property Change Karne Ki Koshish

Agar try karo:

    user.email = "new@email.com"

TypeScript bolega:

❌ Cannot assign to 'email' because it is a read-only property

Yani:

- Constructor me set ho sakti hai ✅
- Baad me change nahi ho sakti ❌

Agar `readonly` hata do:
✔ Reassign allowed ho jayega

---

# 🏆 Major Takeaways

✔ Classes TypeScript me types ki tarah behave karti hain  
✔ TypeScript strict type checking karta hai  
✔ Extra property add nahi kar sakte  
✔ Wrong data type assign nahi kar sakte  
✔ Optional property → `?` use karke  
✔ Readonly property → `readonly` keyword se  

---

# 🧠 Final Understanding

Class = Blueprint + Type Definition  

Optional property = Flexible blueprint  

Readonly property = Locked blueprint 🔒  

TypeScript = Strict rule enforcer jo blueprint follow karwata hai  

---

Ye concept aage bohot use hoga jab:

- Large applications banayenge  
- Strong type safety chahiye hogi  
- Real-world production code likhenge 🚀