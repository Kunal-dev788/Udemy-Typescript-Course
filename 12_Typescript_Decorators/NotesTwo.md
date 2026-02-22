# 🎯 Pehla Decorator – Method & Class Decorator (Stage 3)

Ab hum practical start karte hain 🚀  
Is video me hum apna **first method decorator** aur ek **class decorator** banayenge.

---

# 🟢 Step 1: Ek Simple Class Banate Hain

```ts
class Person {
  constructor(public name: string) {}

  greet() {
    console.log(`Hello my name is ${this.name}`);
  }
}
```

✔ Constructor me shorthand use kiya  
✔ `greet()` method console me message print karta hai  

Ab hum is method pe decorator lagayenge.

---

# 🟢 Step 2: Simple Method Decorator Banana

Decorator ek normal function hota hai:

```ts
function methodLogger(target: any, context: any) {
  console.log(target);
  console.log(context);
}
```

👉 Stage 3 decorators me automatically 2 parameters milte hain:

1. **target** → original method
2. **context** → metadata about method

---

# 🟢 Step 3: Decorator Apply Karna

Decorator apply karne ke liye `@` symbol use hota hai:

```ts
class Person {
  constructor(public name: string) {}

  @methodLogger
  greet() {
    console.log(`Hello my name is ${this.name}`);
  }
}
```

Jaise hi aap decorator lagate ho, console me output dikhega.

---

# 🟢 Target Kya Hota Hai?

Target basically original method hota hai.

Agar hum rename karein:

```ts
function methodLogger(originalMethod: any, context: any) {
  console.log(originalMethod);
}
```

Ye actual `greet` method ka reference hota hai.

---

# 🟢 Context Me Kya Milta Hai?

Console me context print karoge to kaafi info milegi:

Important properties:

- `kind` → "method"
- `name` → "greet"
- `static` → false
- `private` → false
- `addInitializer` → function
- `access` → object

Matlab decorator ko pata hota hai:

✔ Ye method decorator hai  
✔ Method ka naam kya hai  
✔ Static hai ya nahi  
✔ Private hai ya nahi  

---

# 🚨 Very Important Concept

Notice karo:

Humne class ka object banaya hi nahi.

```ts
// No new Person()
```

Phir bhi decorator run ho gaya 😮

👉 Iska matlab:

Decorators run hote hain **compile time pe**  
Jab TypeScript → JavaScript transpile hota hai.

---

# 🧠 Important Takeaway

✔ Decorators runtime pe nahi chalte  
✔ Sirf ek baar chalte hain  
✔ Compilation ke waqt chalte hain  
✔ JavaScript me directly exist nahi karte  

Ye TypeScript ka compile-time feature hai.

---

# 🟢 Ab Ek Class Decorator Banate Hain

```ts
function classDecorator(target: any, context: any) {
  console.log(target);
  console.log(context);
}
```

Apply karne ka tareeka:

```ts
@classDecorator
class Person {
  constructor(public name: string) {}

  greet() {
    console.log(`Hello my name is ${this.name}`);
  }
}
```

---

# 🟢 Class Decorator Me Kya Milta Hai?

Target → pura class constructor milta hai

Context me:

- `kind` → "class"
- `name` → "Person"
- `addInitializer`
- etc.

Matlab decorator ko pata hota hai:

✔ Ye class decorator hai  
✔ Class ka naam kya hai  

---

# 🟢 Method vs Class Decorator Difference

| Feature | Method Decorator | Class Decorator |
|----------|-----------------|----------------|
| kind | "method" | "class" |
| target | original method | class constructor |
| context.name | method name | class name |

---

# 🟢 Big Understanding

Decorators:

- Metadata provide karte hain
- Class ya method ko inspect karne dete hain
- Compile time pe run hote hain
- Code ko modify bhi kar sakte hain (aage dekhenge)

---

# 🏁 Summary

✔ Method decorator banaya  
✔ Class decorator banaya  
✔ target aur context samjha  
✔ Dekha decorators compile time pe run hote hain  
✔ Class instantiate kiye bina bhi decorator run hota hai  

---

Next videos me hum:

🔥 Method ko modify karenge  
🔥 addInitializer use karenge  
🔥 Actual behavior change karenge  

Ab decorators interesting hone wale hain 😎