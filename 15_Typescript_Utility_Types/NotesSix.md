# 🧩 Partial Utility Type – TypeScript (Super Easy Hinglish Notes)

Aaj hum dekhne wale hain 👉 **`Partial` Utility Type**  

Ye bahut powerful hai jab hume kisi existing type ke **saare properties optional** banane ho 🔥

---

# 🧠 Partial Kya Hota Hai?

`Partial` allow karta hai:

> ✅ Kisi existing type ko lekar uski saari properties optional bana do

Matlab:

Agar original type me properties required thi,  
to `Partial` use karne ke baad sab ke aage `?` lag jayega.

---

# 📌 Basic Syntax

Partial<OriginalType>

- OriginalType → Jis type ko modify karna hai
- Result → Same type, but sab properties optional

---

# 📝 Example – User Interface

Maan lo humare paas ek User interface hai:

interface User {
  name: string;
  email: string;
  password: string;
}

Yaha:
- name required
- email required
- password required

---

# 🎯 Real World Situation

Imagine karo humare paas ek function hai:

👉 `updateUser`

Iska kaam:
- Database se user lao
- Kuch properties update karo
- Updated user wapas return karo

Function structure kuch aisa hoga:

- Pehla parameter → user (full user object)
- Dusra parameter → updates (jo change karna hai)

Problem kya hai?

User:
- Sirf email update kar sakta hai
- Ya sirf name update kare
- Ya sirf password
- Ya teeno ek saath

Hume pehle se nahi pata kya update aayega ❓

---

# 🚀 Yahi Jagah Hai Jaha Partial Ka Use Hota Hai

function updateUser(user: User, updates: Partial<User>): User {

Yaha hum TypeScript ko bol rahe hain:

👉 Updates parameter me User type ka koi bhi subset aa sakta hai

---

# 🔍 Internally Partial Kya Karega?

Partial<User> ka matlab:

{
  name?: string;
  email?: string;
  password?: string;
}

Sab properties optional ho gayi ✅

---

# 🛠 Function Implementation Logic

Hum kya karenge:

1. Original user object ko spread karenge
2. Updates ko uske upar spread karenge
3. Final updated user return karenge

Conceptually:

return {
  ...user,
  ...updates
};

Agar updates me sirf email hai, to sirf email change hoga.

---

# 🧪 Practical Example

const user: User = {
  name: "John",
  email: "john@email.com",
  password: "12345"
};

Ab hum sirf email update karna chahte hain:

const updatedUser = updateUser(user, {
  email: "test@test.com"
});

✅ Ye perfectly valid hai  
❌ Agar Partial nahi hota to error aata  

---

# 💡 Partial Kab Useful Hai?

✅ Update APIs me  
✅ Forms me jaha partial data aata hai  
✅ Patch requests me  
✅ Optional configuration objects me  
✅ Jab complete object nahi chahiye hota  

---

# 🔥 Pick vs Omit vs Partial (Quick Recap)

| Utility | Kaam |
|----------|------|
| Pick | Sirf selected properties rakho 🎯 |
| Omit | Selected properties hata do ❌ |
| Partial | Sab properties optional bana do 🧩 |

---

# 🏁 Ek Line Me Yaad Rakhna

Partial<Type>  
= "Is type ki saari properties optional bana do" 🧩✨

---

Utility types ab clear hote ja rahe hain 💪  
Practice karte raho — real projects me inka magic dikhega 🚀