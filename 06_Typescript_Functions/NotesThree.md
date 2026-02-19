# 🔥 Functions Inside Objects + Anonymous Functions (TypeScript)

Is lecture me hum 2 important concepts cover kar rahe hain:

1️⃣ Function Call Signatures (objects ke andar function type karna)  
2️⃣ Anonymous Functions me Type Inference  

---

# 🟢 Part 1 – Function Call Signatures

Maan lo humare paas ek `Person` type hai.

Ab hume usme ek function add karna hai:

👉 `greet` – jo greeting return kare

---

## 🎯 Function Call Signature Kya Hota Hai?

Ye ek special syntax hota hai jo batata hai:

- Function ke parameters kya honge
- Function kya return karega

### Example:

```ts
type Person = {
  name: string;
  age: number;

  greet: (greeting: string) => string;
};
```

### Breakdown:

```
(greeting: string) => string
```

- `(greeting: string)` → parameter
- `=> string` → return type

Ye arrow function jaisa dikhta hai,  
but ye actual function nahi hai.

👉 Ye sirf type definition hai.

---

## ❌ Loose Way (Avoid This)

```ts
greet: Function;
```

Ye strict nahi hai.

Isme:
- Parameter type define nahi
- Return type define nahi

Better hai proper function call signature use karo.

---

# 🟢 Function Call Signature as Type Alias

Tum isse separate type bhi bana sakte ho:

```ts
type GreetingFunction = (greeting: string) => string;
```

Phir use karo:

```ts
type Person = {
  name: string;
  age: number;
  greet: GreetingFunction;
};
```

Ye approach:
✔ Clean hai  
✔ Reusable hai  
✔ Large projects me useful hai  

---

# 🟢 Person Object with greet()

```ts
let person: Person = {
  name: "Scott",
  age: 30,

  greet: function (greeting: string) {
    return `${greeting} ${this.name}`;
  },
};
```

---

## 🟢 Function Call

```ts
console.log(person.greet("Hello"));
```

Output:

```
Hello Scott
```

---

# 🟢 Part 2 – Anonymous Functions & Type Inference

Ab dekhte hain TypeScript ka magic 😎

---

## 🎯 Example – Students Array

```ts
const students: string[] = ["Alice", "Bob", "Mark"];
```

Ab map use karte hain:

```ts
students.map((student) => {
  console.log(student);
});
```

---

## 🤯 Important Point

Humne `student` ka type define nahi kiya.

Phir bhi TypeScript automatically infer karta hai:

```
student: string
```

Kyuki:

- students → string[]
- map → har element return karega
- element → string hoga

Ye hota hai **automatic inference**.

---

## 🟢 Named Anonymous Function

Arrow function ki jagah:

```ts
students.map(function (student) {
  console.log(student);
});
```

Yaha bhi:

✔ student ka type automatically string hoga  
✔ TypeScript smartly infer karta hai  

---

# 🧠 Key Takeaways

## ✅ Function Call Signature
```
(propertyName): (params) => returnType
```

Use karo jab:
- Object ke andar function ho
- Strict typing chahiye

---

## ✅ Type Alias for Function
Reusable function types banane ke liye best practice.

---

## ✅ Anonymous Functions me Inference

- Array ka type pata ho
- To callback parameter automatically infer ho jata hai

---

# 🚀 Final Understanding

✔ Objects me functions strictly type karne ke liye → Function Call Signature  
✔ Reusability ke liye → Function Type Alias  
✔ Anonymous functions me → TypeScript automatically infer karta hai  

---

Ab tum TypeScript me:

- Strict object methods bana sakte ho
- Clean reusable function types likh sakte ho
- Confidently anonymous callbacks use kar sakte ho 💪