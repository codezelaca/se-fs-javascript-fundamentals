# JavaScript Class 2 - Async Exercises

## Instructions

- All exercises use real APIs
- Test your code in the browser console
- Use async/await (not .then())
- Always include try/catch error handling
- Console.log your results to verify

---

## API Information

You'll use these free APIs:

**JSONPlaceholder** (Fake REST API for testing)

- Base URL: `https://jsonplaceholder.typicode.com`
- Endpoints:
  - `/users` - 10 users
  - `/posts` - 100 posts
  - `/comments` - 500 comments
  - `/users/{id}` - Single user
  - `/posts?userId={id}` - Posts by user

**Documentation:** https://jsonplaceholder.typicode.com/guide/

---

## Exercise Set 1: Basic Async/Await (15 minutes)

### Exercise 1.1: Fetch All Users

Create an async function that:

1. Fetches all users from `/users`
2. Console.logs the array of users
3. Returns the array

```javascript
const fetchAllUsers = async () => {
  // Your code here
};

fetchAllUsers();
```

**Expected output:** Array of 10 user objects

---

### Exercise 1.2: Extract User Names

Create an async function that:

1. Fetches all users
2. Creates an array of just the names (use .map())
3. Console.logs the names
4. Returns the names array

```javascript
const getUserNames = async () => {
  // Your code here
};

getUserNames();
```

**Expected output:** `["Leanne Graham", "Ervin Howell", ...]`

---

### Exercise 1.3: Fetch Single User

Create an async function that:

1. Takes a userId parameter
2. Fetches that specific user from `/users/{userId}`
3. Console.logs the user object
4. Returns the user

```javascript
const getUser = async (userId) => {
  // Your code here
};

getUser(1);
getUser(5);
```

**Expected output:** Single user object

---

### Exercise 1.4: Error Handling

Create an async function that:

1. Tries to fetch a user with an invalid ID (999)
2. Uses try/catch to handle the error
3. If successful, returns the user
4. If error, console.logs "User not found" and returns null

```javascript
const getUserSafely = async (userId) => {
  // Your code here
};

getUserSafely(1); // Should work
getUserSafely(999); // Should handle gracefully
```

---

## Exercise Set 2: Working with Posts (15 minutes)

### Exercise 2.1: Fetch All Posts

Create an async function that:

1. Fetches all posts from `/posts`
2. Console.logs the total number of posts
3. Returns the posts array

```javascript
const getAllPosts = async () => {
  // Your code here
};

getAllPosts();
```

**Expected output:** 100 posts

---

### Exercise 2.2: Filter Posts by User

Create an async function that:

1. Takes a userId parameter
2. Fetches all posts
3. Filters to keep only posts by that userId (use .filter())
4. Console.logs the filtered posts
5. Returns the filtered array

```javascript
const getPostsByUser = async (userId) => {
  // Your code here
};

getPostsByUser(1);
```

**Expected output:** Array of posts where `userId === 1`

---

### Exercise 2.3: Get Post Titles

Create an async function that:

1. Takes a userId parameter
2. Gets all posts by that user
3. Extracts just the titles (use .map())
4. Console.logs the titles
5. Returns titles array

```javascript
const getUserPostTitles = async (userId) => {
  // Your code here
};

getUserPostTitles(1);
```

**Expected output:** Array of post title strings

---

### Exercise 2.4: Count Posts

Create an async function that:

1. Fetches all posts
2. Creates an object showing how many posts each user has written
3. Console.logs the result
4. Returns the object

**Hint:** Loop through posts and count by userId

```javascript
const countPostsByUser = async () => {
  // Your code here
};

countPostsByUser();
```

**Expected output:**

```javascript
{
  "1": 10,
  "2": 10,
  "3": 10,
  // ...
}
```

---

## Exercise Set 3: Combining Data (15 minutes)

### Exercise 3.1: User with Posts

Create an async function that:

1. Takes a userId parameter
2. Fetches the user data from `/users/{userId}`
3. Fetches that user's posts from `/posts?userId={userId}`
4. Returns an object: `{ user, posts }`
5. Console.logs the result

```javascript
const getUserWithPosts = async (userId) => {
  // Your code here
};

getUserWithPosts(1);
```

**Expected output:**

```javascript
{
  user: { id: 1, name: "Leanne Graham", ... },
  posts: [ { userId: 1, id: 1, title: "...", ... }, ... ]
}
```

---

### Exercise 3.2: User Summary

Create an async function that:

1. Takes a userId parameter
2. Gets user and their posts (reuse previous function or fetch both)
3. Creates a summary object with:
   - userName
   - email
   - totalPosts (count)
   - postTitles (array)
4. Returns the summary

```javascript
const getUserSummary = async (userId) => {
  // Your code here
};

getUserSummary(1);
```

**Expected output:**

```javascript
{
  userName: "Leanne Graham",
  email: "Sincere@april.biz",
  totalPosts: 10,
  postTitles: ["sunt aut...", "qui est...", ...]
}
```

