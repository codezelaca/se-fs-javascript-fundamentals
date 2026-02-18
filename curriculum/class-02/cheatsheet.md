# JavaScript Class 2 - Quick Reference Cheat Sheet

## Async/Await Fundamentals

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

1. Mark function with `async` keyword
2. Use `await` only inside async functions
3. Always use try/catch for error handling
4. `await` pauses function execution (doesn't freeze page!)

---

## Fetch API

### GET Request (default)

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
    const newUser = await response.json();
    return newUser;
  } catch (error) {
    console.error("Error:", error);
  }
};

// Usage
createUser({ name: "John", email: "john@example.com" });
```

### PUT Request (update)

```javascript
const updateUser = async (userId, updates) => {
  const response = await fetch(`https://api.example.com/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });
  return await response.json();
};
```

### DELETE Request

```javascript
const deleteUser = async (userId) => {
  const response = await fetch(`https://api.example.com/users/${userId}`, {
    method: "DELETE",
  });
  return response.ok;
};
```

### Check Response Status

```javascript
const fetchWithCheck = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
    return null;
  }
};
```

---

## Two Awaits Pattern

```javascript
// ALWAYS use two awaits with fetch!

// First await - get response object
const response = await fetch(url);

// Second await - parse JSON
const data = await response.json();

// WHY?
// response = HTTP response metadata (status, headers)
// data = actual JSON content
```

---

## Promise.all (Parallel Requests)

### Basic Pattern

```javascript
const fetchMultiple = async () => {
  try {
    // Start all requests at once
    const [users, posts, comments] = await Promise.all([
      fetch("https://api.example.com/users").then((r) => r.json()),
      fetch("https://api.example.com/posts").then((r) => r.json()),
      fetch("https://api.example.com/comments").then((r) => r.json()),
    ]);

    return { users, posts, comments };
  } catch (error) {
    console.error("Error:", error);
  }
};
```

### When to Use

- ✅ Requests don't depend on each other
- ✅ Want faster performance
- ✅ Need multiple data sources

### When NOT to Use

- ❌ Second request needs data from first request
- ❌ Requests must happen in specific order

### Sequential vs Parallel

```javascript
// Sequential (SLOW) - takes 3 seconds
const fetchSequential = async () => {
  const users = await fetch(url1).then((r) => r.json()); // 1 sec
  const posts = await fetch(url2).then((r) => r.json()); // 1 sec
  const comments = await fetch(url3).then((r) => r.json()); // 1 sec
  return { users, posts, comments };
};

// Parallel (FAST) - takes 1 second
const fetchParallel = async () => {
  const [users, posts, comments] = await Promise.all([
    fetch(url1).then((r) => r.json()),
    fetch(url2).then((r) => r.json()),
    fetch(url3).then((r) => r.json()),
  ]);
  return { users, posts, comments };
};
```

---

## Modules (Import/Export)

### Named Exports

```javascript
// utils.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// OR
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
export { add, multiply };
```

### Named Imports

```javascript
// main.js
import { add, multiply } from "./utils.js";

// Use them
add(5, 3);
multiply(4, 7);

// Rename while importing
import { add as sum } from "./utils.js";
sum(5, 3);

// Import everything
import * as utils from "./utils.js";
utils.add(5, 3);
```

### Default Export

```javascript
// api.js
const api = {
  fetchUsers: async () => {
    /* ... */
  },
  fetchPosts: async () => {
    /* ... */
  },
};

export default api;
```

### Default Import

```javascript
// main.js
import api from "./api.js";

// Use it
api.fetchUsers();
```

### Combining Named and Default

```javascript
// user.js
export const formatUser = (user) => {
  /* ... */
};
export const validateUser = (user) => {
  /* ... */
};

const UserService = {
  /* ... */
};
export default UserService;

// main.js
import UserService, { formatUser, validateUser } from "./user.js";
```

### HTML Setup

```html
<!-- IMPORTANT: Add type="module" -->
<script type="module" src="main.js"></script>
```

---

## Rest & Spread

### Rest (Collect)

```javascript
// In function parameters - collects arguments
const sum = (...numbers) => {
  return numbers.reduce((total, n) => total + n, 0);
};

sum(1, 2, 3, 4, 5); // 15

