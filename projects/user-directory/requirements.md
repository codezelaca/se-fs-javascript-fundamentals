# Mini Project: User Directory App

## Overview

Build a web application that fetches and displays user data from an API, with search and filter capabilities.

---

## Learning Objectives

- Practice async/await with real API
- Combine array methods (map, filter) with async data
- Handle loading and error states
- Organize code with modules
- Create interactive UI

---

## Project Requirements

### Level 1: Basic (Required)

#### 1. Fetch and Display Users

- Fetch users from: `https://jsonplaceholder.typicode.com/users`
- Display all users in a list
- Show for each user:
  - Name
  - Email
  - Company name
  - City

#### 2. Loading State

- Show "Loading..." message while fetching
- Hide loading message when data arrives
- Handle the async delay properly

#### 3. Error Handling

- Use try/catch for all async operations
- Display error message if fetch fails
- Show user-friendly error (not technical details)

#### 4. Basic Styling

- Make it readable and organized
- No need to be fancy, but should look clean
- Cards or list layout for users

---

### Level 2: Intermediate (Recommended)

#### 5. User Details Modal/Section

- Click on a user to see more details
- Show additional information:
  - Username
  - Phone
  - Website
  - Address (full)
  - Company catchphrase

#### 6. Search Functionality

- Add search input field
- Filter users by name as user types
- Case-insensitive search
- Show "No results found" if no matches

#### 7. View User's Posts

- When viewing user details, show their posts
- Fetch from: `https://jsonplaceholder.typicode.com/posts?userId={id}`
- Display post titles
- Show post count

---

### Level 3: Advanced (Optional Challenge)

#### 8. Filter by Company

- Add dropdown to filter by company
- Show only users from selected company
- Option to show "All companies"

#### 9. Sort Functionality

- Sort users by name (A-Z, Z-A)
- Sort by company name
- Sort by city

#### 10. Post Details

- Click post title to view full post
- Show post body/content
- Fetch and display comments for that post
- Show comment count

---

## Technical Requirements

### File Structure

```
projects/user-directory/
├── requirements.md
├── starter/
│   ├── index.html
│   ├── style.css
│   ├── api.js      (API functions)
│   ├── ui.js       (UI update functions)
│   └── main.js     (main application logic)
└── solution/
    └── mini-project-solution.js
```

### Code Organization

**api.js** - All API calls

```javascript
export const fetchUsers = async () => {
  /* ... */
};
export const fetchUserPosts = async (userId) => {
  /* ... */
};
```

**ui.js** - All UI updates

```javascript
export const displayUsers = (users) => {
  /* ... */
};
export const showLoading = () => {
  /* ... */
};
export const showError = (message) => {
  /* ... */
};
```

**main.js** - Main logic

```javascript
import { fetchUsers } from "./api.js";
import { displayUsers, showLoading } from "./ui.js";

// Initialize app
const init = async () => {
  /* ... */
};
```

### Code Quality

- ✅ Use async/await (not .then())
- ✅ Use arrow functions
- ✅ Use array methods (map, filter)
- ✅ Use destructuring where appropriate
- ✅ Use template literals
- ✅ Proper error handling
- ✅ Clear variable names
- ✅ Comments for complex logic

---

## Starter Code Provided

You'll get:

- `starter/index.html` - Basic HTML structure
- `starter/style.css` - Minimal starter styles
- `starter/api.js` and `starter/ui.js` - function stubs with TODOs
- `starter/main.js` - starter app flow scaffold

---

## API Documentation

### JSONPlaceholder API

Base URL: `https://jsonplaceholder.typicode.com`

#### Available Endpoints

**Get all users**

```
GET /users
Returns: Array of 10 users
```

**Get single user**

```
GET /users/{id}
Returns: User object
```

**Get user's posts**

```
GET /posts?userId={id}
Returns: Array of posts by that user
```

**Get single post**

```
GET /posts/{id}
Returns: Post object
```

**Get post's comments**

```
GET /comments?postId={id}
Returns: Array of comments
```

#### User Object Structure

```javascript
{
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: { lat: "-37.3159", lng: "81.1496" }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
}
```

---

## Grading Rubric (For Self-Assessment)

| Feature              | Points  | Description                                 |
| -------------------- | ------- | ------------------------------------------- |
| Fetch users          | 10      | Successfully fetches and displays all users |
| Loading state        | 10      | Shows loading indicator                     |
| Error handling       | 10      | Handles errors gracefully                   |
| Display user info    | 10      | Shows name, email, company, city            |
| Code organization    | 10      | Uses modules, clean code                    |
| Search functionality | 15      | Working search filter                       |
| User details view    | 15      | Click to see more info                      |
| Fetch user posts     | 10      | Shows posts for selected user               |
| Styling              | 5       | Clean, readable layout                      |
| Advanced features    | 5       | Any Level 3 features                        |
| **Total**            | **100** |                                             |

**Passing:** 70+  
**Good:** 80+  
**Excellent:** 90+

---

## Submission

### Required

- [ ] All code files (html, css, js)
- [ ] Screenshot of working app
- [ ] Brief description of what you built (50-100 words)

### Optional

- [ ] Deployed link (GitHub Pages, Netlify, etc.)
- [ ] Video demo (1-2 minutes)

---

## Tips for Success

### Start Simple

1. Get basic fetch working first
2. Display users in simplest way possible
3. Add features one at a time
4. Test after each addition

### Debug Effectively

- Console.log everything at first
- Check Network tab for API calls
- Read error messages carefully
- Test with simple data first

### Time Management

- **Day 1 (2 hours):** Level 1 features
- **Day 2 (2 hours):** Level 2 features
- **Day 3 (1 hour):** Polish and test
- **Day 4 (1 hour):** Add Level 3 features (optional)

### Common Pitfalls to Avoid

- ❌ Not using async/await
- ❌ Forgetting second await for .json()
- ❌ No error handling
- ❌ Not testing edge cases
- ❌ Messy, unorganized code

---

## Example Features in Action

### Search

```
[Search: john]

Results (2):
- John Doe - johndoe@email.com
- Johnny Smith - johnny@email.com
```

### User Detail

```
Leanne Graham
@Bret

Email: Sincere@april.biz
Phone: 1-770-736-8031 x56442
Website: hildegard.org

Address:
Kulas Light, Apt. 556
Gwenborough, 92998-3874

Company:
Romaguera-Crona
"Multi-layered client-server neural-net"

Posts (10):
1. sunt aut facere...
2. qui est esse...
[... more posts]
```

---

## Resources

- [Fetch API Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JSONPlaceholder Guide](https://jsonplaceholder.typicode.com/guide/)
- [Async/Await Tutorial](https://javascript.info/async-await)
- [Array Methods Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

## Bonus Challenges (After Completion)

1. **Pagination:** Show 5 users per page with next/prev buttons
2. **Caching:** Don't re-fetch data you already have
3. **Favorites:** Let users mark favorites (store in localStorage)
4. **Dark Mode:** Add theme toggle
5. **Animations:** Smooth transitions when loading/changing views

---

## Questions?

Post in the class Discord/Slack channel with:

- What you're trying to do
- What's happening
- What you expect to happen
- Code snippet (if relevant)

**Good luck!** 🚀

Remember: The goal is to practice async JavaScript and solidify your skills. Don't stress about making it perfect - focus on making it work!