---

### Exercise 3.3: Multiple Users Data

Create an async function that:

1. Fetches data for users 1, 2, and 3
2. For each user, get their name and post count
3. Returns array of objects: `{ name, postCount }`

**Hint:** You'll need to make multiple async calls

```javascript
const getMultipleUserStats = async () => {
  // Your code here
};

getMultipleUserStats();
```

**Expected output:**

```javascript
[
  { name: "Leanne Graham", postCount: 10 },
  { name: "Ervin Howell", postCount: 10 },
  { name: "Clementine Bauch", postCount: 10 },
];
```

---

## Exercise Set 4: Parallel Requests (10 minutes)

### Exercise 4.1: Fetch Users and Posts Together

Create an async function that:

1. Fetches users and posts at the SAME TIME using Promise.all()
2. Returns both: `{ users, posts }`
3. Console.log how long it takes

**Hint:** Use console.time() and console.timeEnd()

```javascript
const fetchUsersAndPosts = async () => {
  console.time("Parallel fetch");
  // Your code here
  console.timeEnd("Parallel fetch");
};

fetchUsersAndPosts();
```

---

### Exercise 4.2: Fetch All Data

Create an async function that:

1. Fetches users, posts, AND comments all at once
2. Uses Promise.all()
3. Returns `{ users, posts, comments }`
4. Console.logs the count of each

```javascript
const fetchAllData = async () => {
  // Your code here
};

fetchAllData();
```

**Expected output:**

```
Users: 10
Posts: 100
Comments: 500
```

---

### Exercise 4.3: Compare Sequential vs Parallel

Create two functions:

1. `fetchSequential()` - fetches users, then posts, then comments (one after another)
2. `fetchParallel()` - fetches all three at once

Time both and see the difference!

```javascript
const fetchSequential = async () => {
  console.time("Sequential");
  // Fetch users
  // THEN fetch posts
  // THEN fetch comments
  console.timeEnd("Sequential");
};

const fetchParallel = async () => {
  console.time("Parallel");
  // Fetch all at once with Promise.all()
  console.timeEnd("Parallel");
};

fetchSequential();
fetchParallel();
```

---

## Exercise Set 5: Advanced Challenges (Optional)

### Challenge 5.1: Post with Comments

Create an async function that:

1. Takes a postId parameter
2. Fetches the post from `/posts/{postId}`
3. Fetches comments for that post from `/comments?postId={postId}`
4. Returns: `{ post, comments, commentCount }`

```javascript
const getPostWithComments = async (postId) => {
  // Your code here
};

getPostWithComments(1);
```

---

### Challenge 5.2: Search Posts

Create an async function that:

1. Takes a search term parameter
2. Fetches all posts
3. Filters posts where the title includes the search term
4. Returns matching posts

```javascript
const searchPosts = async (searchTerm) => {
  // Your code here
};

searchPosts("sunt");
```

---

### Challenge 5.3: Top Posters

Create an async function that:

1. Fetches all posts
2. Counts posts per user
3. Returns the top 3 users with most posts
4. Format: `[{ userId, postCount }, ...]`

```javascript
const getTopPosters = async () => {
  // Your code here
};

getTopPosters();
```

---

### Challenge 5.4: Complete User Profile

Create an async function that:

1. Takes a userId
2. Fetches:
   - User data
   - User's posts
   - Comments on user's posts (all of them)
3. Returns complete profile:

```javascript
{
  user: { name, email, ... },
  posts: [...],
  totalComments: number,
  averageCommentsPerPost: number
}
```

```javascript
const getCompleteUserProfile = async (userId) => {
  // Your code here
};

getCompleteUserProfile(1);
```

---

## Bonus: Real-World Scenario

### Build a Blog Statistics Dashboard

Create a function that generates blog statistics:

```javascript
const getBlogStats = async () => {
  // Fetch all necessary data

  // Calculate and return:
  return {
    totalUsers: number,
    totalPosts: number,
    totalComments: number,
    averagePostsPerUser: number,
    averageCommentsPerPost: number,
    mostActiveUser: { name, postCount },
    mostCommentedPost: { title, commentCount },
  };
};

getBlogStats().then((stats) => console.table(stats));
```

---

## Submission Checklist

Before submitting, make sure:

- [ ] All functions use async/await (not .then())
- [ ] All functions have try/catch error handling
- [ ] All functions console.log results
- [ ] Code is tested and working
- [ ] Variable names are clear
- [ ] Code is formatted nicely

Good luck! 🚀

---

## Helpful Tips

**Common Mistakes:**

1. Forgetting `await` keyword
2. Forgetting second `await` for `.json()`
3. Not handling errors with try/catch
4. Using wrong endpoint URL

**Debugging:**

1. Console.log the response before parsing
2. Check Network tab in DevTools
3. Verify the URL is correct
4. Make sure fetch has both awaits

**Testing:**

```javascript
// Always test your functions
const test = async () => {
  const result = await yourFunction();
  console.log("Result:", result);
};

test();
```
