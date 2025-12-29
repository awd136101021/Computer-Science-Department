import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/auth";

// create an axios instance you can reuse
const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

// Axios interceptor to automatically add token to requests
api.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers = config.headers || {};
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

const register = async ({ fullName, email, password }: { fullName: string; email: string; password: string }) => {
    const res = await api.post("/register", { fullName, email, password });
    if (res.data?.token && typeof window !== 'undefined') {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
    }
    return res.data;
};

const login = async ({ email, password }: { email: string; password: string }) => {
    const res = await api.post("/login", { email, password });
    if (res.data?.token && typeof window !== 'undefined') {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
    }
    return res.data;
};

const getCurrentUser = () => {
    if (typeof window === 'undefined') return null;
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

const getToken = () => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem("token");
};

const logout = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }
};

export const getProtectedData = async () => {
    const res = await api.get("/protected");
    return res.data;
};

export default {
    api,
    register,
    login,
    getCurrentUser,
    getToken,
    logout
};