// Mix with regular params
const greet = (greeting, ...names) => {
  console.log(`${greeting} ${names.join(", ")}`);
};

greet("Hello", "John", "Jane", "Bob");
// "Hello John, Jane, Bob"
```

### Spread (Expand)

```javascript
// Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1,2,3,4,5,6]

// Objects
const user = { name: "John", age: 25 };
const updated = { ...user, age: 26 };

// Function arguments
const numbers = [1, 2, 3, 4, 5];
Math.max(...numbers); // 5
```

---

## Error Handling Patterns

### Basic Try/Catch

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

### With Error Messages

```javascript
const fetchUser = async (userId) => {
  try {
    const response = await fetch(`/api/users/${userId}`);

    if (!response.ok) {
      throw new Error(`User ${userId} not found`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch user:", error.message);
    return null;
  }
};
```

### Finally Block

```javascript
const fetchWithLoading = async () => {
  try {
    console.log("Loading...");
    const data = await fetch(url).then((r) => r.json());
    console.log("Success!");
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  } finally {
    console.log("Done!"); // Always runs
  }
};
```

---

## React Patterns (Preview)

### Fetch in useEffect

```javascript
// This is how you'll use it in React
const Component = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.example.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
```

---

## JSON Methods

### Parse (String → Object)

```javascript
const jsonString = '{"name":"John","age":25}';
const obj = JSON.parse(jsonString);

console.log(obj.name); // "John"
console.log(obj.age); // 25
```

### Stringify (Object → String)

```javascript
const obj = { name: "John", age: 25 };
const jsonString = JSON.stringify(obj);

console.log(jsonString); // '{"name":"John","age":25}'

// Pretty print
const pretty = JSON.stringify(obj, null, 2);
console.log(pretty);
// {
//   "name": "John",
//   "age": 25
// }
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

### Fetch with Parameters

```javascript
const searchUsers = async (searchTerm) => {
  try {
    const response = await fetch(
      `https://api.example.com/users?search=${searchTerm}`,
    );
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

searchUsers("john");
```

### Dependent Fetches

```javascript
const getUserWithPosts = async (userId) => {
  try {
    // First fetch - get user
    const userRes = await fetch(`https://api.example.com/users/${userId}`);
    const user = await userRes.json();

    // Second fetch - depends on first
    const postsRes = await fetch(
      `https://api.example.com/posts?userId=${user.id}`,
    );
    const posts = await postsRes.json();

    return { user, posts };
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
```

---

## Debugging Tips

### Console.log Intermediate Steps

```javascript
const fetchData = async () => {
  try {
    console.log("1. Starting fetch...");
    const response = await fetch(url);
    console.log("2. Response:", response);

    const data = await response.json();
    console.log("3. Data:", data);

    return data;
  } catch (error) {
    console.error("Error at step:", error);
  }
};
```

### Check Network Tab

- Open DevTools (F12)
- Go to Network tab
- Look for XHR/Fetch requests
- Check status codes
- View response data

### Common Errors

**"await is only valid in async function"**

```javascript
// ❌ Wrong
const getData = () => {
  const data = await fetch(url);  // Error!
};

// ✅ Correct
const getData = async () => {
  const data = await fetch(url);
};
```

**"Unexpected token in JSON"**

```javascript
// Response isn't JSON - check response first
const response = await fetch(url);
console.log(response.headers.get("content-type"));

if (response.headers.get("content-type")?.includes("application/json")) {
  const data = await response.json();
} else {
  const text = await response.text();
}
```

**"Cannot read property of undefined"**

```javascript
// Use optional chaining
const city = user?.address?.city;

// Or check first
if (user && user.address) {
  console.log(user.address.city);
}
```

---

## Quick Reference

### Async Function

```javascript
const fn = async () => {
  /* ... */
};
```

### Await

```javascript
const result = await promise;
```

### Fetch

```javascript
const response = await fetch(url);
const data = await response.json();
```

### Promise.all

```javascript
const [a, b, c] = await Promise.all([promise1, promise2, promise3]);
```

### Export/Import

```javascript
// Export
export const fn = () => {};
export default obj;

// Import
import obj from "./file.js";
import { fn } from "./file.js";
```

### Try/Catch

```javascript
try {
  // code
} catch (error) {
  console.error(error);
}
```

---

**Keep this handy while coding async JavaScript!** 🚀
