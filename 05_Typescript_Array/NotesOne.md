# 📦 Arrays in TypeScript – Complete Easy Guide 🚀

Is lecture me hum dekhenge:

- Primitive arrays ka strict typing  
- Generic syntax (`Array<T>`)  
- Union arrays  
- Array of objects  
- Real-world example with Airplanes ✈️  

---

# 🔢 1️⃣ Array of Numbers

```ts
let a: number[] = [1, 2, 3];
```

### 🧠 Samjho:

- `number[]` ka matlab → array ke andar sirf numbers allowed
- Agar string add karoge → ❌ TypeScript error

✔️ Correct  
❌ `a = [1, "hello"]` → Error

---

# 🔤 2️⃣ Generic Syntax for Arrays

```ts
let b: Array<string> = ["a", "b", "c"];
```

### Ye kya hai?

Alternative syntax hai.

- `Array<string>` = string[]
- Dono ka result same hai

⚠️ Recommendation:
Mostly `string[]` wali simple syntax use karo.
Generics wali syntax baad me useful hoti hai.

---

# 🔀 3️⃣ Mixed Type Array (Using Union)

Agar array me multiple types allowed ho:

```ts
let c: (string | number)[] = ["a", "b", 1];
```

### Important:

- `(string | number)[]`
- Pehle union likho
- Phir array brackets lagao

Agar boolean bhi add karna ho:

```ts
let c: (string | number | boolean)[] = ["a", 1, true];
```

⚠️ Real-world me avoid karo mixed arrays.
Clean structure better hota hai.

---

# 🏗 4️⃣ Real Example – Object Types

Ab hum complex example dekhte hain.

---

## 🍽 Caterer Type

```ts
type Caterer = {
  name: string;
  address: string;
  phone: number;
};
```

---

## 💺 Seats Type (Index Signature)

```ts
type Seats = {
  [keyof: string]: string;
};
```

### Iska matlab:

- Seat name dynamic ho sakta hai (A1, A2, B3 etc.)
- Har key string hogi
- Har value bhi string hogi

Example:
```
A1: "John Doe"
A2: "Mark Doe"
```

---

## ✈️ Airplane Type

```ts
type Airplane = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Caterer;
  seats: Seats;
};
```

### Ye object me kya hai?

- Simple properties
- Nested object (caterer)
- Dynamic object (seats)

---

# 📦 5️⃣ Array of Objects

Ab important part 👇

```ts
type Airplanes = Airplane[];
```

### Ye kya hai?

- Ye ek array hai
- Jisme har element Airplane type ka hoga

Same as:

```ts
type Airplanes = Array<Airplane>;
```

But again — simple syntax better 👍

---

# 🛫 Using Array of Objects

```ts
let airplanes: Airplanes = [
  {
    model: "Airbus A380",
    flightNumber: "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
      name: "Special Food Ltd",
      address: "484, Some Street, New York",
      phone: 7867856751,
    },
    seats: {
      A1: "John Doe",
      A2: "Mark Doe",
      A3: "Sam Doe",
    },
  },
];
```

---

# 🔒 Type Safety in Action

Agar tum koi property remove kar do:

```ts
model: "Airbus A380"
```

❌ TypeScript error dega.

Kyuki har Airplane object ko:
- model
- flightNumber
- timeOfDeparture
- timeOfArrival
- caterer
- seats

Sab chahiye.

---

# 🧠 Important Concepts Recap

### ✅ Primitive Array
```
number[]
string[]
```

### ✅ Generic Syntax
```
Array<string>
```

### ✅ Union Array
```
(string | number)[]
```

### ✅ Array of Objects
```
Airplane[]
```

---

# 🎯 Golden Rule

> Array type = "Inside kya hai" + []

Example:

- number[] → numbers inside
- User[] → User objects inside
- (string | number)[] → mix inside

---

# 🚀 Final Takeaway

✔️ Arrays strict type ho sakte hain  
✔️ Union se mixed arrays possible  
✔️ Object arrays bahut common hain real apps me  
✔️ TypeScript har element validate karta hai  

Ye concept tum bahut jagah use karoge — especially APIs, databases, React props etc.

Next lecture me aur advanced cheezein aayengi 💪🔥