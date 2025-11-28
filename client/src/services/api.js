// client/src/services/API.js

import axios from "axios";

// Create an Axios instance
const API = axios.create({
  baseURL: "http://localhost:5000", // your backend URL
  timeout: 5000, // optional timeout
});

// You can add interceptors if needed (optional)
// API.interceptors.request.use(config => {
//   // Add headers or authentication here if needed
//   return config;
// });

export default API;
