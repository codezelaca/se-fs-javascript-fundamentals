# JavaScript Class 1 - Solutions

---

## Exercise Set 1: Arrow Functions

### Solution 1.1

```javascript
const square = (x) => x * x;
```

### Solution 1.2

```javascript
const isEven = (num) => num % 2 === 0;
```

### Solution 1.3

```javascript
const fullName = (first, last) => `${first} ${last}`;
```

### Solution 1.4

```javascript
const greet = (name) => `Hello ${name}`;
```

### Solution 1.5

```javascript
const multiply = (a, b) => a * b;
```

---

## Exercise Set 2: Template Literals

### Solution 2.1

```javascript
const name = "Alice";
const age = 25;
const message = `My name is ${name} and I am ${age} years old.`;
```

### Solution 2.2

```javascript
const product = "Laptop";
const price = 999;
const text = `The ${product} costs $${price}`;
```

### Solution 2.3

```javascript
const city = "New York";
const country = "USA";
const location = `${city}, ${country}`;
```

---

## Exercise Set 3: Array Methods - map()

### Solution 3.1

```javascript
const doubled = numbers.map((num) => num * 2);
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```

### Solution 3.2

```javascript
const squared = numbers.map((num) => num * num);
// [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

### Solution 3.3

```javascript
const names = students.map((student) => student.name);
// ["Alice", "Bob", "Charlie", "David", "Eve"]
```

### Solution 3.4

```javascript
const scores = students.map((student) => student.score);
// [85, 92, 78, 95, 88]
```

### Solution 3.5

```javascript
const productNames = products.map((product) => product.name);
// ["Laptop", "Phone", "Tablet", "Watch"]
```

### Solution 3.6

```javascript
const descriptions = products.map(
  (product) => `${product.name} costs $${product.price}`,
);
// ["Laptop costs $999", "Phone costs $699", "Tablet costs $449", "Watch costs $299"]
```

### Solution 3.7

```javascript
const boostedScores = students.map((student) => student.score + 5);
// [90, 97, 83, 100, 93]
```

---

## Exercise Set 4: Array Methods - filter()

### Solution 4.1

```javascript
const evens = numbers.filter((num) => num % 2 === 0);
// [2, 4, 6, 8, 10]
```

### Solution 4.2

```javascript
const greaterThanFive = numbers.filter((num) => num > 5);
// [6, 7, 8, 9, 10]
```

### Solution 4.3

```javascript
const topStudents = students.filter((student) => student.score > 85);
// [{ name: "Bob", score: 92 }, { name: "David", score: 95 }, { name: "Eve", score: 88 }]
```

### Solution 4.4

```javascript
const expensiveProducts = products.filter((product) => product.price > 500);
// [{ id: 1, name: "Laptop", price: 999 }, { id: 2, name: "Phone", price: 699 }]
```

### Solution 4.5

```javascript
const vowelNames = students.filter((student) => {
  const firstLetter = student.name[0].toLowerCase();
  return ["a", "e", "i", "o", "u"].includes(firstLetter);
});
// [{ name: "Alice", score: 85 }, { name: "Eve", score: 88 }]
```

### Solution 4.6

```javascript
const longNames = products.filter((product) => product.name.length > 5);
// [{ id: 1, name: "Laptop", price: 999 }, { id: 3, name: "Tablet", price: 449 }]
```

---

## Exercise Set 5: Array Methods - find()

### Solution 5.1

```javascript
const student = students.find((student) => student.score === 92);
// { name: "Bob", score: 92 }
```

### Solution 5.2

```javascript
const product = products.find((product) => product.id === 3);
// { id: 3, name: "Tablet", price: 449 }
```

### Solution 5.3

```javascript
const number = numbers.find((num) => num > 7);
// 8
```

### Solution 5.4

```javascript
const eve = students.find((student) => student.name === "Eve");
// { name: "Eve", score: 88 }
```

---

## Exercise Set 6: Chaining Methods

### Solution 6.1

```javascript
const topStudentNames = students
  .filter((student) => student.score > 80)
  .map((student) => student.name);
// ["Alice", "Bob", "David", "Eve"]
```

### Solution 6.2

```javascript
const affordableProducts = products
  .filter((product) => product.price < 700)
  .map((product) => product.name);
