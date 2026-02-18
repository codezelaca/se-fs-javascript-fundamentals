# JavaScript Class 1 - Quick Reference Cheat Sheet

## Variables
```javascript
// Modern way (use these)
const name = "John";      // Cannot reassign
let age = 25;             // Can reassign

// Old way (don't use)
var oldWay = "avoid";     // Don't use var
```

**Rule:** Use `const` by default, `let` only when value will change.

---

## Template Literals
```javascript
const name = "Alice";
const age = 25;

// Use backticks ` ` (not quotes)
const message = `Hello ${name}, you are ${age} years old`;

// Multi-line
const paragraph = `
  Line 1
  Line 2
  ${name}
`;
```

---

## Arrow Functions
```javascript
// Traditional
function add(a, b) {
  return a + b;
}

// Arrow function (short form)
const add = (a, b) => a + b;

// Arrow function (long form)
const add = (a, b) => {
  return a + b;
};

// No parameters
const sayHi = () => "Hi!";

// One parameter (parentheses optional)
const double = num => num * 2;
const double = (num) => num * 2;  // Also valid

// Multiple parameters (need parentheses)
const add = (a, b) => a + b;
```

**When to use { } and return:**
- One line: No braces, no return needed
- Multiple lines: Use braces and return

---

## Array Methods

### map() - Transform each item
```javascript
const numbers = [1, 2, 3, 4];

// Double each number
numbers.map(num => num * 2);
// Result: [2, 4, 6, 8]

// With objects
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];

users.map(user => user.name);
// Result: ["John", "Jane"]
```

### filter() - Keep some items
```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// Keep only even numbers
numbers.filter(num => num % 2 === 0);
// Result: [2, 4, 6]

// With objects
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

products.filter(product => product.price > 100);
// Result: [{ name: "Laptop", price: 1000 }]
```

### find() - Get one item
```javascript
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];

users.find(user => user.id === 2);
// Result: { id: 2, name: "Jane" }

// Returns undefined if not found
users.find(user => user.id === 999);
// Result: undefined
```

### Chaining
```javascript
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 20, inStock: false },
  { name: "Keyboard", price: 50, inStock: true }
];

// Get names of available products
products
  .filter(p => p.inStock)
  .map(p => p.name);
// Result: ["Laptop", "Keyboard"]
```

### Other Useful Methods
```javascript
// includes - check if exists
[1, 2, 3].includes(2);  // true

// some - check if ANY passes test
[1, 2, 3].some(n => n > 2);  // true

// every - check if ALL pass test
[1, 2, 3].every(n => n > 0);  // true
```

---

## Destructuring

### Object Destructuring
```javascript
const user = {
  name: "John",
  age: 25,
  email: "john@example.com"
};

// Extract properties
const { name, age } = user;
console.log(name);  // "John"
console.log(age);   // 25

// Rename while destructuring
const { name: userName } = user;
console.log(userName);  // "John"

// Nested destructuring
const person = {
  name: "Alice",
  address: {
    city: "NYC",
    zip: "10001"
  }
};

const { address: { city } } = person;
console.log(city);  // "NYC"

// In function parameters
const greet = ({ name, age }) => {
  return `${name} is ${age}`;
};

greet(user);  // "John is 25"
```

### Array Destructuring
```javascript
const colors = ["red", "blue", "green"];

const [first, second] = colors;
console.log(first);   // "red"
console.log(second);  // "blue"

// Skip items
const [, , third] = colors;
console.log(third);  // "green"

// React pattern (you'll see this soon)
// const [count, setCount] = useState(0);
```

---

## Spread Operator (...)

### With Arrays
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2];
// [1, 2, 3, 4, 5, 6]

// Copy and add
const newArray = [...arr1, 4, 5];
// [1, 2, 3, 4, 5]

// Add to beginning
const withFirst = [0, ...arr1];
// [0, 1, 2, 3]
```

### With Objects
```javascript
const user = {
  name: "John",
  age: 25
};

