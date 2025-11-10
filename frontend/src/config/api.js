export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

// You can add your API endpoints here
export const endpoints = {
  health: `${API_URL}/health`,
  books: `${API_URL}/books`,
  // Add more endpoints as needed
};
