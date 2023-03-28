import React from 'react';


const LoginForm = (props) => {
	
	return (
		<form onSubmit={props.onSubmit}>
			<div className="form-controls">
				<label htmlFor="username">Username:</label>
				<input type="text" id="username" name="username" />
			</div>
			<div className="form-controls">
				<label htmlFor="password">Password:</label>
				<input type="text" id="password" name="password" />
			</div>
			<button className="btn" type="submit" value="Sign in">
				Login
			</button>
		</form>
	);
};

export default LoginForm;
