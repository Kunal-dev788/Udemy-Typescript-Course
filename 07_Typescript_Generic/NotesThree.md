# 🔥 Generics with Constraints – `extends` Keyword (Hinglish Notes)

Ab tak humne generics dekhe jo kisi bhi type ke saath kaam karte the.  
Lekin real-world me kabhi kabhi hume **restriction lagani padti hai**.

Matlab:

> Generic flexible ho,  
> lekin kuch rules follow kare.

Isi ko bolte hain **Generic Constraints**.

---

# 🟢 Problem Statement

Hum ek function banana chahte hain:

```ts
function logLength(item) {
  console.log(item.length);
}
```

Ye function:

- `item.length` access karta hai  
- Sirf un types ke saath kaam kare jo **length property** rakhte hain  

---

# 🎯 Important Question

Kaun kaun length property rakhte hain?

✔ Arrays  
✔ Strings  
✔ Custom objects (agar manually length add karein)

❌ Plain object (default me length nahi hota)

---

# 🟢 Step 1 – Constraint Type Banate Hain

```ts
type HasLength = {
  length: number;
};
```

Ye type sirf ek rule define karta hai:

> Jo bhi type ho, usme `length: number` hona chahiye.

---

# 🟢 Step 2 – Generic Constraint Lagana

Ab function ko strictly type karte hain:

```ts
function logLength<T extends HasLength>(item: T): void {
  console.log(item.length);
}
```

---

# 🧠 Samjho Isko Line by Line

### `<T extends HasLength>`

Iska matlab:

> T koi bhi type ho sakta hai  
> Lekin usme `length` property hona zaroori hai  

Ye hi constraint hai 🔥

---

# 🟢 Valid Examples

### ✔ Number Array

```ts
logLength([1, 2, 3]);
```

Array me length hota hai → OK

---

### ✔ String Array

```ts
logLength(["A", "B", "C"]);
```

Array → OK

---

### ✔ String

```ts
logLength("Hello");
```

String me bhi length hota hai → OK

---

### ✔ Custom Object with Length

```ts
logLength({ length: 10 });
```

Length property hai → OK

---

# ❌ Invalid Example

```ts
logLength({ name: "John" });
```

Error milega ❌

Kyun?

Kyuki object me `length` property nahi hai.

---

# 🟢 Agar Length Add Kar Dein

```ts
logLength({
  name: "John",
  length: 5
});
```

Ab error nahi aayega ✔

Kyuki constraint satisfy ho gaya.

---

# 🧠 Important Concept

Generic constraint ka matlab:

> Generic free hai  
> But condition ke andar hi free hai  

Ye bilkul aise hai jaise:

```
T extends HasLength
```

Matlab:

```
T ∈ All types that have length property
```

---

# 🎯 Why Use Constraints?

Constraints helpful hote hain jab:

- Hume pata ho function ko specific property chahiye
- But type exact nahi pata
- Multiple possible types handle karne hain

---

# 🔥 Real World Example

Agar function ko `id` property chahiye ho:

```ts
type HasId = {
  id: number;
};

function printId<T extends HasId>(item: T) {
  console.log(item.id);
}
```

Ab ye function sirf un types ke saath chalega jisme `id` ho.

---

# 🚀 Summary

### Generic Without Constraint
```
<T>
```
Kisi bhi type ke saath kaam karega.

---

### Generic With Constraint
```
<T extends SomeType>
```
Sirf un types ke saath kaam karega jo condition satisfy karein.

---

# 🏁 Final Takeaway

`extends` ka use generics ke saath karna:

✔ Code ko safer banata hai  
✔ Generic flexibility maintain karta hai  
✔ Required properties guarantee karta hai  

Ye pattern real-world me bohot use hota hai — especially libraries me.

---

Agla step: Aur advanced generic patterns dekhenge 🚀