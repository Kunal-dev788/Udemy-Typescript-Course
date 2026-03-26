# ❌ Omit Utility Type – TypeScript (Super Easy Hinglish Notes)

Aaj hum dekhne wale hain 👉 **`Omit` Utility Type**  

Ye basically **Pick ka opposite** hota hai 🔄

---

# 🧠 Omit Kya Hota Hai?

`Omit` allow karta hai:

> ✅ Kisi existing type me se kuch properties hata kar ek naya type banana

Simple language me:

- Pick → Jo rakhna hai wo batao 🎯  
- Omit → Jo hatana hai wo batao ❌  

---

# 📌 Basic Syntax

Omit<OriginalType, KeysToRemove>

- OriginalType → Jis type se kaam karna hai
- KeysToRemove → Kaunsi properties remove karni hain (union format me)

---

# 📝 Example – User Interface

Maan lo hum ek application bana rahe hain 👨‍💻  
Aur humare paas ek `User` interface hai:

interface User {
  name: string;
  age: number;
  email: string;
  password: string;
}

Yaha 4 properties hain:
- name
- age
- email
- password

---

# 🎯 Real World Situation

Backend me jab user register hota hai:

- Sab data save hota hai (including password)

But jab admin dashboard me users show karne hain:

- ❌ Password nahi bhejna
- ❌ Age bhi shayad unnecessary ho

Hume sirf:
- ✅ name
- ✅ email

Chahiye

---

# 🚀 Omit Ka Use

type LimitedUser = Omit<User, "password" | "age">;

Yaha kya ho raha hai?

- User type se kaam kar rahe hain
- "password" aur "age" remove kar rahe hain
- Baaki properties automatically bach jayengi

---

# 🔍 Internally Ye Banega

type LimitedUser = {
  name: string;
  email: string;
}

Bas. Clean aur secure version mil gaya 🔐✨

---

# 🧪 Practical Use

Ab API response me hum LimitedUser bhej sakte hain:

const user: LimitedUser = {
  name: "John",
  email: "john@email.com"
};

Password aur age ab exist hi nahi karte is type me.

Agar try karoge add karne ka:

❌ TypeScript error dega.

---

# 🔥 Pick vs Omit – Quick Comparison

| Utility Type | Kaam |
|--------------|------|
| Pick | Jo properties chahiye wo select karo |
| Omit | Jo properties nahi chahiye wo hata do |

Sochne ka tarika:

- Pick → “Ye rakhna hai” 🎯  
- Omit → “Ye hata do” ❌  

---

# 💡 Omit Kab Useful Hai?

✅ Sensitive data remove karna ho (password etc.)  
✅ Public API response create karna ho  
✅ Backend model ka safe version banana ho  
✅ Bade interface ka secure subset banana ho  

---

# 🏁 Ek Line Me Yaad Rakhna

Omit<OriginalType, Keys>  
= "Original type me se ye properties hata do" ❌✨

---

Ab tak humne dekha:
- Pick 🎯
- Omit ❌
- Record 📦
- Awaited ⏳

Ab dheere-dheere utility types ka power clear ho raha hoga 🚀💪