import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/",
  // baseURL: "https://react-memory-backend.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

// export const createEntry = (newEntry) => API.post("/entries", newEntry);
// export const getEntriesByUserId = (id) => API.get(`entries/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
