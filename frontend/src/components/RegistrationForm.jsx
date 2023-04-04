import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../features/Auth/authService';

import '../pages/auth/AuthForm.css'

const RegistrationForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		username: '',
		password: '',
		password2: '',
	});

	const { email, username, password, password2 } = formData;

	const navigate = useNavigate();

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		if (password !== password2) {
			console.error("Passwords don't match");
			return;
		}
		const registerData = {
			email: email,
			username: username,
			password: password,
		};

		const response = await authService.register(registerData);
		setFormData({
			email: '',
			username: '',
			password: '',
			password2: '',
		});

		if (response.data.success) {
			navigate('/login');
		}
	};

	return (
		<form className='auth-form' onSubmit={onSubmit}>
			<div className="form-controls">
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={onChange}
				/>
			</div>
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
			<div className="form-controls">
				<label htmlFor="password2">Confirm Password:</label>
				<input
					type="text"
					id="password2"
					name="password2"
					value={password2}
					onChange={onChange}
				/>
			</div>
			<button className="btn" type="submit">
				Register
			</button>
		</form>
	);
};

export default RegistrationForm;
