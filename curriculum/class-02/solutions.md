# JavaScript Class 2 - Solutions

---

## Exercise Set 1: Basic Async/Await

### Solution 1.1

```javascript
const fetchAllUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log("All users:", users);
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

fetchAllUsers();
```

### Solution 1.2

```javascript
const getUserNames = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const names = users.map((user) => user.name);
    console.log("User names:", names);
    return names;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

getUserNames();
```

### Solution 1.3

```javascript
const getUser = async (userId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );
    const user = await response.json();
    console.log(`User ${userId}:`, user);
    return user;
  } catch (error) {
    console.error(`Error fetching user ${userId}:`, error);
    return null;
  }
};

getUser(1);
getUser(5);
```

### Solution 1.4

```javascript
const getUserSafely = async (userId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );

    if (!response.ok) {
      throw new Error(`User ${userId} not found`);
    }

    const user = await response.json();
    console.log("User found:", user);
    return user;
  } catch (error) {
    console.log("User not found");
    return null;
  }
};

getUserSafely(1); // Works
getUserSafely(999); // Handles gracefully
```

---

## Exercise Set 2: Working with Posts

### Solution 2.1

```javascript
const getAllPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    console.log("Total posts:", posts.length);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

getAllPosts();
```

### Solution 2.2

```javascript
const getPostsByUser = async (userId) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    const userPosts = posts.filter((post) => post.userId === userId);
    console.log(`Posts by user ${userId}:`, userPosts);
    return userPosts;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

getPostsByUser(1);
```

### Solution 2.3

```javascript
const getUserPostTitles = async (userId) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    const titles = posts
      .filter((post) => post.userId === userId)
      .map((post) => post.title);
    console.log(`Post titles by user ${userId}:`, titles);
    return titles;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

getUserPostTitles(1);
```

### Solution 2.4

```javascript
const countPostsByUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    const counts = {};
    posts.forEach((post) => {
      counts[post.userId] = (counts[post.userId] || 0) + 1;
    });

    console.log("Posts per user:", counts);
    return counts;
  } catch (error) {
    console.error("Error:", error);
    return {};
  }
};

countPostsByUser();
```

---

## Exercise Set 3: Combining Data

### Solution 3.1

```javascript
const getUserWithPosts = async (userId) => {
  try {
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );
    const user = await userResponse.json();

    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    );
    const posts = await postsResponse.json();

    const result = { user, posts };
    console.log(`User ${userId} with posts:`, result);
    return result;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

getUserWithPosts(1);
```

### Solution 3.2

```javascript
const getUserSummary = async (userId) => {
  try {
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );
    const user = await userResponse.json();

    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    );
    const posts = await postsResponse.json();

    const summary = {
      userName: user.name,
      email: user.email,
      totalPosts: posts.length,
      postTitles: posts.map((post) => post.title),
    };

    console.log("User summary:", summary);
    return summary;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

getUserSummary(1);
```

### Solution 3.3

```javascript
const getMultipleUserStats = async () => {
  try {
    const userIds = [1, 2, 3];
    const stats = [];

    for (const userId of userIds) {
      const userResponse = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
      );
      const user = await userResponse.json();

      const postsResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
      );
      const posts = await postsResponse.json();

      stats.push({
        name: user.name,
        postCount: posts.length,
      });
    }

    console.log("Multiple user stats:", stats);
    return stats;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

getMultipleUserStats();
```

---

## Exercise Set 4: Parallel Requests

### Solution 4.1

```javascript
const fetchUsersAndPosts = async () => {
  console.time("Parallel fetch");

  try {
    const [usersResponse, postsResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
    ]);

    const users = await usersResponse.json();
    const posts = await postsResponse.json();

    console.timeEnd("Parallel fetch");

    const result = { users, posts };
    console.log("Fetched data:", result);
    return result;
  } catch (error) {
    console.error("Error:", error);
    console.timeEnd("Parallel fetch");
    return null;
  }
};

fetchUsersAndPosts();
```

### Solution 4.2

```javascript
const fetchAllData = async () => {
  try {
    const [usersRes, postsRes, commentsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ]);

    const users = await usersRes.json();
    const posts = await postsRes.json();
    const comments = await commentsRes.json();

    console.log(`Users: ${users.length}`);
    console.log(`Posts: ${posts.length}`);
    console.log(`Comments: ${comments.length}`);

    return { users, posts, comments };
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

fetchAllData();
```

### Solution 4.3

