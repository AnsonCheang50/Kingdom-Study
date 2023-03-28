import React from 'react';
import {useNavigate} from 'react-router-dom';
import LoginForm from '../../components/LoginForm';

const Login = (props) => {
	const navigate = useNavigate();

	const onSubmit = (e) => {
		e.preventDefault();

		// const loginData = {
		// 	username: e.target.username.value,
		// 	password: e.target.password.value,
		// };
		//Post request to backend
		//call function onLogin will set the state to true if it is correct
		//Then nav will change
		//we will get a tokan if it is true
		props.onLogin();
		navigate('/plan');
	};

	return (
		<div className="login-form__container">
			<LoginForm onSubmit={onSubmit} />
		</div>
	);
};

export default Login;
