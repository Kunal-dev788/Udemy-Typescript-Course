# ⏳ Awaited Utility Type – Complete Promise Flow (Easy Hinglish Notes)

---

## 🎯 Goal
Samajhna:
- Promise kaise create hota hai
- Wo kaise resolve hota hai
- Aur `Awaited` utility type kaise uska final resolved type nikalta hai

---

# 🔹 Step 1: Promise Constant Banana

Hum ek constant banate hain jiska naam `promise` hai.

Ye:
- ✅ Type hoga → `Promise<string>`
- ✅ Finally resolve karega → `string`

Example structure:

    const promise: Promise<string> = new Promise((resolve, reject) => {
    });

### 🧠 Important Samjho:
- `new Promise()` ek callback function leta hai
- Callback me 2 cheeze milti hain:
  - `resolve`
  - `reject`
- Abhi promise kuch return nahi kar raha, sirf setup ho raha hai

---

# 🔹 Step 2: setTimeout Se Promise Ko Delay Karna

Ab hum `setTimeout` use karte hain taaki 1 second baad promise resolve ho.

    const promise: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done");
        }, 1000);
    });

### 🔥 Yaha Kya Ho Raha Hai?

- `setTimeout` 2 arguments leta hai:
  1. Callback function
  2. Time in milliseconds
- `1000 ms = 1 second`
- 1 second baad `resolve("done")` call hoga
- `"done"` ka type = `string`

👉 Final Result:
Promise resolve hoga → `string`

---

# 🔹 Step 3: Awaited Utility Type Use Karna

Ab hum ek new type banate hain jo promise ke final resolved type ko represent kare.

    type AwaitedType = Awaited<typeof promise>;

### 🎯 TypeScript Kya Karega?

- `typeof promise` → Promise<string>
- `Awaited<Promise<string>>`
- Final infer karega → `string`

So:

    AwaitedType = string

✨ Automatically Promise unwrap ho gaya.

---

# 🔹 Agar Promise Number Return Kare?

Agar hum change kar dein:

    resolve(10);

Ab promise ka type ho jayega:

    Promise<number>

Aur:

    type AwaitedType = Awaited<typeof promise>;

TypeScript infer karega:

    AwaitedType = number

🔥 Type automatic change ho jayega.

---

# 🤔 Ye Useful Kyu Hai?

Abhi simple example me hume pata tha ki promise kya return karega.

But real world me:

- API call hoti hai
- Async function hoti hai
- Backend se data aata hai
- Hume nahi pata final object ka structure kya hoga

Example:

    async function getUser() {
        return fetch("api/user");
    }

Ab hume nahi pata:
- User object me kya properties hongi?
- name?
- email?
- address?

Yaha `Awaited` bahut useful ho jata hai 🚀

---

# 💡 Real Power

Jab bhi:

- Promise ka final resolved type chahiye
- Async function ka return type nikalna ho
- API response ka actual type infer karna ho

👉 Tab `Awaited` use karo.

---

# 📌 Quick Revision Points

✅ Awaited Promise ko unwrap karta hai  
✅ Promise ke andar ka final type return karta hai  
✅ Automatic type inference deta hai  
✅ Async functions ke saath bahut useful hai  
✅ Real world API handling me powerful tool hai  

---

# 🏁 Ek Line Me Yaad Rakhna

> `Awaited<Type>` = Promise ke andar ka asli resolved type nikal deta hai ⏳✨

---

Next video me hum `Record` utility type dekhenge 🚀