# 🏛️ Class Decorators in TypeScript (Stage 3)

Ab tak hum:

✔ Method decorators  
✔ Field decorators  
✔ Strict typing  

sab dekh chuke hain 💪

Ab baat karte hain **Class Decorators** ki.

---

# 🟢 Goal

Hum ek decorator banana chahte hain:

```
@addGreetMethod
```

Jo kisi class me automatically `greet()` method add kare.

Matlab agar class me greet method nahi hai,  
decorator usko inject kar de 🚀

---

# 🟢 Step 1 — Basic Author Class

```ts
class Author {
  constructor(public name: string) {}
}
```

Isme greet method nahi hai.

---

# 🎯 Requirement

Agar class pe:

```
@addGreetMethod
```

lagaya jaye toh:

```
author.greet("Hello")
```

kaam karna chahiye.

---

# 🟢 Step 2 — Class Decorator Banana

```ts
function addGreetMethod<
  T extends new (...args: any[]) => any
>(
  target: T,
  context: ClassDecoratorContext<T>
) {
```

---

## 🧠 Samjho Generic

```
T extends new (...args: any[]) => any
```

Ye kya bol raha hai?

👉 T ek constructor hona chahiye  
👉 Matlab ye decorator sirf class pe lagega  

Kyuki sirf class ke paas constructor hota hai.

---

# 🟢 Step 3 — Return New Class

Class decorator me hum kya return karte hain?

👉 Ek naya class

```ts
return class extends target {
```

Iska matlab:

- Naya class create ho raha hai
- Wo original class ko extend kar raha hai

---

# 🟢 Step 4 — Constructor Handle Karna

```ts
constructor(...args: any[]) {
  super(...args);
}
```

Important hai:

- Parent class ka constructor call karna zaroori hai
- Warna parent properties initialize nahi hongi

---

# 🟢 Step 5 — greet Method Add Karna

```ts
greet = (greeting: string): void => {
  console.log(`${greeting}, ${this.name}. Have a great day!`);
};
```

Ab decorator new class return karega jisme greet method hai.

---

# 🟢 Full Decorator Code

```ts
function addGreetMethod<
  T extends new (...args: any[]) => any
>(
  target: T,
  context: ClassDecoratorContext<T>
) {

  return class extends target {

    constructor(...args: any[]) {
      super(...args);
    }

    greet = (greeting: string): void => {
      console.log(`${greeting}, ${this.name}. Have a great day!`);
    };

  };
}
```

---

# 🟢 Decorator Apply Karna

```ts
@addGreetMethod
class Author {
  constructor(public name: string) {}
}
```

---

# 🟢 Use It

```ts
const author = new Author("Mark");
author.greet("Hello");
```

Console:

```
Hello, Mark. Have a great day!
```

🔥 Method dynamically add ho gaya.

---

# ⚠️ Problem

Runtime pe sab sahi hai.

Lekin TypeScript error deta hai:

```
Property 'greet' does not exist on type 'Author'
```

Kyuki Author class me officially greet method defined nahi hai.

Decorator ne runtime pe add kiya hai,
TypeScript ko nahi pata.

---

# 🟢 Solution — Interface Bridge Pattern

Hum ek base class banayenge:

```
Greetable
```

Ye act karega:

> Contract / Interface ke tarah

---

# 🟢 Step 6 — Greetable Class

```ts
class Greetable {

  constructor(public name: string) {}

  greet(greeting: string): void {
    // Empty implementation
  }
}
```

Ye sirf structure define kar raha hai.

---

# 🟢 Step 7 — Author Ko Extend Karna

```ts
@addGreetMethod
class Author extends Greetable {

  constructor(name: string) {
    super(name);
  }
}
```

Ab TypeScript ko pata hai:

✔ Author ke paas greet method hai  
✔ name property bhi hai  

Error chala gaya ✅

---

# 🟢 Strict Generic Improve Karna

Ab decorator ko aur strict bana dete hain.

Instead of:

```
=> any
```

Hum likhenge:

```
=> Greetable
```

```ts
function addGreetMethod<
  T extends new (...args: any[]) => Greetable
>(
  target: T,
  context: ClassDecoratorContext<T>
)
```

Ab decorator sirf un classes pe lagega:

✔ Jo Greetable ko extend karte hain  
❌ Random classes pe nahi lagega  

---

# 🧠 Flow Samjho

```
Decorator apply hota hai →
New class create hota hai →
Original class extend hota hai →
greet method inject hota hai →
Type safety maintain hoti hai
```

---

# 🟢 Important Concepts

| Concept | Meaning |
|----------|---------|
| Class Decorator | Class ko modify karta hai |
| Return New Class | Original class replace hota hai |
| Constructor Extend | Parent constructor call zaroori |
| Bridge Class | TypeScript ko method ka pata dena |

---

# 🔥 Final Understanding

Class decorators powerful hote hain:

✔ Methods inject kar sakte hain  
✔ Properties inject kar sakte hain  
✔ Class ko wrap kar sakte hain  
✔ Behavior override kar sakte hain  

---

# 🚀 Summary

Aaj tumne seekha:

✔ Class decorators kaise return karte hain new class  
✔ Constructor inheritance kaise handle hota hai  
✔ Runtime vs TypeScript typing issue  
✔ Bridge class pattern  
✔ Strict generics for class decorators  

---

Ab tum officially advanced decorator zone me ho 😄  
Agla level aur bhi powerful hoga 🚀