import axios from 'axios';

let API_URL;

if (process.env.NODE_ENV === 'production') {
	API_URL = 'https://safe-hamlet-55575.herokuapp.com/api/v1/auth';
} else if (process.env.NODE_ENV === 'development') {
	API_URL = 'http://localhost:5000/api/v1/plan';
}

export const createPlan = async (planData) => {
	try {
		const response = await axios.post(API_URL, planData);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};