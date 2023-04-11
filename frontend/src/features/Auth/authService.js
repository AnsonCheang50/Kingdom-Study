import axios from 'axios';

let API_URL;

if (process.env.NODE_ENV === 'production') {
	API_URL = 'https://safe-hamlet-55575.herokuapp.com/api/v1/auth';
} else if (process.env.NODE_ENV === 'development') {
	API_URL = 'http://localhost:5000/api/v1/auth';
}

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
		const result = { data: response.data, success: response.data.success };
		return result;
	} catch (error) {
		console.error(error.message);
	}
};

const authService = {
	register,
	login,
};
export default authService;
