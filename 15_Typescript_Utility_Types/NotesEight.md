# 🔤 String Manipulation Utility Types + 🆕 `satisfies` Operator (TypeScript Easy Hinglish Notes)

Aaj hum 2 important topics cover karenge:

1️⃣ String Manipulation Utility Types  
2️⃣ TypeScript 4.9 ka `satisfies` Operator  

Dono practical aur real-world me kaafi useful hain 🚀

---

# 🔤 String Manipulation Utility Types

TypeScript me 4 built-in string utility types hote hain:

- Uppercase
- Lowercase
- Capitalize
- Uncapitalize

Ye sirf **string literal types** par kaam karte hain (normal string values par nahi).

Inka purpose:

> ✅ String literals ko transform karna for consistency

---

## 📌 Basic Idea

Agar humare paas ek union type hai:

type City = "new york" | "london" | "tokyo";

Sab lowercase me hai.

Ab agar hume inhe transform karna ho?

---

# 🔥 1️⃣ Uppercase

type UppercaseCity = Uppercase<City>;

Result:

"NEW YORK" | "LONDON" | "TOKYO"

👉 Saare letters capital ho gaye.

---

# 🔥 2️⃣ Lowercase

type LowercaseCity = Lowercase<City>;

Agar koi value mixed case me ho, to ye sabko lowercase bana dega.

---

# 🔥 3️⃣ Capitalize

type CapitalizedCity = Capitalize<City>;

Result:

"New york" | "London" | "Tokyo"

👉 Sirf first letter capital hoga.

Important ⚠️  
Ye sirf first character capitalize karta hai, pura word nahi.

---

# 🔥 4️⃣ Uncapitalize

type UncapitalizedCity = Uncapitalize<CapitalizedCity>;

Result:

"new york" | "london" | "tokyo"

👉 First letter small ho jayega.

---

## 🎯 Kab Useful Hai?

✅ Consistent naming enforce karne ke liye  
✅ Auto-generated types ko format karne ke liye  
✅ APIs me casing control karne ke liye  
✅ Strict string literal systems me  

---

# 🆕 TypeScript 4.9 – `satisfies` Operator

Ab aate hain ek powerful feature par 👉 `satisfies`

Ye help karta hai:

> ✅ Object ko validate karne me without losing specific type inference

---

# 🧠 Problem Samjho

Maan lo hum ek color object bana rahe hain.

Har color me 3 properties hongi:
- red
- green
- blue

Har property ki value ho sakti hai:

- String (hex code)
- Ya RGB tuple (number array of 3 values)

---

## 📌 Types Define Karte Hain

type Properties = "red" | "green" | "blue";

type RGB = [number, number, number];

type ColorType = Record<Properties, RGB | string>;

---

# ❗ Issue Without `satisfies`

Agar hum strict type annotation lagate hain:

const color: ColorType = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255]
};

Ab problem:

color.green.toUpperCase();

TypeScript error dega ❌  
Kyun?

Kyuki green ka type hai:
RGB | string

TypeScript sure nahi hai ki ye string hai ya array.

Isliye manually check karna padta:

if (typeof color.green === "string") {
   color.green.toUpperCase();
}

---

# 🚀 Enter `satisfies` Operator

Ab hum type annotation hata kar use karte hain:

const color = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255]
} satisfies Record<Properties, RGB | string>;

---

# 🔥 Ab Kya Hoga?

- TypeScript validate karega:
  - Sirf red, green, blue allowed hain
  - Value sirf RGB ya string ho sakti hai
- But actual inferred type preserve karega

Matlab:

green → inferred as string  
blue → inferred as RGB  

---

# 🎯 Ab Direct Use Possible Hai

color.green.toUpperCase(); ✅ Allowed  

Kyuki TypeScript ko pata hai green string hai.

But:

color.blue.toUpperCase(); ❌ Error  

Kyuki blue array hai.

---

# 🧠 `satisfies` Ka Real Benefit

✅ Object shape validate karta hai  
✅ Extra properties allow nahi karta  
✅ Specific type inference preserve karta hai  
✅ Manual type narrowing kam kar deta hai  
✅ Safer + cleaner code deta hai  

---

# 📌 Summary – String Utilities

| Utility | Kaam |
|----------|------|
| Uppercase | Sab letters capital |
| Lowercase | Sab letters small |
| Capitalize | First letter capital |
| Uncapitalize | First letter small |

---

# 📌 Summary – `satisfies`

`satisfies`  
= "Object ko validate karo, but uska exact inferred type mat lose karo"

---

# 🏁 Final One-Liners

Uppercase<Type>  
= String literal ko full caps me convert karo 🔤

Capitalize<Type>  
= Sirf first letter capital karo ✨

satisfies  
= Validate + Preserve inference ek saath 🚀

---

Ab tum officially utility types ke advanced zone me enter kar chuke ho 💪🔥  
Practice karte raho — TypeScript ka real power ab feel hoga 🚀