# 🔥 Discriminated Union in TypeScript (Very Important Concept)

---

# 🎯 Lecture Goal

Is lecture me hum samjhenge:

- Discriminated Union kya hota hai  
- Common literal property ka use kaise hota hai  
- Union types ko safely kaise narrow karte hain  
- Real-world network example  

Ye concept real projects me bahut use hota hai 🚀

---

# 🌐 Real-World Example – Network States

Assume karo hum ek network app bana rahe hain.

Network ke 3 states ho sakte hain:

1. Loading  
2. Failed  
3. Success  

Toh hum 3 alag-alag types banayenge.

---

# 🟢 Step 1 – Loading State

```ts
type NetworkLoadingState = {
  state: "loading";
};
```

📌 Yaha `state` ki value literal `"loading"` hai.  
Ye string nahi hai — ye exact literal type hai.

---

# 🟢 Step 2 – Failed State

```ts
type NetworkFailedState = {
  state: "failed";
  code: number;
};
```

Yaha extra property hai:

- `code` → error code

---

# 🟢 Step 3 – Success State

```ts
type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};
```

Success me nested object hai:

- title
- duration
- summary

---

# 🟣 Step 4 – Union Banana

```ts
type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;
```

Ab `NetworkState` ek union hai.

Iska matlab:

Network ya toh:
- loading hai
- failed hai
- success hai

---

# 🧠 Important Point

Sab types me ek common property hai:

```
state
```

Aur har type me iski literal value alag hai:

- "loading"
- "failed"
- "success"

👉 Ye hi hai **discriminator property**.

Isi base pe TypeScript narrow karega.

---

# 🟢 Step 5 – Logger Function

Ab hum ek function banate hain:

```ts
function logger(state: NetworkState) {
  switch (state.state) {
    case "loading":
      return "Network is loading...";

    case "failed":
      return `Error Code: ${state.code}`;

    case "success":
      return `Response Title: ${state.response.title}`;
  }
}
```

---

# 🧠 Yaha Magic Kya Hua?

Jab hum likhte hain:

```ts
case "failed":
```

TypeScript automatically samajh jata hai ki:

> Ab state ka type NetworkFailedState hai.

Isliye:

```ts
state.code
```

Allowed hai ✅

---

# ❌ Agar Bahar Access Karein

Agar hum switch ke bahar likhen:

```ts
state.code
```

Toh TypeScript error dega ❌

Kyun?

Kyuki:

- state loading bhi ho sakta hai
- state success bhi ho sakta hai
- code sirf failed me exist karta hai

---

# 🔥 Ye Hi Hai Discriminated Union

Common property + literal values  
→ TypeScript automatically narrow karta hai  
→ Safe property access milta hai  

---

# 🧠 Simple Rule Yaad Rakho

Discriminated union me:

- Sab types me ek common property hoti hai
- Us property ki literal values different hoti hain
- Us property ke base pe narrowing hoti hai

---

# 🧪 Real-Life Usage

Discriminated unions use hote hain:

- API responses
- Form submission states
- Async loading states
- Redux reducers
- State machines

---

# 🚀 Quick Revision

| Concept | Meaning |
|----------|----------|
| Union | Multiple possible types |
| Discriminator | Common literal property |
| Narrowing | Switch / if se type safe access |
| Benefit | No runtime errors |

---

# 🏁 Final Line

> Discriminated union = Type-safe state handling 🔥  
> Real-world applications me ye bahut powerful pattern hai.

Next lecture me aur advanced concepts aayenge 💪