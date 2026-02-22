# 🔥 Practical Generics Example – Custom Filter Function (Hinglish Notes)

Ab tak humne generics ka theory dekha 💡  
Ab dekhte hain ek **real-world practical implementation** —  
JavaScript ke `filter()` method ka simplified version banayenge.

---

# 🟢 JavaScript Filter Kya Karta Hai?

Example:

```js
const ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

const result = ages.filter(checkAdult);
```

### 🧠 Filter Kaise Kaam Karta Hai?

- Har element pe loop lagta hai
- Ek **predicate function** call hota hai
- Predicate `true` return kare → value include hoti hai
- Predicate `false` return kare → value discard hoti hai

Final output:

```js
[32, 33, 40]
```

---

# 🟢 Ab Apna Custom Filter Banate Hain

## Step 1 – Basic Implementation (Without Generics)

```ts
const filter = (
  array: any[],
  predicate: (item: any) => boolean
) => {
  const result: any[] = [];

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
};
```

---

# 🧠 Yeh Code Kya Kar Raha Hai?

1. `array` → jispe filter lagana hai  
2. `predicate` → function jo true/false return kare  
3. Loop chalega  
4. Agar predicate true → value push hogi result me  
5. End me result return hoga  

---

# 🟢 Test Kar Ke Dekhte Hain

## Numbers Example

```ts
const numbers = [2, 4, 8, 10];

const greaterThanSeven = (item: number) => {
  return item > 7;
};

console.log(filter(numbers, greaterThanSeven));
```

Output:

```ts
[8, 10]
```

---

## Strings Example

```ts
const animals = ["cat", "dog", "rat"];

const filterCat = (item: string) => {
  return item === "cat";
};

console.log(filter(animals, filterCat));
```

Output:

```ts
["cat"]
```

---

# ⚠️ Problem Kya Hai?

Function polymorphic hai (multiple types pe kaam karta hai)  
Lekin humne sab kuch `any` type rakha hai ❌

Iska matlab:

- Type safety nahi hai
- Bug chances high
- TypeScript ka fayda nahi mil raha

---

# 🔥 Ab Generics Ka Time Hai

Yeh function generic hona chahiye.

---

# 🟢 Generic Version of Filter

```ts
const filter = <T>(
  array: T[],
  predicate: (item: T) => boolean
): T[] => {
  const result: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
};
```

---

# 🧠 Breakdown

### `<T>`  
Generic type variable

### `array: T[]`
Array of type T

### `predicate: (item: T) => boolean`
Predicate ka item bhi same type T hoga

### `: T[]`
Return type bhi same T ka array

---

# 🟢 Ab Testing Dobara Karte Hain

## Numbers

```ts
const numbers = [2, 4, 8, 10];

const greaterThanSeven = (item: number) => item > 7;

const result = filter(numbers, greaterThanSeven);
```

👉 TypeScript automatically infer karega:

```ts
result → number[]
```

---

## Strings

```ts
const animals = ["cat", "dog", "rat"];

const filterCat = (item: string) => item === "cat";

const result = filter(animals, filterCat);
```

👉 Inferred type:

```ts
result → string[]
```

---

# 🚀 Generics Ka Magic

✔ `any` remove ho gaya  
✔ Type safety mil gayi  
✔ Function reusable ho gaya  
✔ Separate overloads ki zarurat nahi  

---

# 🟢 Polymorphic Function Kya Hota Hai?

Jo function:

- Multiple types pe kaam kare
- Lekin type-safe bhi ho

Filter ek perfect example hai.

---

# 🟢 Without Generics Hota Toh?

Har type ke liye alag function banana padta:

```ts
filterNumbers()
filterStrings()
filterUsers()
```

❌ Repetition  
❌ Maintenance problem  

---

# 🟢 Generics Se Kya Mila?

Ek hi function:

```ts
filter<T>()
```

Sab type handle karega.

---

# 🧠 Final Understanding

Filter function:

- Array type T lega
- Predicate me same T milega
- Return bhi T[] karega

Yeh hi generics ka real-world power hai 🔥

---

# 🏁 Summary

| Without Generics | With Generics |
|------------------|--------------|
| any everywhere | Fully typed |
| Unsafe | Safe |
| Not scalable | Reusable |
| Bug prone | Predictable |

---

Ab tumne generics ka practical implementation dekh liya 💪  
Agla step hoga compare karna:

👉 Function Overloads vs Generics  
Aur tum dekhoge generics kitna powerful aur clean solution dete hain.