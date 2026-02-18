# JavaScript Complete Cheat Sheet - Classes 1 & 2

## Table of Contents

1. [Variables](#variables)
2. [Functions](#functions)
3. [Template Literals](#template-literals)
4. [Array Methods](#array-methods)
5. [Objects & Destructuring](#objects--destructuring)
6. [Spread & Rest](#spread--rest)
7. [Conditionals](#conditionals)
8. [Async/Await](#asyncawait)
9. [Fetch API](#fetch-api)
10. [Modules](#modules)
11. [Common Patterns](#common-patterns)

---

## Variables

```javascript
// Use const by default
const name = "John";

// Use let only when value will change
let age = 25;
age = 26; // OK

// Never use var
var old = "don't use"; // ❌
```

---

## Functions

### Arrow Functions

```javascript
// No parameters
const sayHi = () => "Hi!";

// One parameter (parentheses optional)
const double = (num) => num * 2;
const double = (num) => num * 2; // Also valid

// Multiple parameters
const add = (a, b) => a + b;

// Multiple lines (need braces and return)
const greet = (name) => {
  const message = `Hello ${name}`;
  return message.toUpperCase();
};

// Implicit return (one line, no braces)
const multiply = (a, b) => a * b;

// Explicit return (with braces)
const divide = (a, b) => {
  return a / b;
};
```

### Default Parameters

```javascript
const greet = (name = "Guest", greeting = "Hello") => {
  return `${greeting}, ${name}!`;
};

greet(); // "Hello, Guest!"
greet("John"); // "Hello, John!"
greet("Jane", "Hi"); // "Hi, Jane!"
```

---

## Template Literals

```javascript
const name = "Alice";
const age = 25;

// Basic usage
const message = `Hello ${name}, you are ${age} years old`;

// Expressions inside
const next = `Next year you'll be ${age + 1}`;

// Multi-line
const paragraph = `
  This is line 1
  This is line 2
  User: ${name}
`;

// Calling functions
const result = `Total: ${calculateTotal(items)}`;
```

---

## Array Methods

### map() - Transform each item

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
// [2, 4, 6, 8]

// With objects
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];
const names = users.map((user) => user.name);
// ["John", "Jane"]
```

### filter() - Keep some items

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((num) => num % 2 === 0);
// [2, 4, 6]

// With objects
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
];
const expensive = products.filter((p) => p.price > 100);
// [{ name: "Laptop", price: 1000 }]
```

### find() - Get one item

```javascript
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];
const user = users.find((u) => u.id === 2);
// { id: 2, name: "Jane" }

// Returns undefined if not found
const notFound = users.find((u) => u.id === 999);
// undefined
```

### Chaining

```javascript
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 20, inStock: false },
  { name: "Keyboard", price: 50, inStock: true },
];

// Get names of available products
const availableNames = products.filter((p) => p.inStock).map((p) => p.name);
// ["Laptop", "Keyboard"]

// Get expensive available products
const expensiveAvailable = products
  .filter((p) => p.inStock)
  .filter((p) => p.price > 100)
  .map((p) => p.name);
// ["Laptop"]
```

### Other Methods

```javascript
// includes - check if exists
[1, 2, 3].includes(2); // true

// some - check if ANY passes test
[1, 2, 3].some((n) => n > 2); // true

// every - check if ALL pass test
[1, 2, 3].every((n) => n > 0); // true

// reduce - accumulate to single value
[1, 2, 3, 4].reduce((sum, n) => sum + n, 0); // 10
```

---

## Objects & Destructuring

### Object Basics

```javascript
const user = {
  name: "John",
  age: 25,
  email: "john@example.com",
};

// Access
user.name; // "John"
user["age"]; // 25

// Add property
user.city = "NYC";

// Update property
user.age = 26;
```

### Destructuring Objects

```javascript
const user = {
  name: "John",
  age: 25,
  email: "john@example.com",
};

// Extract properties
const { name, age } = user;
console.log(name); // "John"
console.log(age); // 25

// Rename while destructuring
const { name: userName } = user;
console.log(userName); // "John"

// Default values
const { name, city = "Unknown" } = user;
console.log(city); // "Unknown"

// Nested
const person = {
  name: "Alice",
  address: {
    city: "NYC",
    zip: "10001",
  },
};
const {
  address: { city },
} = person;
console.log(city); // "NYC"
```

### Destructuring in Parameters

```javascript
// Instead of this
const greet = (user) => {
  return `Hello ${user.name}`;
};

// Do this
const greet = ({ name, age }) => {
  return `Hello ${name}, you are ${age}`;
};

greet({ name: "John", age: 25 });
```

### Array Destructuring

```javascript
const colors = ["red", "blue", "green"];

const [first, second] = colors;
console.log(first); // "red"
console.log(second); // "blue"

// Skip items
const [, , third] = colors;
console.log(third); // "green"

// React useState pattern
const [count, setCount] = useState(0);
```

---

## Spread & Rest

### Spread Operator (...)

```javascript
// Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
// [1, 2, 3, 4, 5, 6]

// Add to beginning
const withFirst = [0, ...arr1];
// [0, 1, 2, 3]

// Copy array
const copy = [...arr1];

// Objects
const user = { name: "John", age: 25 };
const updated = { ...user, age: 26 };
// { name: "John", age: 26 }

// Merge objects
const defaults = { theme: "light", size: "medium" };
const custom = { size: "large", color: "blue" };
const settings = { ...defaults, ...custom };
// { theme: "light", size: "large", color: "blue" }
```

### Rest Parameters (...)

```javascript
// Collect all arguments
const sum = (...numbers) => {
  return numbers.reduce((total, n) => total + n, 0);
};

sum(1, 2, 3); // 6
sum(1, 2, 3, 4, 5); // 15

// Mix with regular params
const greet = (greeting, ...names) => {
  return `${greeting} ${names.join(", ")}`;
};

greet("Hello", "John", "Jane", "Bob");
// "Hello John, Jane, Bob"
```

**Remember:** Same syntax (...), different purpose:

- Function call = SPREAD (expands)
- Function parameter = REST (collects)

---

## Conditionals

### Ternary Operator

```javascript
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";

// Nested (use sparingly)
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";

// In React JSX
// {isLoggedIn ? <Dashboard /> : <Login />}
```

### Logical AND (&&)

```javascript
const isAdmin = true;
const message = isAdmin && "You have admin access";

// In React (show component only if true)
// {isLoggedIn && <UserProfile />}
// {items.length > 0 && <ItemList />}
```

### Optional Chaining (?.)

```javascript
const user = {
  name: "John",
  // No address property
};

// Safe access
const city = user?.address?.city;
// undefined (no error)

// Array
const first = data?.users?.[0]?.name;

// Function
const result = obj.method?.();
```

### Nullish Coalescing (??)

```javascript
const username = user.name ?? "Guest";
// If user.name is null/undefined, use "Guest"

// Different from ||
const value = 0;
console.log(value || 100); // 100 (0 is falsy)
console.log(value ?? 100); // 0 (0 is not null/undefined)
```

---

## Async/Await

### Basic Structure

```javascript
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
```

### Rules

1. Mark function with `async`
2. Use `await` only inside async functions
3. Always use try/catch
4. `await` pauses function (doesn't freeze page)

### Error Handling

```javascript
const fetchUser = async (userId) => {
  try {
    const response = await fetch(`/api/users/${userId}`);

    if (!response.ok) {
      throw new Error(`User ${userId} not found`);
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  } finally {
    console.log("Done"); // Always runs
  }
};
```

---

## Fetch API

### GET Request

```javascript
const getData = async () => {
  try {
    const response = await fetch("https://api.example.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};
```

### POST Request

```javascript
const createUser = async (userData) => {
  try {
    const response = await fetch("https://api.example.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

createUser({ name: "John", email: "john@example.com" });
```

### Two Awaits Pattern

```javascript
// ALWAYS two awaits with fetch!
const response = await fetch(url); // Get response metadata
const data = await response.json(); // Parse JSON body
```

### Promise.all (Parallel)

```javascript
// Sequential (SLOW) - 3 seconds
const users = await fetch(url1).then((r) => r.json());
const posts = await fetch(url2).then((r) => r.json());
const comments = await fetch(url3).then((r) => r.json());

// Parallel (FAST) - 1 second
const [users, posts, comments] = await Promise.all([
  fetch(url1).then((r) => r.json()),
  fetch(url2).then((r) => r.json()),
  fetch(url3).then((r) => r.json()),
]);
```

---

## Modules

### Export

```javascript
// Named exports
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// OR
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
export { add, multiply };

// Default export (one per file)
const config = {
  /* ... */
};
export default config;
```

### Import

```javascript
// Named imports
import { add, multiply } from "./utils.js";

// Default import
import config from "./config.js";

// Both
import config, { add, multiply } from "./file.js";

// Rename
import { add as sum } from "./utils.js";

// Everything
import * as utils from "./utils.js";
```

### HTML Setup

```html
<script type="module" src="main.js"></script>
```

---

## Common Patterns

### Fetch and Transform

```javascript
const getUserNames = async () => {
  try {
    const response = await fetch("https://api.example.com/users");
    const users = await response.json();
    return users.map((user) => user.name);
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
```

### Fetch and Filter

```javascript
const getActiveUsers = async () => {
  try {
    const response = await fetch("https://api.example.com/users");
    const users = await response.json();
    return users.filter((user) => user.active);
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
```

### Dependent Fetches

```javascript
const getUserWithPosts = async (userId) => {
  try {
    const userRes = await fetch(`/api/users/${userId}`);
    const user = await userRes.json();

    const postsRes = await fetch(`/api/posts?userId=${user.id}`);
    const posts = await postsRes.json();

    return { user, posts };
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
```

### React Data Fetch Pattern

```javascript
const Component = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};
```

---

## Quick Reference

### Variables

```javascript
const name = "John";
let age = 25;
```

### Arrow Function

```javascript
const fn = (a, b) => a + b;
```

### Template Literal

```javascript
const msg = `Hello ${name}`;
```

### Map/Filter/Find

```javascript
array.map((item) => item * 2);
array.filter((item) => item > 5);
array.find((item) => item.id === 1);
```

### Destructuring

```javascript
const { name, age } = user;
const [first, second] = array;
```

### Spread

```javascript
const newArr = [...oldArr, item];
const newObj = { ...oldObj, updated: true };
```

### Async/Await

```javascript
const data = async () => {
  const res = await fetch(url);
  return await res.json();
};
```

### Promise.all

```javascript
const [a, b] = await Promise.all([fetchA(), fetchB()]);
```

### Export/Import

```javascript
export const fn = () => {};
import { fn } from "./file.js";
```

---

**Master these patterns and you're ready for React!** 🚀

Print this and keep it next to you while coding!
