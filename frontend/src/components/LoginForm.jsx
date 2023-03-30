import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import authService from '../features/Auth/authService';
import "../pages/auth/AuthForm.css";

const LoginForm = (props) => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const { username, password } = formData;

	const navigate = useNavigate();

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		const loginData = {
			username: username,
			password: password,
		};

		const response = await authService.login(loginData);
		setFormData({
			username: '',
			password: '',
		});
		if (response.data.success) {
			console.log('in login submit handler');
			props.onLogin();
			navigate('/plan');
		}
	};

	return (
		<form className="auth-form" onSubmit={onSubmit}>
			<div className="form-controls">
				<label htmlFor="username">Username:</label>
				<input
					type="text"
					id="username"
					name="username"
					value={username}
					onChange={onChange}
				/>
			</div>
			<div className="form-controls">
				<label htmlFor="password">Password:</label>
				<input
					type="text"
					id="password"
					name="password"
					value={password}
					onChange={onChange}
				/>
			</div>
			<button className="btn" type="submit" value="Sign in">
				Login
			</button>
		</form>
	);
};

export default LoginForm;