// ["Phone", "Tablet", "Watch"]
```

### Solution 6.3

```javascript
const evenSquares = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * num);
// [4, 16, 36, 64, 100]
```

### Solution 6.4

```javascript
const boostedTopScores = students
  .filter((student) => student.score > 85)
  .map((student) => student.score + 5);
// [97, 100, 93]
```

### Solution 6.5

```javascript
const affordableFormatted = products
  .filter((product) => product.price < 500)
  .map((product) => `${product.name}: $${product.price}`);
// ["Tablet: $449", "Watch: $299"]
```

---

## Exercise Set 7: Destructuring

### Solution 7.1

```javascript
const { name, age } = user;
console.log(name); // "John"
console.log(age); // 30
```

### Solution 7.2

```javascript
const {
  address: { city, zip },
} = person;
console.log(city); // "NYC"
console.log(zip); // "10001"
```

### Solution 7.3

```javascript
const [first, second] = colors;
console.log(first); // "red"
console.log(second); // "blue"
```

### Solution 7.4

```javascript
const formatUser = ({ name, age, role }) => {
  return `${name} is ${age} years old and is an ${role}`;
};

console.log(formatUser(user));
// "Bob is 25 years old and is an admin"
```

---

## Exercise Set 8: Spread Operator

### Solution 8.1

```javascript
const combined = [...arr1, ...arr2];
// [1, 2, 3, 4, 5, 6]
```

### Solution 8.2

```javascript
const updatedUser = { ...user, age: 26 };
// { name: "John", age: 26, email: "john@example.com" }
```

### Solution 8.3

```javascript
const newNumbers = [1, ...numbers];
// [1, 2, 3, 4, 5]
```

### Solution 8.4

```javascript
const settings = { ...defaults, ...userSettings };
// { theme: "light", fontSize: 16, language: "en" }
```

---

## Exercise Set 9: Ternary Operator

### Solution 9.1

```javascript
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
// "Adult"
```

### Solution 9.2

```javascript
const total = 150;
const discount = total > 100 ? 10 : 0;
// 10
```

### Solution 9.3

```javascript
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back!" : "Please log in";
// "Welcome back!"
```

---

## Bonus Challenges

### Challenge 1

```javascript
// 1. Total revenue from completed orders
const totalRevenue = orders
  .filter((order) => order.status === "completed")
  .reduce((sum, order) => sum + order.total, 0);
// 525

// Alternative without reduce:
const completedOrders = orders.filter((order) => order.status === "completed");
let revenue = 0;
completedOrders.forEach((order) => (revenue += order.total));

// 2. Names of customers with pending orders
const pendingCustomers = orders
  .filter((order) => order.status === "pending")
  .map((order) => order.customer);
// ["Jane"]

// 3. Format orders over $100
const formattedOrders = orders
  .filter((order) => order.total > 100)
  .map((order) => `Order #${order.id}: $${order.total} - ${order.customer}`);
// ["Order #1: $150 - John", "Order #3: $200 - Bob", "Order #5: $175 - Charlie"]
```

### Challenge 2

```javascript
const transformedData = rawData.map((person) => ({
  fullName: `${person.firstName} ${person.lastName}`,
  age: person.age,
  status: person.active ? "Active" : "Inactive",
}));
```

### Challenge 3

```javascript
// 1. All employee names
const allEmployees = departments
  .flatMap((dept) => dept.employees)
  .map((emp) => emp.name);
// ["Alice", "Bob", "Charlie", "David"]

// Alternative without flatMap:
const allNames = [];
departments.forEach((dept) => {
  dept.employees.forEach((emp) => {
    allNames.push(emp.name);
  });
});

// 2. Total salary expense
const totalSalary = departments
  .flatMap((dept) => dept.employees)
  .reduce((sum, emp) => sum + emp.salary, 0);
// 375000

// 3. Employees earning over $90000
const highEarners = departments
  .flatMap((dept) => dept.employees)
  .filter((emp) => emp.salary > 90000);
// [{ name: "Alice", salary: 120000 }, { name: "Bob", salary: 100000 }]
```

---

## Notes

- If your solutions work but look different, that's okay!
- Multiple approaches can be correct
- Focus on readability and correctness
- Practice is key to mastery

Good job completing the exercises! 🎉
