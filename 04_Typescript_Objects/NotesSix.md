# 🐶🐱 Union Types with Objects in TypeScript 🚀

---

# 🎯 Lecture Goal

Is lecture me hum samjhenge:

- Object ke saath union type kaise kaam karta hai  
- Dog aur Cat ka example  
- Union object ka actual behavior kya hota hai  
- Partial objects kyun allowed nahi hote  

Union types real projects me bahut use hote hain 💪

---

# 🟢 Step 1 – Dog Type Define Karna

```ts
type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};
```

Dog ke paas:

- name
- barks
- wags

---

# 🟢 Step 2 – Cat Type Define Karna

```ts
type Cat = {
  name: string;
  purrs: boolean;
};
```

Cat ke paas:

- name
- purrs

---

# 🔥 Step 3 – Union Type Banana

```ts
type DogAndCatUnion = Dog | Cat;
```

📌 Ye union type hai.

Iska matlab:

> Object ya to Dog ho sakta hai  
> Ya Cat ho sakta hai  

---

# 🧠 Important Rule of Union (Objects)

Union ka matlab ye **nahi** hai ki sab properties mix ho jayengi.

Rule yaad rakho 👇

> Object ko kam se kam ek complete type satisfy karna padega.

---

# 🟢 Case 1 – Pure Dog Valid Hai

```ts
let dog: DogAndCatUnion = {
  name: "Buddy",
  barks: true,
  wags: true
};
```

✔ Valid

Ye Dog type ko fully satisfy karta hai.

---

# 🟢 Case 2 – Pure Cat Valid Hai

```ts
let cat: DogAndCatUnion = {
  name: "Bella",
  purrs: true
};
```

✔ Valid

Ye Cat type ko fully satisfy karta hai.

---

# 🟢 Case 3 – Complete Dog + Extra Cat Property

```ts
let hybrid1: DogAndCatUnion = {
  name: "Max",
  barks: true,
  wags: true,
  purrs: true
};
```

✔ Valid

Kyun?

- Ye Dog ko fully satisfy karta hai
- Extra property allowed hai

---

# 🟢 Case 4 – Complete Cat + Extra Dog Property

```ts
let hybrid2: DogAndCatUnion = {
  name: "Kitty",
  purrs: true,
  barks: false
};
```

✔ Valid

Cat fully satisfy ho raha hai  
Extra property allowed hai

---

# ❌ Case 5 – Partial Dog + Partial Cat (Not Allowed)

```ts
let invalidAnimal: DogAndCatUnion = {
  name: "Rocky",
  barks: true
};
```

❌ Error

Kyun?

- Ye Dog ko fully satisfy nahi karta (wags missing)
- Ye Cat ko bhi fully satisfy nahi karta (purrs missing)

📌 Rule:  

> At least ek type ko completely match karna zaroori hai.

---

# 🧠 Mental Model Samjho

Union `Dog | Cat` ka matlab:

- "Dog OR Cat"
- "Mix & match randomly" nahi

---

# 🔥 Golden Rule

| Situation | Valid? |
|------------|--------|
| Complete Dog | ✔ |
| Complete Cat | ✔ |
| Dog + Extra Cat | ✔ |
| Cat + Extra Dog | ✔ |
| Partial Dog + Partial Cat | ❌ |

---

# 🎯 Real-Life Use Case

Union types use hote hain jab:

- API multiple response shapes return kare  
- Form different structures allow kare  
- Multi-mode objects ho (admin | user | guest)  

---

# 🚀 Quick Revision Points

- `|` operator se union banta hai  
- Object union me at least ek type fully satisfy hona chahiye  
- Partial matching allowed nahi  
- Extra properties allowed ho sakti hain  
- Ye compile-time safety deta hai  

---

# 🏁 Final Line Yaad Rakho

> Union object ka matlab mixing nahi,  
> Complete matching hai 🔥  

Next video me aur advanced concepts dekhenge 💪🚀