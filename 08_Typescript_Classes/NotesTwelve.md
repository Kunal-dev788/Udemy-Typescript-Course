# 🚀 Generics with Classes – Real World Example (Repository Pattern)

Ab hum abstract Box example se real-world example pe move karte hain.

Is video me hum banayenge:

👉 Generic Repository Class  
👉 Jo Users, Books, Products – kisi bhi type ke saath kaam kar sake  
👉 Aur fully type-safe ho  

---

# 🏗 Step 1 – Basic Repository (Without Generics)

Socho ek repository class hai jo:

✔ Items store karti hai  
✔ Add karti hai  
✔ Get karti hai  
✔ Remove karti hai  

Initial version (without generics):

    class Repository {
      private items: any[] = []

      add(item: any) {
        this.items.push(item)
      }

      getItemById(id: number): any | undefined {
        return this.items.find(item => item.id === id)
      }

      getAll(): any[] {
        return this.items
      }

      removeById(id: number): void {
        this.items = this.items.filter(item => item.id !== id)
      }
    }

⚠ Problem:

Sab jagah `any` use ho raha hai.  
Type safety zero.

---

# 🧠 Problem Kya Hai?

Agar hum:

✔ Users store kar rahe hain  
✔ Books store kar rahe hain  

TypeScript ko pata hi nahi chalega ki repository me kis type ke objects hain.

Matlab:

User repository me book daal sakte ho 😬  
Book repository me user daal sakte ho 😬  

Ye galat hai.

---

# 🔥 Step 2 – Generic Banate Hain

Repository ko generic banate hain:

    class Repository<T> {
      private items: T[] = []

      add(item: T) {
        this.items.push(item)
      }

      getItemById(id: number): T | undefined {
        return this.items.find(item => item.id === id)
      }

      getAll(): T[] {
        return this.items
      }

      removeById(id: number): void {
        this.items = this.items.filter(item => item.id !== id)
      }
    }

Ab problem:

TypeScript bol raha hoga:

`item.id` exist karta hai ya nahi?

Kyuki T koi bhi type ho sakta hai.

---

# 🛡 Step 3 – Constraint Add Karte Hain (extends)

Hume ensure karna hai:

Har T ke paas `id: number` ho.

Pehle ek type banate hain:

    type Identifiable = {
      id: number
    }

Ab generic constrain karte hain:

    class Repository<T extends Identifiable> {
      private items: T[] = []

      add(item: T) {
        this.items.push(item)
      }

      getItemById(id: number): T | undefined {
        return this.items.find(item => item.id === id)
      }

      getAll(): T[] {
        return this.items
      }

      removeById(id: number): void {
        this.items = this.items.filter(item => item.id !== id)
      }
    }

Ab:

✔ Har T me id hona compulsory hai  
✔ TypeScript safe ho gaya  

---

# 👤 Step 4 – User Repository

User type banate hain:

    type User = {
      id: number
      name: string
      email: string
    }

Repository create karte hain:

    const usersRepository = new Repository<User>()

Ab ye repository sirf Users accept karega.

User add karte hain:

    usersRepository.add({
      id: 1,
      name: "John",
      email: "john@email.com"
    })

Agar try karo:

    usersRepository.add({
      id: 2,
      age: 25
    })

❌ Error

Kyuki age User type me nahi hai.

---

# 📚 Step 5 – Book Repository

Book type:

    type Book = {
      id: number
      title: string
      isbn: number
    }

Repository:

    const booksRepository = new Repository<Book>()

Book add karte hain:

    booksRepository.add({
      id: 1,
      title: "Harry Potter",
      isbn: 123456
    })

Agar try karo user add karne ka:

❌ Error

Kyuki ye Book repository hai.

---

# 🔍 Testing Methods

User fetch:

    console.log(usersRepository.getItemById(1))

Book fetch:

    console.log(booksRepository.getAll())

Output:

✔ Proper typed object  
✔ Proper typed array  

---

# 🧠 Important Insight

Repository class:

✔ Generic hai  
✔ Reusable hai  
✔ Type-safe hai  

But jab instantiate karte ho:

    new Repository<User>()
    new Repository<Book>()

Tab wo specific ban jata hai.

Ye hi generics ki power hai.

---

# 🔁 Code Reuse Without Generics vs With Generics

Without generics:

❌ Multiple classes likhni padti  
UserRepository  
BookRepository  
ProductRepository  

With generics:

✔ Sirf ek class  
✔ Different types ke saath reuse  

---

# 🎯 Final Takeaways

Generics + Classes = 🔥 Powerful Combination

✔ Type-safe reusable architecture  
✔ Clean repository pattern  
✔ Compile-time safety  
✔ No `any` pollution  

Ab tum:

✔ Generic repository bana sakte ho  
✔ ORM-style abstraction create kar sakte ho  
✔ Clean scalable architecture design kar sakte ho  

Ye real-world scalable TypeScript pattern hai 🚀🔥