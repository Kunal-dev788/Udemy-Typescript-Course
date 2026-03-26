# 🔐 Strict Typing in Decorators (Stage 3 - TypeScript 5)

Ab tak hum decorators me har jagah `any` use kar rahe the 😅  
Is video me hum seekhenge:

> Decorators ko properly strictly type kaise karein

Step by step easy hinglish me samjhenge.

---

# 🟢 Part 1 — Simple Strict Typing (Basic Level)

Maan lo humare paas ek method decorator hai:

```ts
function bound(target: any, context: any) {}
```

Abhi dono parameters `any` hai.

---

## 🔹 Step 1: Target ko Type Do

Since ye **method decorator** hai:

Target actually ek function hota hai.

To simple type de sakte hain:

```ts
function bound(target: Function, context: any) {}
```

Ye perfect strict nahi hai  
But `any` se better hai 👍

---

## 🔹 Step 2: Context ko Strict Type Do

TypeScript already provide karta hai built-in interfaces:

For method decorators:

```
ClassMethodDecoratorContext
```

To ab hum likh sakte hain:

```ts
function bound(
  target: Function,
  context: ClassMethodDecoratorContext
) {}
```

Ab ye proper strictly typed method decorator ho gaya ✅

---

# 🟢 Available Context Types

TypeScript khud provide karta hai different decorator context types:

- `ClassDecoratorContext`
- `ClassMethodDecoratorContext`
- `ClassFieldDecoratorContext`
- `ClassAccessorDecoratorContext`
- `ClassGetterDecoratorContext`

Har decorator type ke liye alag context hota hai.

---

# 🟢 Part 2 — Advanced Strict Typing Using Generics

Ab chalte hain real powerful example pe:

### Method Logger Decorator Factory

Ab hum isko fully strictly type karenge using generics.

---

# 🎯 Step 1: Generics Add Karo

Hum 3 generics use karenge:

```ts
function methodLogger<
  This,
  Args extends any[],
  Return
>(logPrefix: string) {
```

## 🔹 Ye 3 generics kya represent karte hain?

| Generic | Meaning |
|----------|---------|
| `This` | Class instance type |
| `Args` | Method ke arguments |
| `Return` | Method ka return type |

---

# 🎯 Step 2: Original Method Strict Type Karo

Original method actually ek function hota hai.

To hum type karenge:

```ts
originalMethod: (
  this: This,
  ...args: Args
) => Return
```

Yaha important cheez:

TypeScript decorators me `this` pehla argument hota hai internally.

---

# 🎯 Step 3: Replacement Function Strict Type

Replacement bhi same signature follow karega:

```ts
function replacement(
  this: This,
  ...args: Args
): Return
```

Ab ye perfectly match karta hai original method ko.

---

# 🎯 Step 4: Context Strict Type

Context ko bhi generics ke saath type kar sakte hain:

```ts
context: ClassMethodDecoratorContext<
  This,
  (this: This, ...args: Args) => Return
>
```

Ab decorator 100% strictly typed ho gaya 🚀

---

# 🟢 Final Strict Version Structure

```ts
function methodLogger<
  This,
  Args extends any[],
  Return
>(logPrefix: string) {

  return function (
    originalMethod: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<
      This,
      (this: This, ...args: Args) => Return
    >
  ) {

    function replacement(
      this: This,
      ...args: Args
    ): Return {

      console.log(`${logPrefix} started`);

      const result = originalMethod.call(this, ...args);

      console.log(`${logPrefix} ended`);

      return result;
    }

    return replacement;
  };
}
```

---

# 🟢 Ab Decorator Kaise Use Karenge?

Example:

```ts
class Person {
  constructor(public name: string) {}

  @methodLogger<Person, [string], void>("LOG")
  greet(greeting: string): void {
    console.log(`${greeting}, ${this.name}`);
  }
}
```

---

# 🧠 Yaha Generics Me Kya Pass Hua?

```ts
@methodLogger<Person, [string], void>("LOG")
```

| Generic | Actual Value |
|----------|--------------|
| `This` | `Person` |
| `Args` | `[string]` |
| `Return` | `void` |

Ab decorator perfectly jaanta hai:

✔ `this` Person hai  
✔ Ek string argument milega  
✔ Return type void hai  

---

# 🟢 Why Ye Itna Powerful Hai?

Ab agar:

- Galat argument type pass karoge ❌
- Galat return type likhoge ❌
- Context mismatch hoga ❌

TypeScript turant error dega.

---

# 🧠 Important Understanding

Ye flow samjho:

```
Generics define karte hain → 
Context strict hota hai → 
Original method strict hota hai → 
Replacement strict hota hai →
Decorator fully type safe ho jata hai
```

---

# 🟢 Stage 3 vs Stage 2 Difference

Stage 3 decorators (TS 5):

✔ Much better strict typing  
✔ Cleaner generic support  
✔ More type safety  

Stage 2 decorators:

✔ Reflection support tha  
❌ Itna strong typing nahi tha  

---

# 🎯 Final Takeaway

Strict typing karne ke liye:

1. Target ko function type do
2. Context ko proper decorator context type do
3. Generics use karo:
   - This
   - Args
   - Return
4. Context me generics pass karo
5. Decorator use karte waqt concrete types pass karo

---

# 🧠 Simple Rule

Agar decorator complex hai  
To generics use karo.

Agar simple hai  
To `Function` + `ClassMethodDecoratorContext` bhi enough hai.

---

Ye thoda heavy tha 🤯  
But once tum ek decorator khud strictly type kar loge  
Sab clear ho jayega 🚀