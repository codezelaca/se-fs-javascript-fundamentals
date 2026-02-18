# JavaScript Class 1 - Practice Exercises

## Instructions
- Complete all exercises in order
- Test your code in the browser console
- Don't look at solutions until you've tried!
- If stuck for more than 10 minutes, ask for help

---

## Exercise Set 1: Arrow Functions (5 minutes)

Convert these traditional functions to arrow functions:

### Exercise 1.1
```javascript
function square(x) {
  return x * x;
}
```

### Exercise 1.2
```javascript
function isEven(num) {
  return num % 2 === 0;
}
```

### Exercise 1.3
```javascript
function fullName(first, last) {
  return first + " " + last;
}
```

### Exercise 1.4
```javascript
function greet(name) {
  return "Hello " + name;
}
```

### Exercise 1.5
```javascript
function multiply(a, b) {
  return a * b;
}
```

---

## Exercise Set 2: Template Literals (3 minutes)

Rewrite using template literals:

### Exercise 2.1
```javascript
const name = "Alice";
const age = 25;
const message = "My name is " + name + " and I am " + age + " years old.";
```

### Exercise 2.2
```javascript
const product = "Laptop";
const price = 999;
const text = "The " + product + " costs $" + price;
```

### Exercise 2.3
```javascript
const city = "New York";
const country = "USA";
const location = city + ", " + country;
```

---

## Exercise Set 3: Array Methods - map() (10 minutes)

Use the following data for exercises 3.1-3.5:
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "David", score: 95 },
  { name: "Eve", score: 88 }
];

const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 699 },
  { id: 3, name: "Tablet", price: 449 },
  { id: 4, name: "Watch", price: 299 }
];
```

### Exercise 3.1
Create a new array where each number is doubled.

### Exercise 3.2
Create a new array where each number is squared.

### Exercise 3.3
Get an array of all student names.

### Exercise 3.4
Get an array of all student scores.

### Exercise 3.5
Get an array of all product names.

### Exercise 3.6
Create an array of strings like: "Laptop costs $999" for each product.

### Exercise 3.7
Create an array where each student score is increased by 5 points.

---

## Exercise Set 4: Array Methods - filter() (10 minutes)

### Exercise 4.1
From the numbers array, get only even numbers.

### Exercise 4.2
From the numbers array, get only numbers greater than 5.

### Exercise 4.3
From the students array, get students who scored above 85.

### Exercise 4.4
From the products array, get products that cost more than $500.

### Exercise 4.5
From the students array, get students whose names start with a vowel (A, E, I, O, U).

### Exercise 4.6
From the products array, get products with names longer than 5 characters.

---

## Exercise Set 5: Array Methods - find() (5 minutes)

### Exercise 5.1
Find the first student with a score of 92.

### Exercise 5.2
Find the product with id of 3.

### Exercise 5.3
Find the first number greater than 7.

### Exercise 5.4
Find the first student whose name is "Eve".

---

## Exercise Set 6: Chaining Methods (10 minutes)

### Exercise 6.1
From students, get names of students who scored above 80.

### Exercise 6.2
From products, get names of products that cost less than $700.

### Exercise 6.3
From numbers, get even numbers and then square them.

### Exercise 6.4
From students, get scores above 85 and then increase each by 5.

### Exercise 6.5
From products, get products under $500, then format as "Name: $Price".

---

## Exercise Set 7: Destructuring (5 minutes)

### Exercise 7.1
Extract name and age from this object:
```javascript
const user = {
  name: "John",
  age: 30,
  email: "john@example.com",
  city: "Boston"
};
```

### Exercise 7.2
Extract city and zip from this nested object:
```javascript
const person = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "NYC",
    zip: "10001"
  }
};
```

### Exercise 7.3
Extract first two items from this array:
```javascript
const colors = ["red", "blue", "green", "yellow", "purple"];
```

### Exercise 7.4
Destructure in the function parameter:
```javascript
const user = { name: "Bob", age: 25, role: "admin" };

// Write a function that takes this object and returns:
// "Bob is 25 years old and is an admin"
// Use destructuring in the parameter
```

---

## Exercise Set 8: Spread Operator (5 minutes)

### Exercise 8.1
Combine these two arrays:
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
```

### Exercise 8.2
Create a copy of this object with age changed to 26:
```javascript
const user = { name: "John", age: 25, email: "john@example.com" };
```

### Exercise 8.3
Add a new item to the beginning of this array (without modifying original):
```javascript
const numbers = [2, 3, 4, 5];
// Add 1 to the beginning
```

### Exercise 8.4
Merge these two objects:
```javascript
const defaults = { theme: "light", fontSize: 14 };
const userSettings = { fontSize: 16, language: "en" };
// Result should be: { theme: "light", fontSize: 16, language: "en" }
```

---

## Exercise Set 9: Ternary Operator (3 minutes)

### Exercise 9.1
Create a variable `status` that is "Adult" if age >= 18, otherwise "Minor":
```javascript
const age = 20;
```

### Exercise 9.2
Create a variable `discount` that is 10 if total > 100, otherwise 0:
```javascript
const total = 150;
```

### Exercise 9.3
Create a variable `message` that shows "Welcome back!" if logged in, otherwise "Please log in":
```javascript
const isLoggedIn = true;
```

---

## Bonus Challenges (Optional)

### Challenge 1: Combined Skills
Given this data:
```javascript
const orders = [
  { id: 1, customer: "John", total: 150, status: "completed" },
  { id: 2, customer: "Jane", total: 89, status: "pending" },
  { id: 3, customer: "Bob", total: 200, status: "completed" },
  { id: 4, customer: "Alice", total: 45, status: "cancelled" },
  { id: 5, customer: "Charlie", total: 175, status: "completed" }
];
```

1. Get total revenue from completed orders only
2. Get names of customers with pending orders
3. Get orders over $100 and format as: "Order #1: $150 - John"

### Challenge 2: Data Transformation
```javascript
const rawData = [
  { firstName: "John", lastName: "Doe", age: 25, active: true },
  { firstName: "Jane", lastName: "Smith", age: 30, active: false },
  { firstName: "Bob", lastName: "Johnson", age: 35, active: true }
];
```

Transform to:
```javascript
[
  { fullName: "John Doe", age: 25, status: "Active" },
  { fullName: "Jane Smith", age: 30, status: "Inactive" },
  { fullName: "Bob Johnson", age: 35, status: "Active" }
]
```

### Challenge 3: Nested Data
```javascript
const departments = [
  {
    name: "Engineering",
    employees: [
      { name: "Alice", salary: 120000 },
      { name: "Bob", salary: 100000 }
    ]
  },
  {
    name: "Marketing",
    employees: [
      { name: "Charlie", salary: 80000 },
      { name: "David", salary: 75000 }
    ]
  }
];
```

1. Get all employee names across all departments
2. Calculate total salary expense for the company
3. Find all employees earning over $90000

---

## Submission
- Complete exercises in a JavaScript file
- Test all your solutions
- Submit via [submission link]
- Deadline: Before Class 2

Good luck! 🚀