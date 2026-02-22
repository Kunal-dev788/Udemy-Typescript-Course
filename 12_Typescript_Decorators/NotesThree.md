# 🔥 Method Decorator Se Method Modify Karna (Stage 3)

Pichle lecture me humne simple decorators banaye the:

- `methodLogger`
- `classDecorator`

Ab tak wo sirf console pe target aur context print kar rahe the.

Is lecture me hum dekhenge kaise:

👉 Method ko actually modify karte hain  
👉 Original method ko replace karte hain  
👉 Aur powerful behavior add karte hain  

---

# 🟢 Step 1: Sirf Method Decorator Pe Focus

Class decorator hata dete hain.  
Ab sirf method decorator pe kaam karenge.

```ts
function methodLogger(originalMethod: any, context: any) {
  // modify karenge yahan
}
```

Yaha `originalMethod` actually greet method hai.

Iska matlab:

✔ Hume greet ka access mil gaya  
✔ Hum ise modify kar sakte hain  
✔ Replace bhi kar sakte hain  

---

# 🟢 Step 2: Replacement Function Banana

Decorator ke andar ek naya function banate hain jo original method ko replace karega.

```ts
function methodLogger(originalMethod: any, context: any) {

  function replacementMethod(this: any, ...args: any[]) {
    console.log(args);
    console.log(this);
  }

  return replacementMethod;
}
```

Important:

Agar method decorator se function return karte ho  
To TypeScript samajh jata hai:

👉 Ye replacement function hai  
👉 Ye original method ko replace karega  

---

# 🟢 Step 3: Class Aur Method

```ts
class Person {
  constructor(public name: string) {}

  @methodLogger
  greet() {
    console.log(`Hello my name is ${this.name}`);
  }
}
```

Ab replacementMethod greet ko replace karega.

---

# 🟢 Important: Decorator Kab Run Hota Hai?

Decorator compile time pe run hota hai.

Lekin replacement function tab tak run nahi hoga jab tak method call nahi karte.

---

# 🟢 Step 4: Method Invoke Karna

```ts
const user = new Person("John");
user.greet();
```

Output:

- args → []
- this → Person instance

Yaha:

✔ args empty hai (kyunki greet me argument nahi hai)  
✔ this → Person object hai  

---

# 🟢 Step 5: Original Method Ko Call Karna

Agar hum sirf replace kar dein aur original method call na karein,  
to greet ka original behavior khatam ho jayega.

Original method call karne ka sahi tareeka:

```ts
const result = originalMethod.call(this, ...args);
```

⚠ Important:

Direct `originalMethod()` nahi call kar sakte.

Kyuki:

- Usme correct `this` context lose ho jayega.
- Isliye `.call(this, ...args)` use karte hain.

---

# 🟢 Final Working Version

```ts
function methodLogger(originalMethod: any, context: any) {

  function replacementMethod(this: any, ...args: any[]) {

    console.log("Method invocation started");

    const result = originalMethod.call(this, ...args);

    console.log("Method invocation ended");

    return result;
  }

  return replacementMethod;
}
```

---

# 🟢 Ab Output Kya Hoga?

```ts
const user = new Person("John");
user.greet();
```

Console Output:

```
Method invocation started
Hello my name is John
Method invocation ended
```

🔥 Ab decorator method ko wrap kar raha hai.

---

# 🟢 Step 6: Arguments Ka Example

Agar greet me parameter ho:

```ts
greet(greeting: string) {
  console.log(`${greeting}, ${this.name}`);
}
```

Call:

```ts
user.greet("Hello");
```

Replacement method me:

- `args` → ["Hello"]
- `this` → Person instance

Iska matlab:

✔ Saare arguments available hain  
✔ this context available hai  
✔ Full control mil gaya  

---

# 🧠 Ye Powerful Kyu Hai?

Is pattern ko kehte hain:

### Method Wrapping

Iska use hota hai:

- Logging
- Performance tracking
- Authorization
- Validation
- Error handling
- Caching
- Auditing

Yahi technique frameworks use karte hain internally.

---

# 🟢 Core Concept Samjho

Decorator:

- Original method ko intercept karta hai
- Replacement function return karta hai
- Original method ko call bhi kar sakta hai
- Behavior modify bhi kar sakta hai

---

# 🏁 Final Understanding

✔ Method decorator original method ko replace kar sakta hai  
✔ this context preserve karna zaroori hai  
✔ Arguments automatically milte hain  
✔ .call(this, ...args) use karna hota hai  
✔ Decorator compile time pe run hota hai  
✔ Replacement method runtime pe run hota hai  

---

Ab aap samajh gaye ho:

Decorators sirf metadata ke liye nahi  
Wo actual behavior modify kar sakte hain 💥  

Next videos me aur advanced use cases dekhenge.