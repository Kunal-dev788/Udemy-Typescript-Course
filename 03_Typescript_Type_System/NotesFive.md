# 🔀 Union Types in TypeScript – Combine Multiple Types 🚀

---

# 🎯 Lecture Goal

Is lecture me hum samjhenge:

- Union type kya hota hai  
- Kaise declare karte hain  
- Kaise use karte hain  
- Practical example ke saath samjhenge  

Union types TypeScript me bahut common hain 💪

---

# 🔹 Union Type Kya Hota Hai?

Simple definition:

> Jab 2 ya usse zyada types ko combine karte ho → wo union type hota hai

Example:

```ts
string | number
```

Matlab:

👉 Value ya toh string ho sakti hai  
👉 Ya number ho sakti hai  

---

# 🧠 Primitive Union Example

Agar hum combine karein:

- `string`
- `number`

Toh new type banega:

```
string | number
```

Ye ek union type hai.

---

# 🟢 Union Type Declare Kaise Kare?

Union types custom hote hain, isliye usually **type alias** ke through declare karte hain.

```ts id="tsq3fd"
type StringOrNumber = string | number;
```

📌 `|` (pipe operator) union banata hai

---

# 🔹 Use Union Type

```ts id="g7pk2c"
let value: StringOrNumber;

value = "Hello";  // ✅ Valid
value = 100;      // ✅ Valid
```

TypeScript complain nahi karega.

---

# 🔢 More Union Examples

## 🔹 Number or Undefined

```ts id="jxw2ad"
type NumberOrUndefined = number | undefined;
```

---

## 🔹 3 Types Ka Union

```ts id="qwr94d"
type StringNumberOrUndefined = string | number | undefined;
```

✔ Union me 2 se zyada types bhi ho sakte hain

---

## 🔹 JavaScript Types Ke Saath Union

```ts id="fd82nd"
type DateOrUndefined = Date | undefined;
```

✔ JS types bhi use kar sakte ho

---

# 🧪 Practical Example – Print Function

Ab ek real example dekhte hain 👇

```ts id="tpn5jd"
function print(input: string | undefined) {
  if (input) {
    console.log(input);
  } else {
    console.log("Please input something to print");
  }
}
```

Yaha:

👉 `input` ya toh string hoga  
👉 Ya undefined hoga  

---

# 🔹 Function Calls

```ts id="a7vop2"
print();               // undefined case
print("Hello World");  // string case
```

---

# 🖥️ Output

```
Please input something to print
Hello World
```

---

# 🧠 Important Understanding

Union type ka matlab:

> Variable multiple types accept kar sakta hai  
> Lekin sirf specified types hi accept karega  

---

# 🔄 Union in Annotation vs Declaration

## 🔹 In Type Alias (Declaration)

```ts
type StringOrNumber = string | number;
```

## 🔹 Direct Annotation

```ts
function print(input: string | undefined) { }
```

Dono valid hain ✔

---

# 📊 Union Type Summary

| Feature | Description |
|----------|------------|
| Operator | `|` |
| Purpose | Multiple types allow karna |
| Use Case | Optional values, flexible inputs |
| Complexity | Primitive easy, objects complex |

---

# ⚠️ Important Note

Abhi primitive unions simple lagte hain.

Future me jab:

- Object unions
- Function unions
- Complex type unions

Dekhenge…

Tab ye thoda tricky ho sakta hai 😅

---

# 🏁 Final Understanding

✔ Union = multiple types ka combination  
✔ `|` operator use hota hai  
✔ 2 ya zyada types combine kar sakte ho  
✔ Optional values ke liye useful  
✔ Declaration aur annotation dono me use ho sakta hai  

---

# 🚀 Quick Revision Points

- `string | number` → union  
- `type X = A | B`  
- Function parameters me bhi use kar sakte ho  
- Flexible but controlled typing  
- Future me complex unions dekhenge  

---

🎯 Final Line Yaad Rakho:

> Union type allow karta hai flexibility,  
> Lekin control TypeScript ke haath me rehta hai 🔥

Next lecture me aur powerful type combinations explore karenge 🚀