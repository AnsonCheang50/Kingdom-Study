import axios from 'axios';

const API_URL = 'https://safe-hamlet-55575.herokuapp.com/api/v1/auth';

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
