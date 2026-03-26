# 📘 TypeScript Utility Types – Easy Hinglish Notes

## 🔹 Utility Types Kya Hote Hain?

- Utility types **predefined generic types** hote hain jo TypeScript already provide karta hai.
- Ye **existing types ko transform karke naye types banate hain**.
- Inka kaam **variables ya values ke saath nahi**, balki **types ke saath hota hai**.
- Ye pure TypeScript ka concept hai, JavaScript se direct relation nahi hai.

👉 Simple words me:
> Utility types = Ready-made type functions jo ek type lete hain aur usko modify karke naya type bana dete hain.

---

## 🔹 Kyun Important Hain?

- Strong typing ko aur powerful banate hain.
- Real-world applications me type manipulation easy ho jata hai.
- Code reusable aur clean ho jata hai.
- Type safety maintain rehti hai.

Thoda tricky lag sakta hai kyunki ye **generics** par based hote hain, but practice ke baad bahut powerful lagte hain.

---

# 🔹 Utility Types Kaise Bante Hain?

Utility types internally 2 major TypeScript features se bante hain:

### 1️⃣ Mapped Types  
### 2️⃣ Conditional Types  

Ye dono features milkar ya individually utility types ko create karte hain.

👉 So basically:
> Utility types = Mapped Types + Conditional Types ka combination (behind the scenes)

---

# 🔹 Utility Types = Type Functions

Utility types ko aap **type functions** samajh sakte ho:

- Input → Ek ya multiple types
- Output → Ek naya transformed type

Bilkul normal function ki tarah, bas ye types ke saath kaam karta hai.

---

# 🔹 Example 1: Partial Utility Type

TypeScript me already ek utility type hota hai:

## `Partial<T>`

### Ye Kya Karta Hai?

- Input: Ek type `T`
- Output: Same properties as `T`
- But: **Saare properties optional bana deta hai**

### Kaise?

Ye internally **mapped type** use karta hai.

Conceptually ye kuch aisa hota hai:

- T ke har property par loop karta hai
- Har property ke aage `?` laga deta hai
- Result → All properties optional

### Example Samjho:

Agar type me tha:

- name: string
- age: number

After `Partial<T>`:

- name?: string
- age?: number

👉 Matlab:
> Same structure, but sab optional.

---

# 🔹 Example 2: Exclude Utility Type

TypeScript ka ek aur built-in utility type hai:

## `Exclude<T, U>`

Ye internally **conditional type** use karta hai.

### Ye Kya Karta Hai?

- Do generics leta hai: `T` aur `U`
- T ke types ko check karta hai
- Agar T ka koi part U ke compatible hai → remove kar deta hai
- Baaki types ko return karta hai

### Simple Meaning:

> Exclude<T, U> = T me se U ko hata do

### Kaise Kaam Karta Hai?

Ye `extends` keyword se check karta hai:

- Agar T extends U → return `never`
- Nahi to → T ko return karta hai

`never` ka matlab:
> Impossible type (jo exist nahi karta)

So jo match karta hai, wo remove ho jata hai.

---

# 🔹 Important Samajhne Wali Baat

- `Partial` → mapped types se bana hai
- `Exclude` → conditional types se bana hai
- Dono TypeScript ke built-in features par based hain
- Ye kahin aur se nahi aate, sirf TypeScript ka part hain

---

# 🔹 Final Summary

✅ Utility types predefined generic types hote hain  
✅ Ye existing types ko modify karke naye types banate hain  
✅ Variables ya values par kaam nahi karte, sirf types par kaam karte hain  
✅ Internally mapped types aur conditional types use karte hain  
✅ Real-world projects me type safety aur flexibility badhate hain  

---

Agla step me hum in sab utility types ko detail me dekhenge aur real examples ke saath samjhenge 🚀