```javascript
const fetchSequential = async () => {
  console.time("Sequential");

  try {
    const usersRes = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await usersRes.json();

    const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await postsRes.json();

    const commentsRes = await fetch(
      "https://jsonplaceholder.typicode.com/comments",
    );
    const comments = await commentsRes.json();

    console.timeEnd("Sequential");
    return { users, posts, comments };
  } catch (error) {
    console.error("Error:", error);
    console.timeEnd("Sequential");
    return null;
  }
};

const fetchParallel = async () => {
  console.time("Parallel");

  try {
    const [usersRes, postsRes, commentsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ]);

    const [users, posts, comments] = await Promise.all([
      usersRes.json(),
      postsRes.json(),
      commentsRes.json(),
    ]);

    console.timeEnd("Parallel");
    return { users, posts, comments };
  } catch (error) {
    console.error("Error:", error);
    console.timeEnd("Parallel");
    return null;
  }
};

// Run both and compare
fetchSequential();
fetchParallel();
```

---

## Exercise Set 5: Advanced Challenges

### Challenge 5.1

```javascript
const getPostWithComments = async (postId) => {
  try {
    const [postRes, commentsRes] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`),
    ]);

    const post = await postRes.json();
    const comments = await commentsRes.json();

    const result = {
      post,
      comments,
      commentCount: comments.length,
    };

    console.log(`Post ${postId} with comments:`, result);
    return result;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

getPostWithComments(1);
```

### Challenge 5.2

```javascript
const searchPosts = async (searchTerm) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    const matches = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    console.log(`Posts matching "${searchTerm}":`, matches);
    return matches;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

searchPosts("sunt");
```

### Challenge 5.3

```javascript
const getTopPosters = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    // Count posts per user
    const counts = {};
    posts.forEach((post) => {
      counts[post.userId] = (counts[post.userId] || 0) + 1;
    });

    // Convert to array and sort
    const sorted = Object.entries(counts)
      .map(([userId, postCount]) => ({
        userId: parseInt(userId),
        postCount,
      }))
      .sort((a, b) => b.postCount - a.postCount)
      .slice(0, 3);

    console.log("Top 3 posters:", sorted);
    return sorted;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

getTopPosters();
```

### Challenge 5.4

```javascript
const getCompleteUserProfile = async (userId) => {
  try {
    // Fetch user and posts in parallel
    const [userRes, postsRes] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
    ]);

    const user = await userRes.json();
    const posts = await postsRes.json();

    // Fetch comments for all posts in parallel
    const commentPromises = posts.map((post) =>
      fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`,
      ).then((res) => res.json()),
    );

    const allComments = await Promise.all(commentPromises);
    const flatComments = allComments.flat();

    const profile = {
      user: {
        name: user.name,
        email: user.email,
        username: user.username,
        company: user.company.name,
      },
      posts: posts,
      totalComments: flatComments.length,
      averageCommentsPerPost: (flatComments.length / posts.length).toFixed(2),
    };

    console.log("Complete user profile:", profile);
    return profile;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

getCompleteUserProfile(1);
```

---

## Bonus: Real-World Scenario

```javascript
const getBlogStats = async () => {
  try {
    // Fetch all data in parallel
    const [usersRes, postsRes, commentsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ]);

    const users = await usersRes.json();
    const posts = await postsRes.json();
    const comments = await commentsRes.json();

    // Count posts per user
    const postCounts = {};
    posts.forEach((post) => {
      postCounts[post.userId] = (postCounts[post.userId] || 0) + 1;
    });

    // Find most active user
    const mostActiveUserId = Object.entries(postCounts).sort(
      (a, b) => b[1] - a[1],
    )[0][0];
    const mostActiveUser = users.find(
      (u) => u.id === parseInt(mostActiveUserId),
    );

    // Count comments per post
    const commentCounts = {};
    comments.forEach((comment) => {
      commentCounts[comment.postId] = (commentCounts[comment.postId] || 0) + 1;
    });

    // Find most commented post
    const mostCommentedPostId = Object.entries(commentCounts).sort(
      (a, b) => b[1] - a[1],
    )[0][0];
    const mostCommentedPost = posts.find(
      (p) => p.id === parseInt(mostCommentedPostId),
    );

    const stats = {
      totalUsers: users.length,
      totalPosts: posts.length,
      totalComments: comments.length,
      averagePostsPerUser: (posts.length / users.length).toFixed(2),
      averageCommentsPerPost: (comments.length / posts.length).toFixed(2),
      mostActiveUser: {
        name: mostActiveUser.name,
        postCount: postCounts[mostActiveUserId],
      },
      mostCommentedPost: {
        title: mostCommentedPost.title,
        commentCount: commentCounts[mostCommentedPostId],
      },
    };

    console.table(stats);
    return stats;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

getBlogStats();
```

---

## Notes

- All solutions include proper error handling
- Parallel requests use Promise.all() where possible
- Code is formatted for readability
- Each solution is tested and working

Great job completing the exercises! 🎉
