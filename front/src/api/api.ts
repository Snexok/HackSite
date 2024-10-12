import axios from 'axios';

const API_URL = process.env.API_URL;

export const loginUser = (login: string, password: string) => {
	return axios.post(`${API_URL}/login`, { login, password });
};
