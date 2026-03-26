# 🎯 Pick Utility Type – TypeScript (Super Easy Hinglish Notes)

Aaj hum dekhne wale hain ek aur powerful utility type 👉 **`Pick`** 🔥

Ye bahut useful hota hai jab hume kisi existing type ke sirf kuch selected properties chahiye hoti hain.

---

# 🧠 Pick Kya Hota Hai?

`Pick` allow karta hai:

> ✅ Kisi existing type se sirf selected properties lekar ek naya type banana

---

# 📌 Basic Syntax

Pick<OriginalType, Keys>

- OriginalType → Jis type se properties leni hain
- Keys → Kaunsi properties pick karni hain (union format me)

Important 👇  
Keys technically union hota hai, array nahi.  
But logically aap ise “list of properties” samajh sakte ho.

---

# 📝 Example – Person Interface

Chalo ek simple interface banate hain:

interface Person {
  name: string;
  age: number;
  address: string;
}

Yaha Person ke paas 3 properties hain:
- name
- age
- address

---

# 🎯 Goal

Hume ek naya type banana hai jisme sirf:
- name
- age

Address nahi chahiye ❌

---

# 🚀 Pick Ka Use

type NameAndAge = Pick<Person, "name" | "age">;

Yaha kya ho raha hai?

- Person se properties le rahe hain
- Sirf "name" aur "age" pick kar rahe hain
- "address" automatically ignore ho jayega

---

# 🔍 Internally Ye Banega

type NameAndAge = {
  name: string;
  age: number;
}

Bas. Clean subset mil gaya ✨

---

# 🧪 Testing It

const person: NameAndAge = {
  name: "John",
  age: 32
};

✅ Ye valid hai  
❌ Agar address add karoge to error milega  

---

# 💡 Pick Kab Useful Hai?

- Jab kisi bade interface ka chhota subset chahiye
- API response ka limited version banana ho
- Form ke liye sirf kuch fields chahiye ho
- Reusable type banana ho bina duplication ke

---

# 🔥 Combining Utility Types (Advanced Concept)

Ab thoda powerful combo dekhte hain 😎

Maan lo hume NameAndAge type ko **readonly** banana hai.

Readonly ka matlab:
- Object create ho jayega
- But baad me modify nahi kar sakte

---

# 🧩 Pick + Readonly Combine Karna

type NameAndAge = Readonly<Pick<Person, "name" | "age">>;

Ab kya hoga?

- Person se name aur age pick honge
- Fir pura object readonly ban jayega

---

# 🛑 Ab Modify Karne Ki Koshish

person.name = "Mike";

❌ TypeScript error dega  
Kyun?

Kyuki type readonly hai.

---

# 🧠 Agar Readonly Hata Dein?

type NameAndAge = Pick<Person, "name" | "age">;

Ab:

person.name = "Mike";

✅ Allowed hoga

---

# 📌 Important Takeaways

✅ Pick existing type ka subset banata hai  
✅ Sirf selected properties include hoti hain  
✅ Union use hota hai keys define karne ke liye  
✅ DRY principle follow hota hai  
✅ Dusre utility types ke saath combine ho sakta hai  

---

# 🏁 Ek Line Me Yaad Rakhna

Pick<OriginalType, Keys>  
= "Original type me se sirf ye properties de do" 🎯✨

---

Utility types practice se clear hote hain 💪  
Jitna use karoge, utna natural lagne lagega 🚀