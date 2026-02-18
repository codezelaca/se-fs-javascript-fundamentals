import { fetchUsers } from "./api.js";
import {
  showLoading,
  hideLoading,
  showError,
  hideError,
  displayUsers,
} from "./ui.js";

let allUsers = [];

const loadUsers = async () => {
  showLoading();
  hideError();

  try {
    allUsers = await fetchUsers();
    displayUsers(allUsers);
  } catch (error) {
    showError("Failed to load users. Please try again.");
    console.error("Load users error:", error);
  } finally {
    hideLoading();
  }
};

const handleSearch = (searchTerm) => {
  const normalized = searchTerm.toLowerCase().trim();

  if (!normalized) {
    displayUsers(allUsers);
    return;
  }

  const filteredUsers = allUsers.filter((user) =>
    user.name.toLowerCase().includes(normalized),
  );

  displayUsers(filteredUsers);
};

const setupEventListeners = () => {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      handleSearch(event.target.value);
    });
  }

  const retryBtn = document.getElementById("retryBtn");
  if (retryBtn) {
    retryBtn.addEventListener("click", loadUsers);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  loadUsers();
});
