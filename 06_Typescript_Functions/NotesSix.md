# 🔥 Rest Parameters in TypeScript (Strict Typing)

Is lecture me hum dekhenge:

- Unlimited parameters ko strictly kaise type karein
- Rest parameter ka syntax
- Fixed length arguments (tuple) ka use
- Real examples

---

# 🟢 Problem Statement

Kya hoga agar:

- Ek function me first parameter mandatory ho
- Baaki unlimited parameters allow ho
- Aur sab strictly typed hone chahiye?

Example:  
Multiply numbers by a given number.

---

# 🟢 Basic Function Structure

```ts
function multiplyBy(by: number, ...numbers: number[]): number[] {
  return numbers.map(num => num * by);
}
```

---

## 🧠 Breakdown

### `by: number`
→ Mandatory parameter

### `...numbers: number[]`
→ Rest parameter  
→ Always array hota hai  
→ Yaha sirf numbers allow hain

---

# 🟢 Function Call Example

```ts
multiplyBy(2, 3, 4, 5);
```

Output:

```
[6, 8, 10]
```

---

## ❌ Wrong Usage

```ts
multiplyBy(2, 3, "hello");
```

TypeScript error dega:

> string is not assignable to number

---

# 🟢 Important Rule

Rest parameter:

```
...paramName: Type[]
```

✔ Always array type hota hai  
✔ Unlimited values allow karta hai  
✔ Strict typing enforce karta hai  

---

# 🟢 Limited Arguments Problem (Only 2 Numbers Allowed)

Ab maan lo hume sirf **2 numbers** pass karne hain.

Example:

```ts
Math.atan2(x, y);
```

Ye function exactly 2 arguments leta hai.

Agar hum normal array use karein:

```ts
const args: number[] = [8, 5];
Math.atan2(...args);
```

❌ Error aa sakta hai  
Kyuki number[] ka length unknown hai.

---

# 🟢 Solution → Tuple Use Karein

### Method 1: `as const`

```ts
const args = [8, 5] as const;
Math.atan2(...args);
```

Ab TypeScript samajh gaya:

- Ye readonly tuple hai
- Fixed length = 2
- Dono numbers hain

---

### Method 2: Explicit Tuple Type

```ts
const args2: [number, number] = [8, 5];
Math.atan2(...args2);
```

✔ Ye clean aur clear method hai  
✔ Tuple strict length enforce karta hai  

---

# 🟢 Difference: Rest vs Tuple

| Feature | Rest Parameter | Tuple |
|----------|---------------|--------|
| Length | Unlimited | Fixed |
| Type | Same type array | Fixed position types |
| Use Case | Flexible arguments | Strict count required |

---

# 🟢 Summary

### ✅ Rest Parameters

```
function example(...nums: number[])
```

- Unlimited values
- Strict type
- Always array

---

### ✅ Tuple

```
[number, number]
```

- Fixed length
- Position-based typing
- Strict control

---

# 🧠 Final Takeaway

- Unlimited strict parameters → Rest parameter use karo
- Fixed number of parameters → Tuple use karo
- TypeScript dono cases me strong type safety deta hai

---

Ab tum confidently flexible aur strict dono type ke functions bana sakte ho 💪