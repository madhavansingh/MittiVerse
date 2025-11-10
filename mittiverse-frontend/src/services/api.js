import axios from 'axios';

// Dynamically use API base URL from environment or fallback to localhost
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

console.log("Using API Base URL:", apiBaseUrl);

const apiClient = axios.create({
  baseURL: apiBaseUrl,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
