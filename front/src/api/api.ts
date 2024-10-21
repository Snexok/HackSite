import axios from 'axios';
import Service from '@/types/Services';
import { logout } from '@/utils/auth';

const API_URL = import.meta.env.VITE_API_URL;

const instance = axios.create({
	baseURL: API_URL,
});

instance.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');
	if (token) config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

	return config;
});

instance.interceptors.response.use(
	(config) => {
		return config;
	},
	async (error) => {
		if (error.response.status === 403 && error.config) {
			logout();
		}
		throw error;
	},
);

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
export const getAllServices = (page: number = 0, size: number = 20) => {
	return instance.get(`${API_URL}/services`, { params: { page, size } });
};
export const createService = (service: Service) => {
	return instance.post(`${API_URL}/services`, JSON.stringify(service), {
		headers: { 'content-type': 'application/json' },
	});
};
export const updateService = (service: Service) => {
	console.log(JSON.stringify(service));
	return instance.put(`${API_URL}/services`, JSON.stringify(service), {
		headers: { 'content-type': 'application/json' },
	});
};
