# 🔥 Function Overloading in TypeScript (Easy Hinglish Notes)

JavaScript functions dynamic hote hain:

- Different number of arguments accept kar sakte hain  
- Different types ke arguments le sakte hain  
- Arguments ke hisaab se different result return kar sakte hain  

Example: `slice()` method

```ts
"Hello World".slice(7);     // "World"
"Hello World".slice(7, 10); // "Wor"
```

Same function → different arguments → different output.

TypeScript me agar hume aisi dynamic behavior wali function banana ho,  
toh hum use karte hain:

# 🚀 Function Overloading

---

# 🟢 Real Example: Reservation System

Maan lo hum flight reservation system bana rahe hain.

User:

- One-way ticket book kar sakta hai  
- Ya return ticket book kar sakta hai  

---

# 🟢 Reservation Type

```ts
type Reservation = {
  departureDate: Date;
  returnDate?: Date;   // optional
  departingFrom: string;
  destination: string;
};
```

Return date optional hai kyunki one-way trip bhi possible hai.

---

# 🟢 Problem

Reserve function ko:

✔ 4 arguments accept karne chahiye (return trip)  
✔ 3 arguments accept karne chahiye (one-way trip)

Normal function me ye directly possible nahi hai.

Yaha use hota hai:

# 🔥 Function Overloading

---

# 🟢 Overload Signature (Call Signature Style)

```ts
type Reserve = {
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string
  ): Reservation;

  (
    departureDate: Date,
    departingFrom: string,
    destination: string
  ): Reservation;
};
```

Ab `Reserve` function:

- 4 parameters accept kar sakta hai
- 3 parameters bhi accept kar sakta hai

---

# 🟢 Function Implementation

```ts
const reserve: Reserve = (
  departureDate: Date,
  returnDateOrDepartingFrom: Date | string,
  departingFromOrDestination: string,
  destination?: string
) => {

  // Case 1: Return trip
  if (returnDateOrDepartingFrom instanceof Date && destination) {
    return {
      departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination
    };
  }

  // Case 2: One-way trip
  if (typeof returnDateOrDepartingFrom === "string") {
    return {
      departureDate,
      departingFrom: returnDateOrDepartingFrom,
      destination: departingFromOrDestination
    };
  }

  throw new Error("Invalid reservation details");
};
```

---

# 🟢 Function Call Examples

## ✔ Return Ticket

```ts
reserve(
  new Date(),
  new Date(),
  "New York",
  "Washington"
);
```

## ✔ One-way Ticket

```ts
reserve(
  new Date(),
  "New York",
  "Washington"
);
```

Dono cases me valid Reservation object milega.

---

# 🧠 Important Points

### 1️⃣ Overloading = Multiple function signatures

Same function name  
Different parameter combinations  

---

### 2️⃣ Implementation ek hi hoti hai

Overload signatures sirf type level pe hoti hain.  
Actual implementation ek hi function me likhi jati hai.

---

### 3️⃣ TypeScript smart hai

Even agar tum parameter types explicitly remove kar do:

```ts
const reserve: Reserve = (
  departureDate,
  returnDateOrDepartingFrom,
  departingFromOrDestination,
  destination?
)
```

TypeScript khud infer kar lega types.

---

# 🟢 Why Use Function Overloading?

✔ Jab function dynamic behavior kare  
✔ Jab multiple argument patterns ho  
✔ Jab strong type safety chahiye  

---

# ⚠️ Reality Check

Real-world me:

- Aise complex overloads kam use hote hain  
- Generics often better solution hota hai  

But:

👉 Concept samajhna important hai  
👉 TypeScript powerful hai  
👉 Tum dynamic JavaScript behavior ko safely type kar sakte ho  

---

# 🎯 Final Summary

Function Overloading in TypeScript:

```
Same function
Multiple signatures
Different argument combinations
Single implementation
Strong type safety
```

Ab tum confidently dynamic functions ko type-safe bana sakte ho 💪🚀