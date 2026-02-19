# 🔥 Parameter Destructuring in TypeScript

Jaise JavaScript me parameter destructuring hoti hai, waise hi TypeScript me bhi hoti hai —  
lekin yaha extra benefit milta hai 👉 **strict typing + type inference**.

Aaj hum dekhenge:

- Parameter destructuring kya hoti hai
- TypeScript kaise types infer karta hai
- Strict type safety ka benefit

---

# 🟢 Step 1: Ek Type Declare Karte Hain

Maan lo humare paas ek object type hai:

```ts
type Numbers = {
  a: number;
  b: number;
  c: number;
};
```

Is object me 3 properties hain:

- `a` → number  
- `b` → number  
- `c` → number  

---

# 🟢 Step 2: Normal Function (Without Destructuring)

```ts
function sum(numbers: Numbers): number {
  return numbers.a + numbers.b + numbers.c;
}
```

Yaha:

- Parameter = `numbers`
- Type = `Numbers`
- Access karne ke liye likhna padta hai:
  ```
  numbers.a
  numbers.b
  numbers.c
  ```

❌ Thoda lengthy lag raha hai.

---

# 🟢 Step 3: Parameter Destructuring

Ab hum destructuring use karte hain:

```ts
function sum({ a, b, c }: Numbers): number {
  return a + b + c;
}
```

---

## 🧠 Kya Hua Yaha?

- `{ a, b, c }` → object destructuring
- `: Numbers` → type annotation

Ab:

✔ `a` direct available  
✔ `b` direct available  
✔ `c` direct available  

No need to write `numbers.a` again and again.

---

# 🟢 Object Create Karna

```ts
const numbers: Numbers = {
  a: 2,
  b: 3,
  c: 4
};
```

---

# 🟢 Function Call

```ts
console.log(sum(numbers));
```

Output:

```
9
```

---

# 🟢 Type Safety Proof

Agar galat type pass karein:

```ts
sum({
  a: 2,
  b: 3,
  c: "hello"
});
```

❌ Error:

```
Type 'string' is not assignable to type 'number'
```

TypeScript immediately pakad lega mistake.

---

# 🟢 Type Inference Ka Magic

Kyuki humne:

```ts
: Numbers
```

lagaya hai function parameter me,

TypeScript automatically samajh gaya:

- `a` is number
- `b` is number
- `c` is number

Hume individually type declare karne ki zarurat nahi padi.

---

# 🟢 Why Use Destructuring?

✔ Code clean ho jata hai  
✔ Repeated object access nahi likhna padta  
✔ Strong type safety milti hai  
✔ JavaScript jaisa hi syntax  

---

# 🧠 Final Takeaway

Parameter destructuring in TypeScript:

```
function example({ prop1, prop2 }: TypeName)
```

- Clean syntax
- Strong typing
- Automatic inference
- Fully type-safe

---

Ab tum destructuring confidently use kar sakte ho TypeScript functions me 🚀