// Copy and update
const updatedUser = {
  ...user,
  age: 26
};
// { name: "John", age: 26 }

// Copy and add property
const extendedUser = {
  ...user,
  email: "john@example.com"
};
// { name: "John", age: 25, email: "john@example.com" }

// Merge objects (right overwrites left)
const defaults = { theme: "light", size: "medium" };
const custom = { size: "large", color: "blue" };
const settings = { ...defaults, ...custom };
// { theme: "light", size: "large", color: "blue" }
```

**Important for React:** Always create new objects/arrays, don't modify originals!

---

## Conditional Operators

### Ternary (?:)
```javascript
const age = 20;

// condition ? ifTrue : ifFalse
const status = age >= 18 ? "Adult" : "Minor";

// In variables
const discount = total > 100 ? 10 : 0;

// In React JSX (you'll see this)
// {isLoggedIn ? <Dashboard /> : <Login />}
```

### Logical AND (&&)
```javascript
const isAdmin = true;

// Show only if true
const message = isAdmin && "Admin access granted";

// In React (show component only if condition is true)
// {isLoggedIn && <UserProfile />}
// {items.length > 0 && <ItemList />}
```

### Optional Chaining (?.)
```javascript
const user = {
  name: "John"
  // No address property
};

// Safe property access
const city = user?.address?.city;
// undefined (no error!)

// Without optional chaining (crashes)
// const city = user.address.city;  // Error!
```

### Nullish Coalescing (??)
```javascript
const username = user.name ?? "Guest";

// If user.name is null or undefined, use "Guest"
// Otherwise use user.name

const count = data.count ?? 0;

// Different from ||
const value = 0;
console.log(value || 100);   // 100 (0 is falsy)
console.log(value ?? 100);   // 0 (0 is not null/undefined)
```

---

## Common Patterns

### Check and transform
```javascript
const users = [/*...*/];

// Get names of active users
const activeNames = users
  .filter(user => user.active)
  .map(user => user.name);
```

### Find and update
```javascript
const products = [/*...*/];

// Update specific product
const updatedProducts = products.map(product => 
  product.id === 5 
    ? { ...product, price: 99 }
    : product
);
```

### Conditional property
```javascript
const createUser = (name, age, isAdmin) => ({
  name,
  age,
  ...(isAdmin && { role: "admin" })
});
```

### Default values
```javascript
const greet = (name = "Guest", greeting = "Hello") => {
  return `${greeting}, ${name}!`;
};

greet();              // "Hello, Guest!"
greet("John");        // "Hello, John!"
greet("Jane", "Hi");  // "Hi, Jane!"
```

---

## Quick Tips

✅ **Do:**
- Use `const` by default
- Use template literals for string concatenation
- Use arrow functions
- Chain array methods
- Use destructuring
- Create new objects/arrays with spread

❌ **Don't:**
- Use `var`
- Concatenate strings with +
- Modify objects/arrays directly (for React)
- Forget the second parameter in destructuring functions

---

## Practice Pattern
```javascript
// Typical React data flow pattern
const users = [
  { id: 1, name: "John", active: true, score: 85 },
  { id: 2, name: "Jane", active: false, score: 92 },
  { id: 3, name: "Bob", active: true, score: 78 }
];

// 1. Filter
const activeUsers = users.filter(user => user.active);

// 2. Map/Transform
const names = activeUsers.map(user => user.name);

// 3. Chained
const topActiveNames = users
  .filter(user => user.active)
  .filter(user => user.score > 80)
  .map(user => user.name);

// 4. With destructuring
const formatUser = ({ name, score, active }) => ({
  displayName: name.toUpperCase(),
  grade: score >= 90 ? "A" : "B",
  status: active ? "Active" : "Inactive"
});

const formatted = users.map(formatUser);
```

---

**Print this and keep it handy while coding!** 🚀