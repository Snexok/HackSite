import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const instance = axios.create({
	baseURL: API_URL,
});

instance.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');
	if (token) config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

	return config;
});

// Users
export const getAllUser = () => {
	return instance.get(`${API_URL}/users`);
};
export const loginUser = (login: string, password: string) => {
	return instance.post(`${API_URL}/auth/login`, { login, password });
};
export const createUser = (login: string, username: string, password: string) => {
	return instance.post(`${API_URL}/auth/register`, { login, username, password });
};

// Services
export const getAllServices = () => {
	return instance.get(`${API_URL}/services`);
};
export const createService = (title: string, description: string, price: number) => {
	return instance.post(`${API_URL}/services/create`, { title, description, price });
};
