# 🧠 Subtypes, Supertypes & TypeScript Soundness – Easy Hinglish Notes

---

# 🧬 Subtype vs Supertype (Recap)

👉 Supertype = General type  
👉 Subtype = Specific version  

---

## 🧠 Example

- any → supertype  
- string → subtype of any  
- string enum → subtype of string  

---

# 🎯 Rule

👉 Jahaan supertype use ho raha hai  
👉 Waha subtype bhi use kar sakte hain ✅  

---

# 🧱 Custom Types Example

## 👤 Person (Supertype)

    type Person = {
      name: string
      age: number
    }

---

## 👨‍💼 Employee (Subtype)

    type Employee = Person & {
      employeeId: number
      department: string
    }

---

## 🎓 Student (Subtype)

    type Student = Person & {
      studentId: number
      major: string
    }

---

# 🧠 Samjho

👉 Employee & Student:

✔ Person ke properties inherit karte hain  
✔ + extra properties add karte hain  

---

# 🧪 Function with Supertype

    function greet(person: Person): string {
      return `Hello ${person.name}, you are ${person.age}`
    }

---

# 🧪 Objects

## 👨‍💼 Employee Object

    const employee: Employee = {
      name: "Alice",
      age: 30,
      employeeId: 101,
      department: "Engineering"
    }

---

## 🎓 Student Object

    const student: Student = {
      name: "Bob",
      age: 22,
      studentId: 202,
      major: "Computer Science"
    }

---

# 🎯 Usage

    greet(employee)
    greet(student)

---

# 🧠 Insight

✔ Function Person accept karti hai  
✔ But Employee & Student bhi chalega  

👉 Kyuki wo subtypes hain 🔥  

---

# ⚠️ Edge Case (Important)

## ❌ Direct Object Pass

    greet({
      name: "Alice",
      age: 30,
      employeeId: 101
    })

👉 Error aata hai  

---

# 🧠 Reason

👉 Excess Property Checks  

✔ Direct object → strict check  
✔ Variable → relaxed  

---

# ⚠️ TypeScript Soundness

## 🤔 Soundness Kya Hai?

👉 Guarantee:

✔ Runtime pe type errors nahi aayenge  

---

## ❗ Reality

👉 TypeScript = **Unsound**  

👉 Reason:

✔ Flexibility for JavaScript  

---

# ⚡ Unsound Behavior Examples

---

# 1️⃣ Type Assertion Problem

    let value: unknown = "hello"
    let num = value as number

---

# ❌ Problem

👉 Actually string hai  
👉 Treat kar rahe number jaise  

👉 Runtime error possible  

---

# 2️⃣ Extra Property Ignored

    type User = {
      name: string
      age: number
    }

    const user = {
      name: "Alice",
      age: 30,
      isAdmin: true
    }

    const newUser: User = user

---

# 🧠 Insight

✔ Extra property ignore ho gayi  
✔ TypeScript complain nahi karta  

---

# ⚠️ But Direct Pass

    printUser({
      name: "Alice",
      age: 30,
      isAdmin: true
    })

👉 Error aata hai  

---

# 3️⃣ Function Variance Problem

    type Animal = { name: string }

    type Dog = Animal & { breed: string }

---

## Function

    const handleAnimal = (animal: Animal) => {
      console.log(animal.name)
    }

---

## Assignment

    let handleDog: (dog: Dog) => void
    handleDog = handleAnimal

---

# ❌ Problem

👉 Dog me extra property (breed) hai  
👉 Function ignore kar raha hai  

---

# 4️⃣ Rest Parameters Issue

    function logNumbers(...numbers: number[]) {
      console.log(numbers)
    }

---

## Call

    logNumbers()

---

# 🧠 Insight

✔ No arguments → still valid  

👉 Rest params = optional  

---

# 5️⃣ Function Return Type Issue

    function run(fn: () => void) {
      fn()
    }

---

## Function

    function getPi() {
      return 3.14
    }

---

## Call

    run(getPi)

---

# ❌ Problem

👉 Expected void  
👉 But return value aa raha hai  

👉 TypeScript still allow karta hai  

---

# 🧠 Reason

👉 JavaScript compatibility  

---

# 🔥 Big Picture

👉 TypeScript trade-offs:

- Soundness ❌  
- Flexibility ✔  
- Usability ✔  

---

# 🏁 Final Summary

👉 Subtype:

✔ More specific  

---

👉 Supertype:

✔ More general  

---

👉 Rule:

✔ Subtype use kar sakte ho supertype ki jagah  

---

👉 TypeScript:

❌ Fully sound nahi  
✔ Flexible hai  

---

# 💡 Final Insight

👉 TypeScript ka goal:

✔ Perfect safety nahi  
✔ Practical usability  

---

Agar ye samajh gaya…  
toh tu TypeScript ke **deep internals samajhne lag gaya hai 🔥🚀**