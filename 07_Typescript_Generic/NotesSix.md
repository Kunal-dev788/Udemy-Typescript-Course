# 🎯 Generics with Default Types in TypeScript – Hinglish Notes

Aaj hum dekhenge ki **generics ko default type kaise assign karte hain** 🔥  
Yeh bahut useful hota hai jab function flexible bhi ho aur type-safe bhi.

---

# 🟢 Real Scenario – Fetch Data Function

Maan lo hum ek async function bana rahe hain:

```ts
async function fetchData(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
```

Problem kya hai? 🤔

- Yeh function kuch bhi return kar sakta hai
- TypeScript ko pata nahi data ka type kya hai
- Return type automatically `any` ho jaata hai ❌

---

# 🟢 Strict Typing with Generics

Ab hum generic use karenge.

```ts
async function fetchData<T = any>(url: string): Promise<T> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
```

---

## 🧠 Breakdown

### 1️⃣ `<T = any>`

Yeh bol raha hai:

> Agar user koi type specify nahi kare, toh default type `any` use karo.

### 2️⃣ `Promise<T>`

Function promise return karega  
Aur promise resolve hoga type `T` mein.

---

# 🟢 Default Generic Ka Fayda

Agar user type specify nahi karta:

```ts
const data = await fetchData("some-url");
```

Toh:

``` id="ts-default-1"
data → any
```

Function still kaam karega ✔

---

# 🟢 Proper Type Safety Kaise Milegi?

Ab maan lo API ek post return karta hai.

JSON Placeholder se sample response:

```json
{
  "userId": 1,
  "id": 1,
  "title": "some title",
  "body": "some body"
}
```

---

# 🟢 Step 1 – Post Type Banate Hain

```ts
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
```

---

# 🟢 Step 2 – Generic Type Specify Karte Hain

```ts
const post = await fetchData<Post>(
  "https://jsonplaceholder.typicode.com/posts/1"
);
```

Ab TypeScript ko pata hai:

``` id="ts-default-2"
post → Post type
```

✔ userId available  
✔ id available  
✔ title available  
✔ body available  

---

# 🟢 Difference Samjho

## ❌ Without Generic

```ts
const data = await fetchData(url);
```

``` id="ts-default-3"
data → any
```

TypeScript kuch bhi allow karega.

---

## ✅ With Generic

```ts
const post = await fetchData<Post>(url);
```

``` id="ts-default-4"
post → Post
```

Ab agar:

```ts
post.unknownProperty
```

TypeScript error dega 🔥

---

# 🟢 Default Generic Kyu Useful Hai?

Agar default na hota toh har baar type dena padta:

```ts
fetchData<any>(url);
```

Default se:

```ts
fetchData(url);
```

Automatically `any` use ho jaata hai.

---

# 🧠 Important Concept

```ts
<T = any>
```

Iska matlab:

- T ek generic type variable hai
- Agar user specify kare → woh type use hoga
- Agar specify na kare → `any` use hoga

---

# 🟢 Generic Default Kab Use Karte Hain?

✔ Fetch functions  
✔ API wrappers  
✔ Utility libraries  
✔ Reusable components  

---

# 🟢 Aur Example

Agar default ko `unknown` karna ho:

```ts
async function fetchData<T = unknown>(url: string): Promise<T> {
```

Ab safer ho jaata hai, kyuki `unknown` direct use nahi kar sakte without type checking.

---

# 🏁 Final Summary

## 🎯 Generic Default Syntax

```ts
<T = DefaultType>
```

---

## 🚀 Async Function Generic

```ts
async function fn<T = any>(): Promise<T>
```

---

## 🔥 Benefits

✔ Flexible  
✔ Reusable  
✔ Type Safe  
✔ Optional Type Argument  

---

Ab tum generics ka ek aur powerful feature master kar chuke ho 😎🔥  
Agla level aur bhi interesting hone wala hai.