import axios from "axios";

const API_URL = "/api/v1/auth/"; 

//register user
const register = async (userData) => {

    const response = await axios.post(API_URL.userData);
    console.log(response);

};

const authService = {
    register,

};
export default authService;