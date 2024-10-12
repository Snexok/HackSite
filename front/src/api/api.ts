import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = (login: string, password: string) => {
	return axios.post(`${API_URL}/login`, { login, password });
};
