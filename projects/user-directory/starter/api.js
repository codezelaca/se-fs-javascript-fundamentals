// api.js - API Functions

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

/**
 * Fetch all users from the API
 * @returns {Promise<Array>} Array of user objects
 */
export const fetchUsers = async () => {
  try {
    // TODO: Implement this function
    // 1. Fetch from /users endpoint
    // 2. Parse JSON response
    // 3. Return the data
    // Your code here
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Re-throw so caller can handle
  }
};

/**
 * Fetch a single user by ID
 * @param {number} userId - The user ID
 * @returns {Promise<Object>} User object
 */
export const fetchUserById = async (userId) => {
  try {
    // TODO: Implement this function
    // Your code here
  } catch (error) {
    console.error(`Error fetching user ${userId}:`, error);
    throw error;
  }
};

/**
 * Fetch posts for a specific user
 * @param {number} userId - The user ID
 * @returns {Promise<Array>} Array of post objects
 */
export const fetchUserPosts = async (userId) => {
  try {
    // TODO: Implement this function
    // Endpoint: /posts?userId={userId}
    // Your code here
  } catch (error) {
    console.error(`Error fetching posts for user ${userId}:`, error);
    throw error;
  }
};

/**
 * Fetch comments for a specific post
 * @param {number} postId - The post ID
 * @returns {Promise<Array>} Array of comment objects
 */
export const fetchPostComments = async (postId) => {
  try {
    // TODO: Implement this function (Optional - Level 3)
    // Your code here
  } catch (error) {
    console.error(`Error fetching comments for post ${postId}:`, error);
    throw error;
  }
};
