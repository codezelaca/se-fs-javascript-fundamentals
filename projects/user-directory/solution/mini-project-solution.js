// ==================================================
// COMPLETE SOLUTION - MINI PROJECT: USER DIRECTORY
// ==================================================

// ============================================
// api.js - API Functions
// ============================================

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

/**
 * Fetch all users from the API
 * @returns {Promise<Array>} Array of user objects
 */
export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const users = await response.json();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

/**
 * Fetch a single user by ID
 * @param {number} userId - The user ID
 * @returns {Promise<Object>} User object
 */
export const fetchUserById = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`);

    if (!response.ok) {
      throw new Error(`User ${userId} not found`);
    }

    const user = await response.json();
    return user;
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
    const response = await fetch(`${API_BASE_URL}/posts?userId=${userId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch posts for user ${userId}`);
    }

    const posts = await response.json();
    return posts;
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
    const response = await fetch(`${API_BASE_URL}/comments?postId=${postId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch comments for post ${postId}`);
    }

    const comments = await response.json();
    return comments;
  } catch (error) {
    console.error(`Error fetching comments for post ${postId}:`, error);
    throw error;
  }
};

// ============================================
// ui.js - UI Update Functions
// ============================================

/**
 * Show loading indicator
 */
export const showLoading = () => {
  const loadingEl = document.getElementById("loading");
  if (loadingEl) {
    loadingEl.classList.remove("hidden");
  }
};

/**
 * Hide loading indicator
 */
export const hideLoading = () => {
  const loadingEl = document.getElementById("loading");
  if (loadingEl) {
    loadingEl.classList.add("hidden");
  }
};

/**
 * Show error message
 * @param {string} message - Error message to display
 */
export const showError = (message) => {
  const errorEl = document.getElementById("error");
  const errorMessageEl = errorEl?.querySelector(".error-message");
  const usersListEl = document.getElementById("usersList");

  if (errorMessageEl) {
    errorMessageEl.textContent = message;
  }

  if (errorEl) {
    errorEl.classList.remove("hidden");
  }

  if (usersListEl) {
    usersListEl.classList.add("hidden");
  }

  hideLoading();
};

/**
 * Hide error message
 */
export const hideError = () => {
  const errorEl = document.getElementById("error");
  if (errorEl) {
    errorEl.classList.add("hidden");
  }
};

/**
 * Display users in the UI
 * @param {Array} users - Array of user objects
 */
export const displayUsers = (users) => {
  const usersListEl = document.getElementById("usersList");
  const noResultsEl = document.getElementById("noResults");

  if (!usersListEl) return;

  // Clear existing content
  usersListEl.innerHTML = "";

  // Show/hide no results message
  if (users.length === 0) {
    showNoResults();
    usersListEl.classList.add("hidden");
    return;
  }

  hideNoResults();
  usersListEl.classList.remove("hidden");

  // Create and append user cards
  const cardsHTML = users.map((user) => createUserCard(user)).join("");
  usersListEl.innerHTML = cardsHTML;

  // Add click listeners to cards
  const userCards = usersListEl.querySelectorAll(".user-card");
  userCards.forEach((card) => {
    card.addEventListener("click", () => {
      const userId = parseInt(card.dataset.userId);
      // Trigger custom event for user click
      document.dispatchEvent(
        new CustomEvent("userCardClick", { detail: { userId } }),
      );
    });
  });
};

/**
 * Create HTML for a single user card
 * @param {Object} user - User object
 * @returns {string} HTML string
 */
export const createUserCard = (user) => {
  return `
        <div class="user-card" data-user-id="${user.id}">
            <h3>${user.name}</h3>
            <p class="email">✉️ ${user.email}</p>
            <p class="company">🏢 ${user.company.name}</p>
            <p class="city">📍 ${user.address.city}</p>
        </div>
    `;
};

/**
 * Show "no results" message
 */
export const showNoResults = () => {
  const noResultsEl = document.getElementById("noResults");
  if (noResultsEl) {
    noResultsEl.classList.remove("hidden");
  }
};

/**
 * Hide "no results" message
 */
export const hideNoResults = () => {
  const noResultsEl = document.getElementById("noResults");
  if (noResultsEl) {
    noResultsEl.classList.add("hidden");
  }
};

/**
 * Display user details in modal
 * @param {Object} user - User object
 * @param {Array} posts - User's posts
 */
export const displayUserDetail = (user, posts = []) => {
  const modalEl = document.getElementById("userModal");
  const userDetailEl = document.getElementById("userDetail");

  if (!modalEl || !userDetailEl) return;

  // Create detail HTML
  const detailHTML = `
        <div class="user-detail">
            <h2>${user.name}</h2>
            <p class="username">@${user.username}</p>
            
            <div class="detail-section">
                <h3>Contact Information</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            </div>
            
            <div class="detail-section">
                <h3>Address</h3>
                <p>${user.address.street}, ${user.address.suite}</p>
                <p>${user.address.city}, ${user.address.zipcode}</p>
            </div>
            
            <div class="detail-section">
                <h3>Company</h3>
                <p><strong>${user.company.name}</strong></p>
                <p><em>"${user.company.catchPhrase}"</em></p>
            </div>
            
            <div class="detail-section">
                <h3>Posts (${posts.length})</h3>
                <div class="posts-list">
                    ${
                      posts.length > 0
                        ? posts
                            .map(
                              (post, index) => `
                            <div class="post-item">
                                <strong>${index + 1}.</strong> ${post.title}
                            </div>
                        `,
                            )
                            .join("")
                        : "<p>No posts available.</p>"
                    }
                </div>
            </div>
        </div>
    `;

  userDetailEl.innerHTML = detailHTML;
  modalEl.classList.remove("hidden");
  modalEl.classList.add("active");
};

/**
 * Hide user detail modal
 */
export const hideUserDetail = () => {
  const modalEl = document.getElementById("userModal");
  if (modalEl) {
    modalEl.classList.add("hidden");
    modalEl.classList.remove("active");
  }
};

// ============================================
// main.js - Main Application Logic
// ============================================

import { fetchUsers, fetchUserById, fetchUserPosts } from "./api.js";
import {
  showLoading,
  hideLoading,
  showError,
  hideError,
  displayUsers,
  showNoResults,
  hideNoResults,
  displayUserDetail,
  hideUserDetail,
} from "./ui.js";

// Global state
let allUsers = [];
let currentSearchTerm = "";

/**
 * Initialize the application
 */
const init = async () => {
  try {
    showLoading();
    hideError();

    // Fetch all users
    allUsers = await fetchUsers();

    // Display users
    displayUsers(allUsers);

    hideLoading();

    // Set up event listeners
    setupEventListeners();
  } catch (error) {
    hideLoading();
    showError("Failed to load users. Please try again.");
    console.error("Init error:", error);
  }
};

/**
 * Handle search input
 * @param {string} searchTerm - Search term entered by user
 */
const handleSearch = (searchTerm) => {
  currentSearchTerm = searchTerm.toLowerCase().trim();

  if (currentSearchTerm === "") {
    // Show all users if search is empty
    displayUsers(allUsers);
    return;
  }

  // Filter users by name (case-insensitive)
  const filteredUsers = allUsers.filter((user) =>
    user.name.toLowerCase().includes(currentSearchTerm),
  );

  displayUsers(filteredUsers);
};

/**
 * Handle retry button click
 */
const handleRetry = () => {
  hideError();
  init();
};

/**
 * Handle user card click
 * @param {number} userId - User ID
 */
const handleUserClick = async (userId) => {
  try {
    showLoading();

    // Fetch user details and posts in parallel
    const [user, posts] = await Promise.all([
      fetchUserById(userId),
      fetchUserPosts(userId),
    ]);

    hideLoading();

    // Display in modal
    displayUserDetail(user, posts);
  } catch (error) {
    hideLoading();
    console.error("Error loading user details:", error);
    alert("Failed to load user details. Please try again.");
  }
};

/**
 * Set up event listeners
 */
const setupEventListeners = () => {
  // Search input
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      handleSearch(e.target.value);
    });
  }

  // Retry button
  const retryBtn = document.getElementById("retryBtn");
  if (retryBtn) {
    retryBtn.addEventListener("click", handleRetry);
  }

  // Modal close button
  const closeBtn = document.querySelector(".close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", hideUserDetail);
  }

  // Close modal on outside click
  const modal = document.getElementById("userModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        hideUserDetail();
      }
    });
  }

  // Listen for user card clicks (custom event)
  document.addEventListener("userCardClick", (e) => {
    handleUserClick(e.detail.userId);
  });

  // Escape key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hideUserDetail();
    }
  });
};

// Start the application when DOM is ready
document.addEventListener("DOMContentLoaded", init);

// ============================================
// ADDITIONAL CSS FOR SOLUTION
// ============================================

/*
Add this to style.css for better user detail display:

.user-detail {
    padding: 20px 0;
}

.user-detail h2 {
    color: #1f2937;
    margin-bottom: 5px;
}

.username {
    color: #6b7280;
    font-size: 1.1rem;
    margin-bottom: 20px;
}

.detail-section {
    margin-bottom: 25px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e5e7eb;
}

.detail-section:last-child {
    border-bottom: none;
}

.detail-section h3 {
    color: #374151;
    margin-bottom: 10px;
    font-size: 1.1rem;
}

.detail-section p {
    margin: 5px 0;
    color: #4b5563;
}

.detail-section a {
    color: #2563eb;
    text-decoration: none;
}

.detail-section a:hover {
    text-decoration: underline;
}

.posts-list {
    max-height: 300px;
    overflow-y: auto;
}

.post-item {
    padding: 10px;
    margin: 8px 0;
    background: #f9fafb;
    border-radius: 6px;
    font-size: 0.9rem;
    color: #374151;
}

.post-item strong {
    color: #2563eb;
    margin-right: 8px;
}
*/

// ============================================
// BONUS: ADVANCED FEATURES (LEVEL 3)
// ============================================

/**
 * Get unique companies from all users
 * @param {Array} users - Array of user objects
 * @returns {Array} Array of unique company names
 */
const getUniqueCompanies = (users) => {
  const companies = users.map((user) => user.company.name);
  return [...new Set(companies)].sort();
};

/**
 * Populate company filter dropdown
 */
const populateCompanyFilter = () => {
  const selectEl = document.getElementById("companyFilter");
  if (!selectEl) return;

  const companies = getUniqueCompanies(allUsers);

  // Clear existing options (except "All")
  selectEl.innerHTML = '<option value="all">All Companies</option>';

  // Add company options
  companies.forEach((company) => {
    const option = document.createElement("option");
    option.value = company;
    option.textContent = company;
    selectEl.appendChild(option);
  });
};

/**
 * Handle company filter change
 * @param {string} companyName - Selected company name
 */
const handleCompanyFilter = (companyName) => {
  let filteredUsers = allUsers;

  // Filter by company if not "all"
  if (companyName !== "all") {
    filteredUsers = allUsers.filter(
      (user) => user.company.name === companyName,
    );
  }

  // Apply search filter if exists
  if (currentSearchTerm) {
    filteredUsers = filteredUsers.filter((user) =>
      user.name.toLowerCase().includes(currentSearchTerm),
    );
  }

  displayUsers(filteredUsers);
};

/**
 * Sort users
 * @param {Array} users - Users to sort
 * @param {string} sortBy - Field to sort by (name, company, city)
 * @param {string} order - Sort order (asc, desc)
 * @returns {Array} Sorted users
 */
const sortUsers = (users, sortBy = "name", order = "asc") => {
  const sorted = [...users].sort((a, b) => {
    let valueA, valueB;

    switch (sortBy) {
      case "name":
        valueA = a.name.toLowerCase();
        valueB = b.name.toLowerCase();
        break;
      case "company":
        valueA = a.company.name.toLowerCase();
        valueB = b.company.name.toLowerCase();
        break;
      case "city":
        valueA = a.address.city.toLowerCase();
        valueB = b.address.city.toLowerCase();
        break;
      default:
        valueA = a.name.toLowerCase();
        valueB = b.name.toLowerCase();
    }

    if (order === "asc") {
      return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
    } else {
      return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
    }
  });

  return sorted;
};

// ============================================
// USAGE EXAMPLE
// ============================================

/*
To use the advanced features, add to HTML:

<div class="controls">
    <div class="search-box">
        <input type="text" id="searchInput" placeholder="Search users...">
    </div>
    
    <div class="filter-box">
        <select id="companyFilter">
            <option value="all">All Companies</option>
        </select>
    </div>
    
    <div class="sort-box">
        <select id="sortSelect">
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="company-asc">Company (A-Z)</option>
            <option value="city-asc">City (A-Z)</option>
        </select>
    </div>
</div>

Then in setupEventListeners():

const companyFilter = document.getElementById('companyFilter');
if (companyFilter) {
    populateCompanyFilter();
    companyFilter.addEventListener('change', (e) => {
        handleCompanyFilter(e.target.value);
    });
}

const sortSelect = document.getElementById('sortSelect');
if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
        const [field, order] = e.target.value.split('-');
        const sorted = sortUsers(allUsers, field, order);
        displayUsers(sorted);
    });
}
*/
