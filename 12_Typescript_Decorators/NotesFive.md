# 🏭 Decorator Factory in TypeScript (Stage 3)

Aaj hum ek powerful concept samjhenge:

> **Decorator Factory**

---

# 🎯 Pehle Samjho: Problem Kya Hai?

Abhi tak hum decorator aise use kar rahe the:

```ts
@methodLogger
greet() {}
```

Ye simple decorator hai.

Lekin kya hoga agar hum chahte ho ki:

- User decorator ko invoke kare
- Aur kuch custom value pass kare
- Jaise: log prefix, error prefix, warning prefix etc.

Example:

```ts
@methodLogger("LOG")
```

Ya:

```ts
@methodLogger("ERROR")
```

Ab decorator dynamic ho gaya.

Isi ke liye chahiye **Decorator Factory**.

---

# 🟢 Decorator Factory Kya Hota Hai?

Simple definition:

> Decorator Factory ek function hota hai  
> Jo decorator ko return karta hai

Structure:

```
Factory → returns Decorator → returns Replacement Function
```

3 layers hote hain.

---

# 🟢 Step 1: Current Decorator Structure

Normal decorator:

```ts
function methodLogger(originalMethod: any, context: any) {
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

# 🟢 Step 2: Isko Factory Me Convert Karna

Ab hum isko wrap karenge ek outer function me.

```ts
function methodLogger(logPrefix: string) {
  return function (originalMethod: any, context: any) {

    function replacement(this: any, ...args: any[]) {

      console.log(`${logPrefix} Invocation started`);

      const result = originalMethod.call(this, ...args);

      console.log(`${logPrefix} Invocation ended`);

      return result;
    }

    return replacement;
  };
}
```

---

# 🧠 Samjho Structure

### 🔹 Outer Function
```ts
function methodLogger(logPrefix: string)
```

Ye hai **Decorator Factory**

Yaha user se argument milega.

---

### 🔹 Middle Function
```ts
(originalMethod, context)
```

Ye actual decorator hai.

---

### 🔹 Inner Function
```ts
replacement()
```

Ye original method ko replace karta hai.

---

# 🟢 Ab Decorator Kaise Use Hoga?

Ab simple decorator ki tarah nahi use hoga.

Ab isko invoke karna padega:

```ts
@methodLogger("LOG")
greet() {}
```

Ya:

```ts
@methodLogger("ERROR")
```

---

# 🟢 Example Full Code

```ts
class Person {
  constructor(public name: string) {}

  @methodLogger("LOG")
  greet(greeting: string) {
    console.log(`${greeting}, ${this.name}`);
  }
}

const user = new Person("John");
user.greet("Hello");
```

---

# 🟢 Output

```
LOG Invocation started
Hello, John
LOG Invocation ended
```

Agar change kar do:

```ts
@methodLogger("ERROR")
```

Output:

```
ERROR Invocation started
Hello, John
ERROR Invocation ended
```

---

# 🧠 Why Decorator Factory Useful?

Decorator Factory allow karta hai:

✔ User custom behavior define kare  
✔ Logging customize kare  
✔ Role-based logic inject kare  
✔ Feature flags add kare  
✔ Metadata pass kare  

Without changing original decorator logic.

---

# 🎯 Big Difference

Normal decorator:

```
@methodLogger
```

Decorator factory:

```
@methodLogger("customValue")
```

---

# 🟢 Important Concept

Remember:

Decorator Factory = Function  
Jo return karta hai → Decorator  
Jo return karta hai → Replacement Function  

3 Layer Flow:

```
Factory Call
   ↓
Decorator Execute (compile time)
   ↓
Replacement Run (runtime)
```

---

# 🧠 Final Understanding

Decorator Factory decorator ko:

✔ Configurable banata hai  
✔ Dynamic banata hai  
✔ Reusable banata hai  

Ye especially useful hota hai:

- Logging frameworks
- Validation systems
- Authorization layers
- Angular/Nest style decorators

---

Next videos me aur advanced decorator patterns dekhenge 🚀