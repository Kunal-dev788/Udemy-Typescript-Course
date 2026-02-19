# 🚀 Generics in TypeScript (Hinglish Notes)

Welcome to **Generics** section 💪  
Ye TypeScript ka ek super powerful feature hai.

Generics tumhe allow karte hain:

- Reusable code likhne ke liye  
- Type-safe polymorphic functions banane ke liye  
- `any` use kiye bina flexible functions banane ke liye  

---

# 🟢 Problem Without Generics

Maan lo ek simple function hai:

```ts
function returnParam(param) {
  return param;
}
```

TypeScript kya samjhega?

```ts
(param: any) => any
```

❌ Input = any  
❌ Output = any  

Ye dangerous hai.  
Type safety gayi.

---

# 🟢 Goal

Hume chahiye:

- Function generic ho  
- Jo type pass karein wahi return ho  
- But `any` use na karein  

---

# 🔥 Enter Generics

Generics ko angle brackets `< >` me define karte hain.

```ts
function returnParam<Type>(param: Type): Type {
  return param;
}
```

Yaha:

- `Type` ek generic variable hai  
- Ye invocation ke time decide hoga  
- Param bhi same type hoga  
- Return bhi same type hoga  

---

# 🟢 Usage Example

### ✔ String ke saath

```ts
const result1 = returnParam<string>("Hello");
```

Now:

- Param = string  
- Return = string  

TypeScript perfectly infer karega.

---

### ✔ Number ke saath

```ts
const result2 = returnParam<number>(123);
```

Ab:

- Param = number  
- Return = number  

Generic flexible bhi hai  
Aur strict bhi hai 💪

---

# 🟢 Generic Arrow Function

```ts
const myParam = <T>(param: T): T => {
  return param;
};
```

Yaha:

- `T` generic hai  
- Param = T  
- Return = T  

---

# 🟢 Generic Function Expression

```ts
const myParam2 = function<U>(param: U): U {
  return param;
};
```

Yaha `U` generic hai.

Generic naam kuch bhi ho sakta hai:
- T
- U
- V
- K

Industry me mostly single-letter generics use hote hain.

---

# 🟢 Generics with Call Signature

```ts
const myParam: <T>(param: T) => T = (param) => {
  return param;
};
```

Yaha:

- Pehle call signature define kiya
- Fir function assign kiya

---

# 🟢 Generics Inside Objects

```ts
type MyObject = {
  myParam: <V>(param: V) => V;
};
```

Object ke andar bhi generic function define kar sakte ho.

---

# 🟢 Multiple Generics

Ek se zyada generics bhi use kar sakte ho:

```ts
function combine<T, U>(value1: T, value2: U): T | U {
  return value1;
}
```

Yaha:

- `T` pehla type
- `U` dusra type
- Return dono ka union ho sakta hai

---

# 🟢 Generic Type Alias

```ts
type MyParam<K> = (param: K) => K;
```

Ye reusable generic function type ban gaya.

---

# 🧠 Simple Understanding

Socho generics ek placeholder hai.

Jaise:

```
T = type jo baad me decide hoga
```

Matlab:

Function template hai  
Type invocation ke time fill hoga  

---

# 🎯 Why Generics Important?

Without generics:
```
any = unsafe
```

With generics:
```
Flexible + Strict
Reusable + Safe
```

---

# 🏁 Final Summary

Generics:

- Angle brackets me declare hote hain `<T>`
- Function ko reusable banate hain
- Type-safe banate hain
- Invocation ke time type decide hota hai
- Multiple generics possible hain
- Objects, functions, type aliases sab me use hote hain

Ye sirf beginning hai 🚀  
Aage aur powerful real-world use cases dekhenge.