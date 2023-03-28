import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/auth';

//register user
const register = async (userData) => {
	try {
		const response = await axios.post(API_URL + '/register', userData);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};

const login = async (userData) => {
	try {
		const response = await axios.post(API_URL + '/login', userData);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};

const authService = {
	register,
	login,
};
export default authService;
