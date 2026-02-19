# ✨ Intersection Types in TypeScript (Cat 🐱 & Dog 🐶 Example)

---

# 🎯 Lecture Goal

Is lecture me hum samjhenge:

- Intersection type kya hota hai  
- Union aur Intersection me difference  
- Objects ke saath intersection ka behavior  
- Real example with Cat & Dog  

⚠️ Important: Real projects me union zyada use hota hai,  
lekin intersection bhi powerful concept hai.

---

# 🔁 Quick Comparison – Union vs Intersection

| Union (`|`) | Intersection (`&`) |
|-------------|-------------------|
| Either this OR that | This AND that |
| Ek type pura hona chahiye | Dono types pura hone chahiye |
| Flexible | Strict |

---

# 🐶 Dog Type

```ts
type Dog = {
  name: string;
  color: string;
  barks: boolean;
};
```

---

# 🐱 Cat Type

```ts
type Cat = {
  name: string;
  color: string;
  purrs: boolean;
};
```

---

# 🔥 Intersection Type Banana

```ts
type HybridAnimal = Dog & Cat;
```

👉 Yaha `&` use hota hai (ampersand)  
👉 Ye Dog AND Cat dono ka combination hai  

---

# 🧠 Intersection Me Kya Hota Hai?

TypeScript:

1. Common properties pick karta hai  
   - name  
   - color  

2. Unique properties bhi include karta hai  
   - barks (Dog se)  
   - purrs (Cat se)

Final shape banega:

```ts
{
  name: string;
  color: string;
  barks: boolean;
  purrs: boolean;
}
```

👉 Matlab hybrid animal ko dog bhi hona hai  
👉 Aur cat bhi hona hai  

---

# 🧪 Example Object

```ts
const hybridAnimal: HybridAnimal = {
  name: "Max",
  color: "White",
  purrs: false,
  barks: true
};
```

✅ Jab sab properties add kar doge, error nahi aayega  
❌ Agar koi ek property miss kar di → TypeScript error dega  

---

# ❌ Agar Property Missing Ho

```ts
const hybridAnimal: HybridAnimal = {
  name: "Max",
  color: "White"
};
```

🚨 Error aayega  
Kyuki:

- barks missing  
- purrs missing  

Intersection me **dono types complete hone chahiye**.

---

# 🧠 Simple Formula Yaad Rakho

```
Union (|)  → Either one complete
Intersection (&) → Both complete
```

---

# 🎯 Real-World Usage

Intersection types useful hote hain jab:

- Multiple capabilities combine karni ho  
- Multiple interfaces merge karne ho  
- Mixins use kar rahe ho  
- Extended object banana ho  

Example:
- User & Admin permissions
- Employee & Manager roles
- API response & metadata combine karna

---

# 🚀 Final Takeaway

✔️ Union → Flexible  
✔️ Intersection → Strict Combination  
✔️ Intersection me har property required hoti hai  

Intersection type ka matlab:

> "Tumhe dono banna padega" 😄  

---

Next lecture me aur advanced concepts aayenge 💪