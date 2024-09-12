import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
  withCredentials: true,
});

// Get all posts
export async function fetchPosts() {
  try {
    const response = await instance.get("/api/v1/posts");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Add a new Post
export async function addPost(postData) {
  try {
    const response = await instance.post("/api/v1/posts", postData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Register
export async function register(userData) {
  try {
    const response = await instance.post("/api/auth/register", userData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Login
export async function login(userData) {
  try {
    const response = await instance.post("/api/auth/login", userData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Logout
export async function logout() {
  try {
    const response = await instance.get("/api/auth/logout");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
