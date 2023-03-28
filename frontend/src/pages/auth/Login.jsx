import React from 'react';
import LoginForm from '../../components/LoginForm';

const Login = (props) => {
	return (
		<div className="login-form__container">
			<LoginForm onLogin={props.onLogin} />
		</div>
	);
};

export default Login;
