# 🛡️ Type Checking Options + Browser Setup + Source Maps – Easy Hinglish Notes

Ab hum `tsconfig.json` ke **type checking settings** aur kuch important dev options samjhenge 🚀  
Ye options tumhari code quality ko next level pe le jaate hain.

---

# 🔐 STRICT Mode

Agar:

strict: true

👉 Iska matlab almost saare strict type checking options automatically ON ho jaate hain.

Best practice:

✔ Normally strict ko true hi rakho  
✔ Sirf special cases me disable karo  

---

# 🚫 1️⃣ noImplicitAny

### 🧠 Kya karta hai?
Agar tum kisi variable ka type define nahi karte  
aur TypeScript usko automatically `any` assume kare  
to ye error throw karega.

Example problem:

function test(value) {
  return value
}

👉 value ka type define nahi hai  
👉 TypeScript complain karega

Benefit:

✔ Accidental any type avoid hota hai  
✔ Strong typing maintain hoti hai  

---

# 🚫 2️⃣ strictNullChecks

### 🧠 Kya karta hai?
Force karta hai ki tum `null` aur `undefined` properly handle karo.

Without this:
Null related runtime errors aa sakte hain ❌

With this:
Tumhe explicitly check karna padega.

Benefit:

✔ Runtime crashes drastically reduce hote hain  
✔ Safer code  

---

# 🧹 3️⃣ noUnusedLocals

Agar:

noUnusedLocals: true

### 🧠 Kya karega?
Jo variables declare kiye hain  
par use nahi kiye  
unpe error dega.

Example:

const brand = "Logitech"

👉 Agar brand use nahi hua → error

Benefit:

✔ Clean code  
✔ Dead variables remove  

---

# 🧹 4️⃣ noUnusedParameters

Same concept but function parameters ke liye.

Example:

const createKeyboard = (modelId: number, type: string) => {
  return { type: "keyboard", modelId }
}

👉 type parameter use nahi hua → error

Benefit:

✔ Clean function signatures  
✔ Extra unused inputs avoid  

---

# 🔁 5️⃣ noImplicitReturns

Agar function ka return type defined hai  
to har code path me return hona chahiye.

Example:

function test(): string {
  if (true) {
    return "ok"
  }
}

👉 Agar koi branch return na kare → error

Benefit:

✔ Logical bugs prevent  
✔ Missing returns catch  

---

# 🚧 6️⃣ allowUnreachableCode

Agar:

allowUnreachableCode: false

To TypeScript detect karega:

Unreachable code.

Example:

return "hello"
const x = 5

👉 Ye code kabhi run nahi hoga → error

Benefit:

✔ Logical mistakes pakad leta hai  
✔ Hidden bugs detect karta hai  

---

# 🌐 Browser Me TypeScript Run Karna

Important:

Browser TypeScript directly nahi samajhta ❌  
Sirf JavaScript samajhta hai ✅

Steps:

1️⃣ app.ts → compile hoke app.js banta hai  
2️⃣ index.html me app.js load karna hota hai  
3️⃣ Live Server se open karo  

---

# 🗂 Structure Reminder

src → TypeScript files  
dist → Compiled JS files  

index.html me:

dist/app.js load hoga  
not app.ts

---

# 🧭 Source Maps (Debugging Superpower)

Tsconfig me:

sourceMap: true

---

## 🔍 Without Source Maps

Browser console me:

Error dikhega app.js file se.

Matlab:

Compiled JavaScript show hoga.

---

## 🔥 With Source Maps Enabled

Browser console directly:

app.ts file show karega.

✔ Direct TypeScript debugging  
✔ Breakpoints laga sakte ho  
✔ Step-by-step debug  

---

# 📁 Extra File Generate Hota Hai

Jab sourceMap enable hota hai:

app.js  
app.js.map  ← naya file generate hota hai

Ye map file:

✔ JS ko TS source se connect karta hai  
✔ Browser ko batata hai original code kahan hai  

---

# 🎯 Final Summary

## Strict Group

noImplicitAny → hidden any detect  
strictNullChecks → null safety  
noUnusedLocals → unused variables detect  
noUnusedParameters → unused params detect  
noImplicitReturns → missing return detect  
allowUnreachableCode → unreachable code detect  

## Browser Setup

✔ TS compile hota hai JS me  
✔ Browser sirf JS samajhta hai  
✔ Live Server use karo  

## Source Maps

✔ Debug TypeScript directly  
✔ Cleaner debugging  
✔ Professional projects me must-have  

---

🧠 Real Developer Tip:

Production project me:

✔ strict = true  
✔ sourceMap = true (dev me)  
✔ noUnusedLocals & Parameters = true  

Ye settings tumhe cleaner, safer aur production-ready code likhne me help karti hain 🚀🔥