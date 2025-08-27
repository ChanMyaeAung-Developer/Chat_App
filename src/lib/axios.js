import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "http://192.168.0.102:5001/api", // 
  // baseURL: "http://192.168.45.189:5001/api", // cma 
 baseURL: "http://192.168.47.72:5001/api", 
  
  
  
  //Change from an absolute URL to a relative one
  // baseURL:
  //   (import.meta.env.MODE === "development" && "http://localhost:5001/api") ||
  //   "/api",

  withCredentials: true,
});
