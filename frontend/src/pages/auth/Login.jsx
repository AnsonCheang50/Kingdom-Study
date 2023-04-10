import React from 'react';
import LoginForm from '../../components/LoginForm';
import './AuthForm.css';

const Login = (props) => {
	return (
		<div className="form__container">
			<LoginForm onLogin={props.onLogin} />
		</div>
	);
};

export default Login;
