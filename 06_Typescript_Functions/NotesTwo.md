# 🔥 Functions in TypeScript – Optional Params + Type Aliases

Is video me hum 2 important cheezein samjhenge:

1️⃣ Default vs Optional Parameters  
2️⃣ Function me Type Aliases ka use  

---

# 🟢 1️⃣ Default (Required) Parameters

Example:

```ts
function intro(name: string, age: number): string {
  return `My name is ${name} and I am ${age} years old`;
}
```

### ⚠ Ye dono parameters required hain

Agar tum function ko aise call karo:

```ts
intro("John");
```

❌ Error aayega  
Kyuki `age` missing hai.

👉 Default parameters = required parameters

---

# 🟢 2️⃣ Optional Parameters

Kabhi kabhi hume extra info chahiye hoti hai — but compulsory nahi.

Example: `country`

```ts
function intro(
  name: string,
  age: number,
  country?: string
): string {
  if (country) {
    return `My name is ${name}, I am ${age} years old and I live in ${country}`;
  }

  return `My name is ${name} and I am ${age} years old`;
}
```

### 🎯 Optional banane ka syntax:

```
parameterName?: type
```

---

## ✅ Function Call Examples

```ts
intro("John", 25);
```

✔ Works

```ts
intro("John", 25, "India");
```

✔ Also works

---

## 🚨 Important Rule

Optional parameters **hamesha end me** aayenge.

❌ Wrong:

```ts
function intro(country?: string, name: string, age: number)
```

Required parameters hamesha pehle aate hain.  
Optional baad me.

---

# 🟢 3️⃣ Function me Type Alias Use Karna

Ab thoda advanced concept 👇

Maan lo hum ek `Person` type banate hain.

---

## 🎯 Step 1 – Enum Banate Hain

```ts
enum AgeUnit {
  Years = "YEARS",
  Months = "MONTHS",
}
```

---

## 🎯 Step 2 – Person Type Alias

```ts
type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
};
```

---

## 🎯 Step 3 – Person Object

```ts
let person: Person = {
  name: "Scott",
  age: 30,
  ageUnit: AgeUnit.Years,
};
```

---

# 🟢 4️⃣ Function Using Type Alias

Ab function banate hain jo age ko months me convert kare.

```ts
function convertAgeToMonths(person: Person): Person {
  if (person.ageUnit === AgeUnit.Years) {
    person.age = person.age * 12;
    person.ageUnit = AgeUnit.Months;
  }

  return person;
}
```

---

## 🧠 Yaha Important Kya Hai?

### Parameter Type:
```
person: Person
```

### Return Type:
```
): Person
```

Function:
- Person object lega
- Person object hi return karega
- Strict typing maintain karega

---

## 🟢 Function Call

```ts
console.log(convertAgeToMonths(person));
```

Output:

- Age 30 → 360
- AgeUnit → Months

---

# 🎯 Why Type Alias Useful Hai?

Socho agar Person object me 10–15 properties hoti…

Har function me inline object type likhna:

❌ Cluttered  
❌ Hard to read  
❌ Repetitive  

Instead:

✔ Ek baar type declare karo  
✔ Har jagah reuse karo  
✔ Code clean aur readable

---

# 🧠 Final Takeaways

## ✅ Optional Parameter
```
param?: type
```

## ✅ Required Parameters First
Optional hamesha end me

## ✅ Type Aliases in Functions
- Parameter ke liye use kar sakte ho
- Return type ke liye bhi use kar sakte ho
- Complex types ke liye best practice

---

# 🚀 Golden Rule

Simple type ho → direct annotate karo  
Complex object ho → type alias use karo  

Strictly typed functions =  
✔ Predictable  
✔ Safe  
✔ Maintainable  

---

Next videos me aur advanced function concepts aayenge 💪