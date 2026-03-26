# 🏗️ Classes in TypeScript + 🌐 Running TS in Browser (Easy Hinglish Notes)

Aaj hum ek naya section start kar rahe hain 👉 **Classes in TypeScript**  
Aur saath hi dekhenge kaise TypeScript code browser me run karte hain 🚀

---

# 🏗️ What is a Class in TypeScript?

Simple definition:

> ✅ Class ek blueprint ya template hoti hai objects banane ke liye.

Class define karti hai:
- Properties (data)
- Methods (functions)

Jo bhi object us class se banega, uska structure same hoga.

---

# 🧠 Blueprint Concept Samjho

Maan lo humare paas 2 user objects hain:

User 1 → John  
User 2 → Mark  

Dono ka structure same hai:
- name
- email

Sirf values alag hain.

Har baar manually likhna:

{
  name: "...",
  email: "..."
}

Repeat karna boring aur error-prone hai ❌

---

# 🚀 Yahi Jagah Hai Jaha Class Use Hoti Hai

Class ek **factory** ki tarah kaam karti hai 🏭

Ek baar blueprint bana do,  
fir jitne objects chaho bana lo.

Example conceptually:

class User {
  name
  email
  greet()
}

Ab jab bhi new User create karoge:

- Same properties milengi
- Same methods milenge
- Bas values alag hongi

---

# 🎯 Important Points About Classes

✅ Class = Blueprint  
✅ Object = Class ka instance  
✅ Har instance ka structure same hota hai  
✅ Sirf property values change hoti hain  

---

# 🧩 Example Concept

class User {
  name: string
  email: string
  
  greet() {
    console.log("Hello")
  }
}

Ab agar hum create karein:

const user1 = new User("John", "john@email.com")
const user2 = new User("Mark", "mark@email.com")

Dono objects:
- Same structure
- Different values

---

# 🏭 Real World Analogy

| Class | Objects |
|-------|----------|
| Car | BMW, Audi, Tesla |
| Animal | Dog, Cat |
| User | John, Mark |

Class ek template hai,  
Objects us template se bane hue real instances hain.

---

# 🌐 Running TypeScript in Browser

Ab tak hum Node use kar rahe the.

But ab se:

👉 Hum TypeScript ko browser me run karenge.

Kyun?

- JS output dekhna easy hota hai
- Console logs clear dikhenge
- Live reload milega

---

# 📝 Setup Steps

## 1️⃣ index.html File Banayein

Project root me:

index.html create karo

Basic HTML boilerplate add karo.

---

## 2️⃣ index.js Include Karo

Script tag ke through:

<script src="index.js"></script>

Important ⚠️  
Browser TypeScript nahi samajhta.  
Browser sirf JavaScript run karta hai.

Isliye:
index.ts → compile hoga → index.js

---

## 3️⃣ Live Server Use Karna

VS Code me:

- Live Server extension install karo
- index.html par right click
- "Open with Live Server"

Ye HTML ko web server ke through run karega.

---

# 🔄 Live Reload Ka Magic

Agar:

- npm start dev script chal raha hai
- TS file save karte ho

To:
- TS → JS me compile hoga
- Browser automatically reload hoga
- Latest output console me dikhega

---

# 🛠 Developer Tools Access

Browser me:

- Right click
- Inspect
- Console tab open karo

Yaha:
- console.log outputs dikhenge
- Errors dikhenge
- Runtime behavior samajh aayega

---

# 📌 Important Workflow

1️⃣ index.ts me code likho  
2️⃣ Compiler usko index.js me convert karega  
3️⃣ Browser index.js load karega  
4️⃣ Console me output dikhega  

---

# 🏁 Final Summary

## Classes Section

- Class = Blueprint 🏗️
- Object = Instance 🧩
- Reusable structure deta hai
- Code duplication reduce karta hai

## Browser Setup

- index.html create karo
- index.js include karo
- Live Server use karo
- Console se output dekho

---

Ab hum ready hain apni first TypeScript class banane ke liye 🚀🔥  
Next lecture me actual class declare karenge 💪