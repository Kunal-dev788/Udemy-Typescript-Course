# 🔥 Generics Deep Dive – Functions ke Saath (Hinglish Notes)

Pehle humne generics ka basic concept samjha.  
Ab thoda deeper level pe samajhte hain — especially **functions ke saath generics ka powerful use**.

---

# 🟢 Example Problem

Ek function banate hain:

```ts
function getFirstElement(array) {
  return array[0];
}
```

Ye function:

- Kisi bhi array ka first element return karega  
- But strictly typed nahi hai  

TypeScript kya samjhega?

```
(array: any) => any
```

❌ Unsafe  
❌ Type lost  

---

# 🎯 Goal

Function:

- Generic ho  
- Kisi bhi type ka array accept kare  
- Return type correct infer ho  

---

# 🟢 Generic Type Alias Solution

Chalo ek type alias banate hain:

```ts
type GetFirstElement = <T>(array: T[]) => T;
```

Samjho isko:

- `<T>` → Generic type variable
- `array: T[]` → Parameter is array of T
- `=> T` → Return type is single T

Matlab:

| Agar T = string | Param = string[] | Return = string |
|----------------|------------------|----------------|
| Agar T = number | Param = number[] | Return = number |

---

# 🟢 Apply Type to Function

```ts
const getFirstElement: GetFirstElement = (array) => {
  return array[0];
};
```

Ab function fully generic + strictly typed hai 💪

---

# 🟢 Usage Example

### ✔ Number Array

```ts
const numbersArray = [1, 2, 3];
const numberOutput = getFirstElement(numbersArray);
```

TypeScript automatically infer karega:

```
numberOutput → number
```

---

### ✔ String Array

```ts
const stringArray = ["A", "B", "C"];
const stringOutput = getFirstElement(stringArray);
```

TypeScript infer karega:

```
stringOutput → string
```

⚡ Yaha manually `<number>` ya `<string>` dene ki zarurat nahi hai.  
Inference automatically ho jaata hai.

---

# 🟢 Explicit Generic (Optional)

Agar chaaho toh explicitly bhi likh sakte ho:

```ts
const stringOutput = getFirstElement<string>(stringArray);
```

Lekin usually zarurat nahi padti.

---

# 🔥 IMPORTANT – Two Different Generic Styles

Ab sabse important concept.

Dekho ye:

### Style 1 (Generic Inside Function Type)

```ts
type GetFirstElement = <T>(array: T[]) => T;
```

Ye ek **fully generic reusable function type** hai.

Ye function kisi bhi type ke saath kaam karega.

---

### Style 2 (Generic Before Equal Sign)

```ts
type FirstElement<T> = (array: T[]) => T;
```

Yaha difference hai ⚠

Ab `T` fixed ho gaya jab tum function define karoge.

Example:

```ts
const firstElementString: FirstElement<string> = (array) => {
  return array[0];
};
```

Ye function:

✔ Sirf string array accept karega  
❌ Number array accept nahi karega  

---

### Agar Number Version Chahiye

```ts
const firstElementNumber: FirstElement<number> = (array) => {
  return array[0];
};
```

Ab ye sirf numbers ke liye kaam karega.

---

# 🧠 Difference Samjho Clearly

| Generic Location | Meaning |
|-----------------|----------|
| `<T>` inside function signature | Function fully generic, inference hota hai |
| `<T>` before `=` | Type fixed at declaration time |

---

# 🎯 Real Meaning

### Style 1
Ek hi function → multiple types handle karega.

### Style 2
Har type ke liye alag function banana padega.

---

# 🟢 Error Example

Agar:

```ts
const firstElementString: FirstElement<string>
```

Aur tum number array pass karo:

```ts
firstElementString([1, 2, 3])
```

❌ Error aayega

Kyuki ye sirf string ke liye bana hai.

---

# 🚀 Summary

Generics ke do powerful patterns hain:

### 1️⃣ Fully Generic Function
```
<T>(param: T[]) => T
```
Reusable + Inference based

### 2️⃣ Type-Parameterized Alias
```
type Alias<T> = ...
```
Type fixed at implementation time

---

# 🏁 Final Takeaway

Agar chahte ho:

✔ Ek hi function sab types ke liye kaam kare → use `<T>` inside function  
✔ Har type ke liye alag implementation chahiye → use `type Alias<T>`

Ye subtle difference interview me bhi poocha jaata hai 😄

---

Agla step: Generics ke aur advanced patterns dekhenge 🚀