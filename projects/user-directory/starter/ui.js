// ui.js - UI Update Functions

/**
 * Show loading indicator
 */
export const showLoading = () => {
  // TODO: Implement this
  // Get the loading element and remove 'hidden' class
  // Your code here
};

/**
 * Hide loading indicator
 */
export const hideLoading = () => {
  // TODO: Implement this
  // Your code here
};

/**
 * Show error message
 * @param {string} message - Error message to display
 */
export const showError = (message) => {
  // TODO: Implement this
  // 1. Get error element
  // 2. Set error message text
  // 3. Show error element (remove 'hidden' class)
  // 4. Hide users list and loading
  // Your code here
};

/**
 * Hide error message
 */
export const hideError = () => {
  // TODO: Implement this
  // Your code here
};

/**
 * Display users in the UI
 * @param {Array} users - Array of user objects
 */
export const displayUsers = (users) => {
  // TODO: Implement this
  // 1. Get users list container
  // 2. Clear existing content
  // 3. Create cards for each user
  // 4. Append to container
  // Hint: Use map() to create HTML for each user
  // Hint: Use template literals for HTML
  // Your code here
};

/**
 * Create HTML for a single user card
 * @param {Object} user - User object
 * @returns {string} HTML string
 */
export const createUserCard = (user) => {
  // TODO: Implement this
  // Return HTML string for a user card
  // Include: name, email, company, city
  // Add click event to show details (optional)

  return `
        <div class="user-card" data-user-id="${user.id}">
            <!-- Your HTML here -->
        </div>
    `;
};

/**
 * Show "no results" message
 */
export const showNoResults = () => {
  // TODO: Implement this (for search feature)
  // Your code here
};

/**
 * Hide "no results" message
 */
export const hideNoResults = () => {
  // TODO: Implement this
  // Your code here
};

/**
 * Display user details in modal (Optional - Level 2)
 * @param {Object} user - User object
 * @param {Array} posts - User's posts
 */
export const displayUserDetail = (user, posts = []) => {
  // TODO: Implement this (Optional)
  // Your code here
};
