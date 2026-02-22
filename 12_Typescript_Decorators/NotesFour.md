# 🔥 addInitializer in Stage 3 Decorators (Problem + Solution)

Pichle lecture me humne method decorator banaya tha jo method ko replace kar raha tha.

Ab ek important cheez samjhte hain:

👉 `context.addInitializer()` kya karta hai  
👉 Kyun zaroori hai  
👉 Kaunsa problem solve karta hai  

---

# 🟢 Pehle Problem Samjho

Humari class:

```ts
class Person {
  constructor(public name: string) {}

  @methodLogger
  greet(greeting: string) {
    console.log(`${greeting}, ${this.name}`);
  }
}
```

User create karte hain:

```ts
const user = new Person("John");
user.greet("Hello");
```

Sab sahi kaam karta hai.

---

# 🛑 Problem Kab Aata Hai?

Agar koi developer method ko reassign kar de:

```ts
const greet = user.greet;
greet("Hi");
```

❌ Error aata hai.

Kyuki:

- `this` context lose ho jata hai
- greet ab Person instance ka part nahi raha
- `this.name` undefined ho jata hai

JavaScript me ye common issue hai.

---

# 🟢 Ye Problem Kyu Hua?

Yaad karo:

Decorator ne greet method ko replace kiya tha.

Replacement method:

```ts
function replacement(this: any, ...args: any[]) {
  const result = originalMethod.call(this, ...args);
}
```

Jab greet reassign hua:

```ts
const greet = user.greet;
```

Ab `this` global context ya undefined ho gaya.

Isliye name read nahi ho pa raha.

---

# 🟢 Solution: addInitializer()

Decorator ke context me ek method hota hai:

```ts
context.addInitializer()
```

Ye initializer:

👉 Constructor ke andar run hota hai  
👉 Jab instance create hoti hai tab run hota hai  
👉 Hume chance deta hai method ko bind karne ka  

---

# 🟢 Step 1: Method Name Save Karna

```ts
const methodName = context.name;
```

Ye greet ka naam hold karega.

---

# 🟢 Step 2: addInitializer Use Karna

```ts
context.addInitializer(function (this: any) {
  this[methodName] = this[methodName].bind(this);
});
```

---

# 🧠 Ye Line Actually Kya Kar Rahi Hai?

Break karte hain:

### 1️⃣ `this[methodName]`

Ye equivalent hai:

```ts
this.greet
```

Yani Person instance ka greet method.

---

### 2️⃣ `.bind(this)`

Bind kya karta hai?

👉 Ek naya function banata hai  
👉 Jiska `this` permanently fix ho jata hai  

Matlab:

Chahe method reassign ho jaye  
`this` kabhi lose nahi hoga  

---

# 🟢 Ab Final Decorator Structure

```ts
function methodLogger(originalMethod: any, context: any) {

  const methodName = context.name;

  context.addInitializer(function (this: any) {
    this[methodName] = this[methodName].bind(this);
  });

  function replacement(this: any, ...args: any[]) {

    console.log("Invocation started");

    const result = originalMethod.call(this, ...args);

    console.log("Invocation ended");

    return result;
  }

  return replacement;
}
```

---

# 🟢 Ab Reassign Karne Pe Kya Hoga?

```ts
const user = new Person("John");

const greet = user.greet;
greet("Hi");
```

✅ Ab error nahi aayega  
✅ `this` correct rahega  
✅ Name properly print hoga  

---

# 🟢 JavaScript Equivalent Samjho

Normally JS me aise karte hain:

```ts
this.greet = this.greet.bind(this);
```

Decorator me addInitializer same kaam kar raha hai.

Bas difference:

✔ Ye automatically constructor ke andar inject ho raha hai  
✔ Hume manually constructor edit nahi karna padta  

---

# 🟢 Private Method Corner Case

Agar method private ho:

```ts
private greet() {}
```

To decorator fail ho sakta hai.

Isliye safety check laga sakte hain:

```ts
if (context.private) {
  throw new Error("Cannot decorate private method");
}
```

Kyuki private method class ke bahar accessible hi nahi hota.

---

# 🎯 Final Understanding

Problem:
- Method reassign hone par `this` lose ho jata hai

Solution:
- `addInitializer()` use karke method bind kar do

Important Points:

✔ addInitializer constructor ke andar run hota hai  
✔ Ye instance level pe binding karta hai  
✔ Bind se `this` permanently fix ho jata hai  
✔ Ye JS problem ka TS decorator solution hai  

---

# 🧠 Big Picture

Decorators sirf method wrap nahi karte  
Wo constructor behavior bhi modify kar sakte hain  

Aur yahi unko extremely powerful banata hai 💥  

Next lectures me aur advanced decorator behavior dekhenge.